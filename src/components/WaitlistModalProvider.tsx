"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import WaitlistModal from "./WaitlistModal";

const WaitlistModalProvider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Check for signup-related URL parameters
    const shouldShowModal =
      searchParams.has("signup") ||
      searchParams.has("waitlist") ||
      searchParams.has("join");

    if (shouldShowModal) {
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setIsModalOpen(false);

    // Clean up URL parameters
    const url = new URL(window.location.href);
    url.searchParams.delete("signup");
    url.searchParams.delete("waitlist");
    url.searchParams.delete("join");

    // Update URL without reload
    router.replace(url.pathname + (url.search ? url.search : ""), {
      scroll: false,
    });
  };

  return <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />;
};

export default WaitlistModalProvider;
