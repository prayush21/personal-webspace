"use client";

import React, { useEffect, useCallback, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { VideoItem, getVideoUrl } from "@/utils/cloudinary";

interface VideoModalProps {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Auto-play when modal opens
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay might be blocked
        });
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !video) return null;

  const videoUrl = getVideoUrl(video.publicId, "q_auto,f_auto");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>

        {/* Video Container */}
        <div className="aspect-[9/16] w-full rounded-xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            controls
            playsInline
            autoPlay
          />
        </div>

        {/* Video Info */}
        {(video.title || video.description) && (
          <div className="mt-4 text-center">
            {video.title && (
              <h3 className="text-white text-lg font-medium">{video.title}</h3>
            )}
            {video.description && (
              <p className="text-white/70 text-sm mt-1">{video.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
