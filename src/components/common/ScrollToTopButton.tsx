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
      aria-label="Revenir en haut"
      className="
        fixed
        bottom-4 right-4
        z-[9999]
        bg-[#0059FB]
        hover:bg-[#0042C5]
        text-white

        /* Responsive button sizes */
        w-10 h-10         /* mobile */
        sm:w-12 sm:h-12   /* tablette */
        lg:w-14 lg:h-14   /* desktop */

        rounded-full
        flex items-center justify-center
        shadow-xl
        transition
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="
          w-5 h-5         /* mobile */
          sm:w-6 sm:h-6   /* tablette */
          lg:w-7 lg:h-7   /* desktop */
        "
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 5l6 6-1.4 1.4L13 8.8V19h-2V8.8L7.4 12.4 6 11l6-6Z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
