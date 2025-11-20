
import React from 'react';

interface AboutUsProps {
    isOpen: boolean;
    onClose: () => void;
    t: (key: string) => string;
}

const AboutUs: React.FC<AboutUsProps> = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 p-4">
        <div className="bg-white w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl relative">
            
            <button onClick={onClose} className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 p-2 rounded-full z-10">
                 <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="flex-1 overflow-y-auto">
                <div className="relative h-64">
                     <img src="https://picsum.photos/id/431/800/600" className="w-full h-full object-cover" alt="Restaurant" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                         <h1 className="text-4xl text-white font-bold">{t('about')}</h1>
                     </div>
                </div>
                <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Tradition & Taste</h2>
                         <p className="text-gray-600 leading-relaxed mb-4">
                            Since 1984, Gourmet Touch has been an institution in the heart of the city. We combine traditional recipes with modern culinary techniques to bring you an unforgettable dining experience.
                         </p>
                         <p className="text-gray-600 leading-relaxed">
                            Our chefs insist on using only the freshest, locally sourced ingredients. Every dish serves as a testament to our passion for food and hospitality.
                         </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                         <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide">The Experience</h3>
                         <ul className="space-y-3 text-sm text-gray-700">
                             <li className="flex items-center gap-3">
                                 <span className="text-red-500 font-bold">✓</span> Michelin-trained Chefs
                             </li>
                             <li className="flex items-center gap-3">
                                 <span className="text-red-500 font-bold">✓</span> Organic & Locally Sourced
                             </li>
                             <li className="flex items-center gap-3">
                                 <span className="text-red-500 font-bold">✓</span> Premium Wine Selection
                             </li>
                             <li className="flex items-center gap-3">
                                 <span className="text-red-500 font-bold">✓</span> Rated #1 for Ambience
                             </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
