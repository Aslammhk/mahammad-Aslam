
import React from 'react';

interface BottomNavProps {
  selectedLanguage: string;
  onSelectLanguage: (lang: string) => void;
  t: (key: string) => string;
  onOpenFeedback: () => void;
}

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'French' },
  { code: 'es', flag: '🇪🇸', label: 'Spanish' },
  { code: 'de', flag: '🇩🇪', label: 'German' },
  { code: 'it', flag: '🇮🇹', label: 'Italian' },
  { code: 'ar', flag: '🇸🇦', label: 'Arabic' },
  { code: 'ru', flag: '🇷🇺', label: 'Russian' },
  { code: 'zh', flag: '🇨🇳', label: 'Chinese' },
];

const BottomNav: React.FC<BottomNavProps> = ({ selectedLanguage, onSelectLanguage, t, onOpenFeedback }) => {
  return (
    <div className="w-full h-16 bg-gray-100 border-t border-gray-300 text-gray-800 flex items-center justify-between px-6 z-30 shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      {/* Left: Feedback Action */}
      <div className="flex items-center gap-4">
         <button 
            onClick={onOpenFeedback}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
         >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11l5-5h8.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293-.707V7a2 2 0 012-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            {t('feedback')}
         </button>
      </div>

      {/* Right: Languages */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onSelectLanguage(lang.code)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all duration-200 border-2 shadow-sm ${
              selectedLanguage === lang.code 
                ? 'border-red-600 bg-white scale-110 z-10' 
                : 'border-white bg-gray-200 grayscale opacity-70 hover:grayscale-0 hover:opacity-100'
            }`}
            title={lang.label}
          >
            {lang.flag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
