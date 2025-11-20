
import React, { useState, useEffect } from 'react';
import { Dish, PortionSize } from '../types';
import { getChefInsight } from '../services/geminiService';
import { MOCK_MENU } from '../constants';

interface DishDetailProps {
  dish: Dish;
  onAddToCart: (dish: Dish, quantity: number, selectedAddons: string[], portion: PortionSize, finalPrice: number) => void;
  openVideo: () => void;
  onSelectRecommended: (dish: Dish) => void;
  t: (key: string) => string;
}

const DishDetail: React.FC<DishDetailProps> = ({ dish, onAddToCart, openVideo, onSelectRecommended, t }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [chefInsight, setChefInsight] = useState<string>('');
  const [loadingInsight, setLoadingInsight] = useState(false);
  
  // Pricing Logic
  const [selectedPortion, setSelectedPortion] = useState<PortionSize>(PortionSize.FULL);
  const [currentBasePrice, setCurrentBasePrice] = useState(dish.basePrice);

  useEffect(() => {
    setQuantity(1);
    setSelectedAddons([]);
    setSelectedPortion(PortionSize.FULL);
    setLoadingInsight(true);
    setChefInsight(t('consulting'));
    getChefInsight(dish).then(insight => {
      setChefInsight(insight);
      setLoadingInsight(false);
    });
  }, [dish, t]);

  // Recalculate base price when portion changes
  useEffect(() => {
      let multiplier = 1;
      if (selectedPortion === PortionSize.SINGLE) multiplier = 0.4;
      if (selectedPortion === PortionSize.HALF) multiplier = 0.7;
      setCurrentBasePrice(dish.basePrice * multiplier);
  }, [selectedPortion, dish.basePrice]);

  const toggleAddon = (addonName: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonName)
        ? prev.filter(a => a !== addonName)
        : [...prev, addonName]
    );
  };

  const calculateTotal = () => {
    const addonTotal = dish.addOns
      .filter(addon => selectedAddons.includes(addon.name))
      .reduce((sum, addon) => sum + addon.price, 0);
    return (currentBasePrice + addonTotal) * quantity;
  };

  const allDishes = Object.values(MOCK_MENU).flat();
  const recommendedDishes = dish.recommendedDishIds 
    ? allDishes.filter(d => dish.recommendedDishIds?.includes(d.id))
    : [];

  return (
    <div className="flex-1 h-full bg-white overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row">
      {/* Left Column: Image, Stats, Ingredients */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col gap-6 bg-gray-50/50 border-r border-gray-100">
        
        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[16/10] bg-gray-200">
          <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center cursor-pointer" onClick={openVideo}>
            <div className="bg-white/90 text-red-600 p-3 rounded-full shadow-xl transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="bg-black/70 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {t('watchVideo')}
            </span>
          </div>
          {/* Sales Metadata Overlay */}
          {dish.salesMetrics && (
              <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                      {dish.salesMetrics.dailyOnlineOrders} {t('sold')} / day
                  </span>
                  {dish.salesMetrics.popularityScore > 0.9 && (
                      <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase flex items-center gap-1">
                          ★ {t('popular')}
                      </span>
                  )}
              </div>
          )}
        </div>

        {/* Stats Row */}
        <div className="flex justify-between gap-4">
            <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 text-center shadow-sm">
                <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{t('calories')}</span>
                <span className="text-lg font-bold text-gray-800">{dish.calories}</span>
            </div>
             <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 text-center shadow-sm">
                <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{t('prepTime')}</span>
                <span className="text-lg font-bold text-gray-800">{dish.prepTime.replace('mins', t('min'))}</span>
            </div>
             <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 text-center shadow-sm">
                <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{t('rating')}</span>
                <span className="text-lg font-bold text-yellow-500">{dish.rating}</span>
            </div>
        </div>

        {/* Ingredients */}
        <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">{t('fullIngredients')}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
                {dish.ingredients.join(', ')}.
            </p>
        </div>
      </div>

      {/* Right Column: Info, AI, Portion, Addons, Cart Action */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col relative">
        
        <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
                 <h1 className="text-3xl font-extrabold text-gray-900 leading-tight max-w-[70%]">{dish.name}</h1>
                 <div className="text-right">
                    <span className="block text-3xl font-bold text-red-600">${currentBasePrice.toFixed(2)}</span>
                 </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{dish.description}</p>

            {/* AI Insight */}
             <div className="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500 mb-4">
                <h5 className="text-[10px] font-bold text-indigo-800 uppercase tracking-wide mb-1">{t('chefInsight')}</h5>
                <p className="text-xs text-indigo-900 italic leading-relaxed">
                    {loadingInsight ? t('thinking') : `"${chefInsight}"`}
                </p>
             </div>

             {/* Portion Selector */}
             <div className="mb-4">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t('portionSize')}</h3>
                 <div className="flex bg-gray-100 p-1 rounded-lg">
                     {[PortionSize.SINGLE, PortionSize.HALF, PortionSize.FULL].map((size) => (
                         <button
                            key={size}
                            onClick={() => setSelectedPortion(size)}
                            className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                                selectedPortion === size 
                                ? 'bg-white text-red-600 shadow-sm' 
                                : 'text-gray-500 hover:text-gray-800'
                            }`}
                         >
                             {size === PortionSize.SINGLE && t('single')}
                             {size === PortionSize.HALF && t('half')}
                             {size === PortionSize.FULL && t('full')}
                         </button>
                     ))}
                 </div>
             </div>
        </div>

        {/* Addons List */}
        <div className="flex-1 overflow-y-auto pr-2 mb-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b border-gray-100 pb-1">{t('customizeOrder')}</h3>
            <div className="space-y-1">
                {dish.addOns.map((addon, idx) => (
                    <div key={idx} 
                        onClick={() => toggleAddon(addon.name)}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer border transition-all ${selectedAddons.includes(addon.name) ? 'bg-red-50 border-red-200' : 'bg-white border-transparent hover:bg-gray-50'}`}
                    >
                        <div className="flex items-center gap-3">
                             <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedAddons.includes(addon.name) ? 'bg-red-600 border-red-600' : 'border-gray-300'}`}>
                                {selectedAddons.includes(addon.name) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                             </div>
                             <span className="text-sm font-medium text-gray-800">{addon.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-500">+${addon.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Recommended Strip */}
        {recommendedDishes.length > 0 && (
             <div className="mb-4">
                 <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">{t('recommended')}</h3>
                 <div className="flex gap-2">
                    {recommendedDishes.slice(0, 3).map(rec => (
                        <div key={rec.id} onClick={() => onSelectRecommended(rec)} className="w-20 cursor-pointer hover:opacity-80 transition-opacity">
                             <img src={rec.image} className="w-20 h-14 object-cover rounded-md mb-1 bg-gray-100" alt={rec.name} />
                             <div className="text-[10px] font-bold text-gray-700 truncate">{rec.name}</div>
                        </div>
                    ))}
                 </div>
             </div>
        )}

        {/* Action Area */}
        <div className="mt-auto bg-gray-900 text-white p-4 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600 flex items-center justify-center font-bold text-lg">-</button>
                    <span className="text-xl font-bold w-6 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600 flex items-center justify-center font-bold text-lg">+</button>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase block">{t('totalAmount')}</span>
                    <span className="text-2xl font-bold text-green-400">${calculateTotal().toFixed(2)}</span>
                </div>
            </div>
            <button 
                onClick={() => onAddToCart(dish, quantity, selectedAddons, selectedPortion, currentBasePrice)}
                className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-widest rounded-xl transition-colors"
            >
                {t('addToOrder')}
            </button>
        </div>

      </div>
    </div>
  );
};

export default DishDetail;
