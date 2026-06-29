import { type ReactNode, useEffect, useState } from "react";

interface MobileMenuProps {
  children: ReactNode;
}

export default function MobileMenu({ children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 text-white focus:outline-none cursor-pointer relative"
        onClick={() => setIsOpen(true)}
        aria-label="Menu de navegación"
        aria-expanded={isOpen}
      >
        <span className="w-6 h-[2px] bg-white rounded transition-all duration-300 absolute -translate-y-1.5"></span>
        <span className="w-6 h-[2px] bg-white rounded transition-all duration-300 absolute"></span>
        <span className="w-6 h-[2px] bg-white rounded transition-all duration-300 absolute translate-y-1.5"></span>
      </button>

      <button
        type="button"
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-45 transition-opacity duration-300 w-full h-full border-none p-0 cursor-default ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-label="Cerrar menú"
        tabIndex={-1}
      />

      <div
        className={`fixed top-0 right-0 w-72 h-screen z-50 bg-[#0a1628] border-l border-[var(--color-border)] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        inert={!isOpen}
      >
        <div className="flex justify-end items-center h-16 px-6 border-b border-white/[0.03]">
          <button
            type="button"
            className="text-white hover:text-[var(--color-brand)] transition-colors cursor-pointer flex items-center justify-center w-8 h-8"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Cerrar menú</title>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 py-6 px-6">{children}</div>
      </div>
    </>
  );
}
