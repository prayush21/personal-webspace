"use client";

import React, { useState } from "react";
import VideoThumbnail from "./VideoThumbnail";
import VideoModal from "./VideoModal";
import { VideoItem } from "@/utils/cloudinary";

interface VideoGridProps {
  videos: VideoItem[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing the video to allow for exit animation
    setTimeout(() => setSelectedVideo(null), 300);
  };

  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 mb-6 rounded-full bg-light-surface/50 dark:bg-dark-surface/50 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-light-textSecondary dark:text-dark-textSecondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-light-text dark:text-dark-text mb-2">
          No videos yet
        </h3>
        <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-sm">
          Videos will appear here once they&apos;re added to Cloudinary.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Instagram-style Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {videos.map((video) => (
          <VideoThumbnail
            key={video.id}
            video={video}
            onClick={handleVideoClick}
          />
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default VideoGrid;
