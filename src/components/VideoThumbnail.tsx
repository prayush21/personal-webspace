"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
import { VideoItem, getVideoUrl, getVideoThumbnailUrl } from "@/utils/cloudinary";

interface VideoThumbnailProps {
  video: VideoItem;
  onClick?: (video: VideoItem) => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const thumbnailUrl = video.thumbnail 
    ? getVideoThumbnailUrl(video.thumbnail)
    : getVideoThumbnailUrl(video.publicId);

  const videoUrl = getVideoUrl(video.publicId, 'q_auto,f_auto');

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    // Start playing the video preview after a small delay
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleClick = useCallback(() => {
    onClick?.(video);
  }, [onClick, video]);

  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <div
      className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group bg-light-surface/30 dark:bg-dark-surface/30 border border-light-border dark:border-dark-border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Thumbnail Image */}
      {!thumbnailError && (
        <Image
          src={thumbnailUrl}
          alt={video.title || "Video thumbnail"}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          className={`object-cover transition-opacity duration-300 ${
            isHovered && isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          onError={() => setThumbnailError(true)}
          unoptimized
        />
      )}

      {/* Fallback gradient background if thumbnail fails */}
      {thumbnailError && (
        <div className="absolute inset-0 bg-gradient-to-br from-light-accent/20 to-light-accent/40 dark:from-dark-accent/20 dark:to-dark-accent/40" />
      )}

      {/* Video Preview on Hover */}
      <video
        ref={videoRef}
        src={videoUrl}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered && isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoad}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Play Button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="bg-white/90 dark:bg-dark-surface/90 rounded-full p-3 shadow-lg backdrop-blur-sm">
          <PlayIcon className="w-6 h-6 text-light-accent dark:text-dark-accent" />
        </div>
      </div>

      {/* Duration Badge */}
      {video.duration && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
          {video.duration}
        </div>
      )}

      {/* Title on Hover */}
      {video.title && (
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-medium truncate drop-shadow-lg">
            {video.title}
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;
