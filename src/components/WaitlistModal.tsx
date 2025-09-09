"use client";

import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import WaitlistSignup from "./WaitlistSignup";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSuccess = () => {
    setShowSuccess(true);
    // Auto close after 12 seconds
    setTimeout(() => {
      onClose();
      setShowSuccess(false);
    }, 15000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 transform transition-all duration-300 ease-out">
        <div className="bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-light-border dark:border-dark-border">
            <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
              Play Connect! 🎮
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6 text-light-text-secondary dark:text-dark-text-secondary" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {showSuccess ? (
              <div className="text-center py-8">
                <div className="text-3xl mb-4">Word up! You&apos;re in.</div>
                {/* <h3 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
                  Word up! You&apos;re in.
                </h3> */}
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  Prepare for some friendly (and maybe not-so-friendly)
                  competition soon! 🚀
                </p>
              </div>
            ) : (
              <div>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6 text-center">
                  Think you&apos;re the fastest with words? Get early access and
                  challenge your friends!
                </p>

                <WaitlistSignup
                  variant="page"
                  placeholder="your.email@example.com"
                  className="text-center"
                  onSuccess={handleSuccess}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
