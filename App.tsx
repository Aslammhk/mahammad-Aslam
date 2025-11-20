
import React, { useState, useEffect, useRef } from 'react';
import { Dish, MainCategory, DietaryType, CartItem, AboutSection, PortionSize } from './types';
import { MOCK_MENU, TRANSLATIONS } from './constants';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import DishListSidebar from './components/DishListSidebar';
import DishDetail from './components/DishDetail';
import AboutContent from './components/AboutContent';
import VideoModal from './components/VideoModal';
import CartModal from './components/CartModal';
import FeedbackView from './components/FeedbackView';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MainCategory>(MainCategory.BESTSELLER);
  const [dietaryFilter, setDietaryFilter] = useState<DietaryType | 'All'>('All');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [selectedAboutSection, setSelectedAboutSection] = useState<AboutSection>(AboutSection.RESTAURANT);
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoDishName, setVideoDishName] = useState('');
  
  // New States
  const [language, setLanguage] = useState('en');
  const [cartOpen, setCartOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  // Resizable sidebar state (Default 33.33%)
  const [sidebarWidthPercent, setSidebarWidthPercent] = useState(33.33);
  const isResizing = useRef(false);

  // Translation Helper
  const t = (key: string) => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['en'][key] || key;
  };

  // Handle Direction (RTL for Arabic)
  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Dish Selection Logic
  const currentDishes = MOCK_MENU[activeCategory] || [];

  useEffect(() => {
    if (activeCategory === MainCategory.ABOUT_US) {
        // Do nothing for dish selection
    } else if (currentDishes && currentDishes.length > 0) {
      const filtered = currentDishes.filter(d => dietaryFilter === 'All' || d.dietaryType === dietaryFilter);
      if (filtered.length > 0) {
        setSelectedDish(filtered[0]);
      } else {
        setSelectedDish(null);
      }
    } else {
      setSelectedDish(null);
    }
  }, [activeCategory, dietaryFilter, currentDishes]);

  const handleAddToCart = (dish: Dish, quantity: number, selectedAddons: string[], portion: PortionSize, finalPrice: number) => {
    const newItem: CartItem = { 
        ...dish, 
        quantity, 
        selectedAddons, 
        selectedPortion: portion,
        finalPrice: finalPrice
    };
    setCart([...cart, newItem]);
    setCartOpen(true);
  };

  const handleOpenVideo = (dishName: string) => {
    setVideoDishName(dishName);
    setVideoOpen(true);
  }

  // Resizing Logic
  const startResizing = (e: React.MouseEvent) => {
    isResizing.current = true;
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResizing);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing.current) return;
    const newWidth = (e.clientX / window.innerWidth) * 100;
    // Constrain between 20% and 50%
    if (newWidth > 15 && newWidth < 60) {
      setSidebarWidthPercent(newWidth);
    }
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopResizing);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white font-sans overflow-hidden">
      {/* Top Navigation */}
      <TopNav 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative" onMouseUp={stopResizing}>
          
          {/* Resizable Sidebar Container */}
          <div style={{ width: `${sidebarWidthPercent}%` }} className="h-full relative shrink-0">
            <DishListSidebar 
                activeCategory={activeCategory}
                dishes={currentDishes}
                selectedDishId={selectedDish?.id || null}
                onSelectDish={setSelectedDish}
                selectedAboutSection={selectedAboutSection}
                onSelectAboutSection={setSelectedAboutSection}
                dietaryFilter={dietaryFilter}
                setDietaryFilter={setDietaryFilter}
                t={t}
            />
            
            {/* Drag Handle */}
            <div 
                onMouseDown={startResizing}
                className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-red-500 bg-gray-200 transition-colors z-50 flex items-center justify-center"
            >
                <div className="h-8 w-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Content (Rest of width) */}
          <div className="flex-1 h-full relative bg-white flex flex-col overflow-hidden">
            {activeCategory === MainCategory.ABOUT_US ? (
                 <AboutContent section={selectedAboutSection} t={t} />
            ) : selectedDish ? (
              <DishDetail 
                dish={selectedDish} 
                onAddToCart={handleAddToCart}
                openVideo={() => handleOpenVideo(selectedDish.name)}
                onSelectRecommended={setSelectedDish}
                t={t}
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                <p className="text-lg font-medium">Select a dish</p>
              </div>
            )}
          </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav 
        selectedLanguage={language} 
        onSelectLanguage={setLanguage} 
        t={t}
        onOpenFeedback={() => setFeedbackOpen(true)}
      />

      {/* Chatbot */}
      <ChatBot t={t} />

      {/* Overlays */}
      <VideoModal 
        isOpen={videoOpen} 
        onClose={() => setVideoOpen(false)} 
        dishName={videoDishName} 
      />
      
      <CartModal 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        t={t}
      />

      {feedbackOpen && (
          <FeedbackView onClose={() => setFeedbackOpen(false)} t={t} />
      )}
    </div>
  );
};

export default App;
