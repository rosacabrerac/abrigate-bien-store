import { type ReactNode, useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabel?: string;
}

export default function Modal({ isOpen, onClose, children, ariaLabel }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (isOpen) {
      modal?.showModal();
    } else {
      modal?.close();
    }
  }, [isOpen]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: El elemento dialog maneja el escape nativamente
    <dialog
      ref={modalRef}
      aria-label={ariaLabel}
      className="fixed inset-0 m-auto max-w-lg w-[calc(100%-2rem)] backdrop:bg-black/60 bg-[var(--color-bg)] rounded-xl p-6 shadow-2xl text-white focus:outline-none backdrop:backdrop-blur-sm"
      onClose={() => onClose()}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          onClose();
        }
      }}
    >
      <div>{children}</div>
    </dialog>
  );
}
