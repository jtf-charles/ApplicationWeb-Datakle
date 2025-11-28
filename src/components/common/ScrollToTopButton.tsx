// src/components/ui/ScrollToTopButton.tsx
import React from "react";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Revenir en haut de la page"
      className="
        fixed
        bottom-5 right-5
        z-[9999]
        bg-[#0059FB]
        hover:bg-[#0042C5]
        text-white
        w-14 h-14
        rounded-full
        flex items-center justify-center
        shadow-xl
        transition
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 5l6 6-1.4 1.4L13 8.8V19h-2V8.8L7.4 12.4 6 11l6-6Z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
