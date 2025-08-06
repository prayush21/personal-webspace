import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

interface WaitlistSignupProps {
  variant?: "hero" | "page" | "banner";
  title?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  onSuccess?: () => void;
}

const WaitlistSignup: React.FC<WaitlistSignupProps> = ({
  variant = "hero",
  title,
  description,
  placeholder = "Enter your email",
  className = "",
  onSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "waitlist",
          email: email,
        }).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! You're on the list 🎉");
        // Keep the email in the input field - don't clear it

        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  const variants = {
    hero: "flex flex-col sm:flex-row gap-3 max-w-md",
    page: "flex flex-col gap-4 max-w-lg mx-auto",
    banner: "flex flex-col sm:flex-row gap-2 items-center",
  };

  return (
    <div className={`${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 text-lg">
          {description}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className={variants[variant]}
        name="waitlist"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Hidden input for Netlify form detection */}
        <input type="hidden" name="form-name" value="waitlist" />

        {/* Honeypot field for spam protection */}
        <div style={{ display: "none" }}>
          <label>
            Don&apos;t fill this out if you&apos;re human:{" "}
            <input name="bot-field" />
          </label>
        </div>

        <div className="flex-1 relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 !text-neutral-600 dark:!text-dark-text-secondary transition-colors duration-200 z-10" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={status === "loading" || status === "success"}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-neutral-300/20 dark:border-neutral-600/20 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-dark-text-primary placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-light-highlight dark:focus:ring-dark-accent focus:border-transparent transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-75"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`w-auto px-6 py-3 font-medium flex items-center justify-center gap-2 rounded-lg focus:outline-none transition-all duration-200 ${
            status === "success"
              ? // Success state - elevated like normal but disabled
                "bg-light-highlight dark:bg-dark-accent text-white shadow-lg border-2 border-light-highlight/80 dark:border-dark-accent/80 cursor-not-allowed"
              : status === "loading"
              ? // Loading state - slightly pressed
                "bg-light-highlight dark:bg-dark-accent text-white shadow-md border-2 border-light-highlight/90 dark:border-dark-accent/90 translate-y-0.5"
              : // Normal state - keyboard key with depth
                "bg-light-highlight dark:bg-dark-accent text-white shadow-lg border-2 border-light-highlight/20 dark:border-dark-accent/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner focus:ring-2 focus:ring-light-highlight dark:focus:ring-dark-accent focus:ring-offset-2"
          }`}
        >
          {status === "loading" ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>Joining...</span>
            </>
          ) : status === "success" ? (
            <>
              <span>Joined!</span>
            </>
          ) : (
            <>
              <span>Join!</span>
            </>
          )}
        </button>
      </form>

      {message && (
        <div
          className={`mt-3 text-sm ${
            status === "success" ? "" : "text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default WaitlistSignup;
