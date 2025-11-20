
import React from 'react';
import { MainCategory } from '../types';

interface TopNavProps {
  activeCategory: MainCategory;
  onSelectCategory: (cat: MainCategory) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ activeCategory, onSelectCategory, cartCount, onOpenCart }) => {
  const categories = Object.values(MainCategory);

  return (
    <div className="w-full h-16 bg-gray-900 text-white shadow-lg flex items-center justify-between px-4 lg:px-8 z-20 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 w-48">
        <div className="h-8 w-8 bg-red-600 rounded-sm flex items-center justify-center font-bold text-lg">G</div>
        <span className="font-bold text-lg tracking-wider text-gray-100">GOURMET</span>
      </div>

      {/* Categories */}
      <div className="flex-1 flex justify-center h-full">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 lg:px-8 h-full text-xs lg:text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-4 ${
              activeCategory === cat
                ? 'border-red-600 text-white bg-white/5'
                : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cart */}
      <div className="w-48 flex justify-end">
        <button 
            onClick={onOpenCart}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
        >
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-4 w-4 bg-white text-red-600 text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                </span>
                )}
            </div>
            <span className="font-bold text-sm uppercase">Cart</span>
        </button>
      </div>
    </div>
  );
};

export default TopNav;
