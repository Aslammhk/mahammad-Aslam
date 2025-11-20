
import React, { useState } from 'react';

interface FeedbackViewProps {
    onClose: () => void;
    t: (key: string) => string;
}

const FeedbackView: React.FC<FeedbackViewProps> = ({ onClose, t }) => {
    const [submitted, setSubmitted] = useState(false);

    const categories = ['qualityFood', 'speedService', 'ambience', 'staff', 'value'];
    const ratings = ['excellent', 'good', 'average', 'poor'];

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(onClose, 2000);
    };

    if (submitted) {
        return (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center text-white">
                <div className="text-center animate-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-3xl font-bold">{t('feedbackSuccess')}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="bg-gray-900 text-white p-6 flex justify-between items-center shrink-0">
                    <h2 className="text-2xl font-bold">{t('feedback')}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                
                <div className="p-8 overflow-y-auto">
                    <div className="space-y-8">
                        {categories.map(cat => (
                            <div key={cat} className="border-b border-gray-100 pb-6 last:border-0">
                                <label className="block text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">{t(cat)}</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {ratings.map(rating => (
                                        <label key={rating} className="cursor-pointer group">
                                            <input type="radio" name={cat} className="peer sr-only" />
                                            <div className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50 peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600 transition-all">
                                                <div className="text-sm font-bold capitalize">{t(rating)}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        
                        <div>
                            <label className="block text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">{t('suggestions')}</label>
                            <textarea className="w-full border border-gray-300 rounded-lg p-3 h-24 focus:ring-2 focus:ring-red-500 focus:outline-none"></textarea>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-200 shrink-0">
                    <button onClick={handleSubmit} className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-red-700 transition-colors uppercase tracking-widest shadow-lg">
                        {t('submitFeedback')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackView;
