"use client";

import React, { useEffect, useState } from "react";

const interests = [
  "Sports 🎾",
  "Content Creation 📸",
  "Movies 🍿",
  "Calvin & Hobbes 🐯",
  "Songwriting 🎵",
  "Astrophysics 🌌",
  "UX Engineering 🚀",
];

const DynamicTicker: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentInterest = interests[index];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    // Function to get the text without emoji
    const getTextWithoutEmoji = (text: string) => {
      return text.replace(
        /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu,
        ""
      );
    };

    // Function to get the emoji from text
    const getEmoji = (text: string) => {
      const match = text.match(
        /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu
      );
      return match ? match[0] : "";
    };

    const handleTyping = () => {
      if (isTyping) {
        const textWithoutEmoji = getTextWithoutEmoji(currentInterest);
        const emoji = getEmoji(currentInterest);

        if (displayText.length < textWithoutEmoji.length) {
          setDisplayText(textWithoutEmoji.slice(0, displayText.length + 1));
        } else if (displayText === textWithoutEmoji) {
          // Only add emoji when the text is fully typed
          setDisplayText(textWithoutEmoji + emoji);
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else if (isDeleting) {
        const textWithoutEmoji = getTextWithoutEmoji(currentInterest);

        if (displayText.length > textWithoutEmoji.length) {
          // Remove emoji in one go
          setDisplayText(textWithoutEmoji);
        } else if (displayText.length > 0) {
          // Delete text character by character
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % interests.length);
          setIsTyping(true);
        }
      }
    };

    const interval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(interval);
  }, [displayText, index, isDeleting, isTyping]);

  return (
    <div className="flex flex-col md:flex-row justify-start items-start md:items-center text-left">
      <span className="text-lg md:text-xl md:mr-2 text-lightTextPrimary dark:text-darkTextPrimary">
        I love to discuss
      </span>
      <span className="text-lg md:text-xl font-semibold text-lightAccent dark:text-darkAccent">
        {displayText}
        <span className="animate-blink">|</span>
      </span>
    </div>
  );
};

export default DynamicTicker;
