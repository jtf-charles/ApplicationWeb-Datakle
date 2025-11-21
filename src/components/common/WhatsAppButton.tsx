const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/50934389448"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5 left-5
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        w-14 h-14
        rounded-full
        flex items-center justify-center
        shadow-xl
        transition
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 .6C7.5.6.6 7.5.6 16c0 2.8.7 5.4 2 7.8L0 32l8.5-2.2c2.3 1.3 5 2 7.8 2 8.5 0 15.4-6.9 15.4-15.4C31.4 7.5 24.5.6 16 .6zm0 28c-2.5 0-4.9-.7-7-2l-.5-.3-5.1 1.3 1.4-5-.3-.5c-1.2-2-1.8-4.3-1.8-6.6C2.7 9 8.7 3 16 3s13.3 6 13.3 13.3S23.3 28.6 16 28.6zm7.3-10.4c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.3-.9 1.2-1.1 1.4-.2.2-.4.3-.7.1-.4-.2-1.5-.6-2.8-1.7a10.6 10.6 0 01-2-2.4c-.2-.3 0-.5.1-.7.2-.2.3-.4.5-.6l.3-.4c.1-.2.1-.4.1-.6 0-.2-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.7.3-.8.8-1.3 1.9-1.3 3 0 1.1.4 2.2 1.2 3.4a12.5 12.5 0 005.5 4.8c2 .9 3 .9 4.1.8 1.3-.2 2-.9 2.3-1.5.3-.6.3-1.1.2-1.3 0-.3-.2-.4-.4-.5z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
