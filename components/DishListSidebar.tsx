
import React from 'react';
import { Dish, DietaryType, AboutSection, MainCategory } from '../types';

interface DishListSidebarProps {
  activeCategory: MainCategory;
  dishes: Dish[];
  selectedDishId: string | null;
  onSelectDish: (dish: Dish) => void;
  selectedAboutSection: string | null;
  onSelectAboutSection: (section: AboutSection) => void;
  dietaryFilter: DietaryType | 'All';
  setDietaryFilter: (filter: DietaryType | 'All') => void;
  t: (key: string) => string;
}

const DishListSidebar: React.FC<DishListSidebarProps> = ({
  activeCategory,
  dishes,
  selectedDishId,
  onSelectDish,
  selectedAboutSection,
  onSelectAboutSection,
  dietaryFilter,
  setDietaryFilter,
  t
}) => {

  // 1. Render About Us Sidebar
  if (activeCategory === MainCategory.ABOUT_US) {
      const sections = Object.values(AboutSection);
      return (
        <div className="w-full h-full bg-white border-r border-gray-300 flex flex-col shadow-sm z-10 overflow-y-auto">
            <div className="p-4 bg-gray-100 border-b border-gray-200 font-bold text-gray-700 uppercase tracking-wide">
                {t('about')}
            </div>
            {sections.map((section) => (
                <div
                    key={section}
                    onClick={() => onSelectAboutSection(section)}
                    className={`px-6 py-5 border-b border-gray-100 cursor-pointer transition-colors flex items-center justify-between ${
                    selectedAboutSection === section
                        ? 'bg-white border-l-4 border-l-red-600 shadow-sm'
                        : 'bg-gray-50 hover:bg-white text-gray-600'
                    }`}
                >
                    <span className={`font-semibold ${selectedAboutSection === section ? 'text-gray-900' : 'text-gray-600'}`}>
                        {section}
                    </span>
                     <svg className={`w-4 h-4 ${selectedAboutSection === section ? 'text-red-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            ))}
        </div>
      );
  }

  // 2. Render Food Menu Sidebar
  const filteredDishes = dishes.filter(d => dietaryFilter === 'All' || d.dietaryType === dietaryFilter);

  return (
    <div className="w-full h-full bg-white border-r border-gray-300 flex flex-col shadow-sm z-10">
      {/* Filter Tabs */}
      <div className="flex border-b border-gray-300 bg-gray-100 shrink-0">
        {['All', DietaryType.VEG, DietaryType.NON_VEG].map((type) => (
          <button
            key={type}
            onClick={() => setDietaryFilter(type as DietaryType | 'All')}
            className={`flex-1 py-4 text-xs lg:text-sm font-bold uppercase tracking-wider ${
              dietaryFilter === type
                ? 'bg-white text-red-600 border-b-2 border-red-600'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {type === 'All' ? t('all') : (type === DietaryType.VEG ? t('veg') : t('nonVeg'))}
          </button>
        ))}
      </div>

      {/* Simple List */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            onClick={() => onSelectDish(dish)}
            className={`px-6 py-5 border-b border-gray-200 cursor-pointer transition-colors flex items-center justify-between ${
              selectedDishId === dish.id
                ? 'bg-white border-l-4 border-l-red-600 shadow-sm'
                : 'hover:bg-white'
            }`}
          >
             <div className="flex items-center gap-3 overflow-hidden">
                 <div className={`w-3 h-3 rounded-full flex-shrink-0 ${dish.dietaryType === DietaryType.VEG ? 'bg-green-500' : 'bg-red-500'}`}></div>
                 <span className={`text-base font-semibold truncate ${selectedDishId === dish.id ? 'text-gray-900' : 'text-gray-600'}`}>
                    {dish.name}
                 </span>
             </div>
             <span className="text-base font-bold text-gray-900 ml-2">${dish.basePrice.toFixed(0)}</span>
          </div>
        ))}
        
        {filteredDishes.length === 0 && (
          <div className="p-8 text-center text-gray-400 text-sm italic">
             No items found
          </div>
        )}
      </div>
    </div>
  );
};

export default DishListSidebar;
