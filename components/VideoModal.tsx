import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  dishName: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, dishName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden flex items-center justify-center border border-gray-800">
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        {/* Simulated Player UI */}
        <div className="text-center text-white">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-10 h-10 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Cooking {dishName}</h3>
            <p className="text-gray-400">Simulated Video Feed</p>
        </div>
        
        {/* Progress bar simulation */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-800">
            <div className="h-full w-1/3 bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
