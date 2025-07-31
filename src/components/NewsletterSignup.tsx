import React, { useState } from "react";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

interface NewsletterSignupProps {
  variant?: "hero" | "page" | "banner";
  title?: string;
  description?: string;
  placeholder?: string;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = "hero",
  title,
  description,
  placeholder = "Enter your email",
  className = "",
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
      // TODO: Replace with your actual newsletter service
      // Examples: ConvertKit, Mailchimp, Substack, etc.
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! You're on the list 🎉");
        setEmail("");
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
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
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className={variants[variant]}>
        <div className="flex-1 relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-light-text-secondary dark:text-dark-text-secondary" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={status === "loading" || status === "success"}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-light-text-primary dark:text-dark-text-primary placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-light-highlight dark:focus:ring-dark-accent focus:border-transparent transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 bg-light-highlight dark:bg-dark-accent text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-light-highlight dark:focus:ring-dark-accent focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium min-w-[120px] flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>Joining...</span>
            </>
          ) : status === "success" ? (
            <>
              <CheckCircleIcon className="h-5 w-5" />
              <span>Joined!</span>
            </>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </form>

      {message && (
        <div
          className={`mt-3 text-sm ${
            status === "success"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;
