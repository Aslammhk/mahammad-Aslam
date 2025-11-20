
import React from 'react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  t: (key: string) => string;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, t }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => {
     const addonsPrice = item.selectedAddons.reduce((aSum, addonName) => {
        const addon = item.addOns.find(a => a.name === addonName);
        return aSum + (addon ? addon.price : 0);
     }, 0);
     // Use finalPrice from cart item (which includes portion calculation)
     return sum + ((item.finalPrice + addonsPrice) * item.quantity);
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
        {/* Click outside to close */}
        <div className="absolute inset-0" onClick={onClose}></div>

        <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 bg-red-600 text-white flex items-center justify-between shadow-md z-10">
                <h2 className="text-xl font-bold uppercase tracking-wide">{t('cartTitle')}</h2>
                <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                         <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        <p>{t('emptyCart')}</p>
                    </div>
                ) : (
                    cartItems.map((item, idx) => (
                        <div key={idx} className="flex gap-4 border-b border-gray-100 pb-4">
                             <div className="h-16 w-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                 <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                             </div>
                             <div className="flex-1">
                                 <div className="flex justify-between items-start">
                                     <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                     <span className="font-bold text-red-600 text-sm">${item.finalPrice.toFixed(2)}</span>
                                 </div>
                                 <div className="flex gap-2 text-[10px] mt-1 uppercase font-bold text-gray-500">
                                     <span className="bg-gray-200 px-1 rounded">{item.selectedPortion}</span>
                                     <span>Qty: {item.quantity}</span>
                                 </div>
                                 {item.selectedAddons.length > 0 && (
                                     <div className="text-[10px] text-gray-400 mt-1">
                                         + {item.selectedAddons.join(', ')}
                                     </div>
                                 )}
                             </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-bold uppercase text-xs">{t('total')}</span>
                    <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
                <button 
                    onClick={() => { alert('Order Sent!'); onClose(); }}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-bold shadow hover:bg-green-700 transition-colors uppercase tracking-wide"
                    disabled={cartItems.length === 0}
                >
                    {t('checkout')}
                </button>
            </div>
        </div>
    </div>
  );
};

export default CartModal;
