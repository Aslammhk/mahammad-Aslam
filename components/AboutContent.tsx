
import React from 'react';
import { AboutSection } from '../types';
import { ABOUT_CONTENT } from '../constants';

interface AboutContentProps {
    section: AboutSection;
    t: (key: string) => string;
}

const AboutContent: React.FC<AboutContentProps> = ({ section, t }) => {
    const content = ABOUT_CONTENT[section];

    return (
        <div className="flex-1 h-full bg-white overflow-y-auto flex flex-col lg:flex-row animate-in fade-in duration-300">
             {/* Left: Image (2/3 width roughly in context of this container, 
                 but relative to the whole screen, the main area is 2/3) */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
                <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                     <h2 className="text-4xl font-bold text-white drop-shadow-md">{content.title}</h2>
                </div>
            </div>
            
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest mb-6">{section}</h3>
                
                <div className="prose prose-lg text-gray-700 leading-relaxed mb-8">
                    <p>{content.text}</p>
                </div>

                {section === AboutSection.EVENTS && (
                    <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-red-700 self-start">
                        {t('bookEvent')}
                    </button>
                )}

                {section === AboutSection.CONTACT && (
                     <div className="flex gap-4">
                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700">{t('callUs')}</button>
                     </div>
                )}

                 {section === AboutSection.SOCIAL && (
                     <div className="flex gap-4 mt-4">
                        {['Instagram', 'Facebook', 'TikTok'].map(s => (
                            <button key={s} className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 font-bold hover:bg-gray-100 hover:text-black">
                                {s}
                            </button>
                        ))}
                     </div>
                )}
            </div>
        </div>
    );
};

export default AboutContent;
