/**
 * Cloudinary configuration and utilities
 * 
 * To use this, you need to:
 * 1. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME environment variable
 * 2. Upload your videos to Cloudinary
 * 3. Add video public IDs to the videos array in this file
 */

// Cloudinary cloud name - should be set via environment variable
export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'YOUR_CLOUD_NAME';

// Base URL for Cloudinary resources
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;

/**
 * Video item interface
 */
export interface VideoItem {
  id: string;
  publicId: string; // Cloudinary public ID
  title?: string;
  description?: string;
  thumbnail?: string; // Optional custom thumbnail public ID
  duration?: string; // e.g., "0:30"
}

/**
 * Generate Cloudinary video URL
 */
export function getVideoUrl(publicId: string, transformations?: string): string {
  const transforms = transformations || 'q_auto';
  return `${CLOUDINARY_BASE_URL}/video/upload/${transforms}/${publicId}`;
}

/**
 * Generate Cloudinary video thumbnail URL
 * By default, generates a thumbnail from the middle of the video
 */
export function getVideoThumbnailUrl(
  publicId: string, 
  options?: {
    width?: number;
    height?: number;
    startOffset?: string; // e.g., "auto" or "3" (seconds)
  }
): string {
  const width = options?.width || 400;
  const height = options?.height || 720;
  const startOffset = options?.startOffset || 'auto';
  
  // Generate poster image from video
  const transforms = `w_${width},h_${height},c_fill,g_auto,so_${startOffset},f_auto,q_auto`;
  return `${CLOUDINARY_BASE_URL}/video/upload/${transforms}/${publicId}.jpg`;
}

/**
 * Sample videos array - Replace these with your actual Cloudinary video public IDs
 * 
 * To add your videos:
 * 1. Upload videos to your Cloudinary account
 * 2. Copy the public ID (the path after /upload/ without the file extension)
 * 3. Add them to this array
 * 
 * Example: If your video URL is:
 * https://res.cloudinary.com/your-cloud/video/upload/v1234/folder/my-video.mp4
 * The public ID would be: folder/my-video
 */
export const videos: VideoItem[] = [
  // Example videos - replace with your actual Cloudinary public IDs
  {
    id: '1',
    publicId: 'samples/sea-turtle', // Cloudinary sample video
    title: 'Sample Video 1',
    duration: '0:30',
  },
  {
    id: '2',
    publicId: 'samples/elephants', // Cloudinary sample video
    title: 'Sample Video 2',
    duration: '0:45',
  },
  // Add more videos here...
];
