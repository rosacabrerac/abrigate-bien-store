import { type ReactNode, useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export default function Drawer({
  isOpen,
  onClose,
  children,
  className,
  ariaLabel,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: El elemento dialog maneja el escape nativamente
    <dialog
      ref={dialogRef}
      onClose={() => onClose()}
      aria-label={ariaLabel}
      className={`fixed right-0 top-0 m-0 h-full max-w-full max-h-screen border-none shadow-xl backdrop:bg-black/50 backdrop:backdrop-blur-sm ml-auto ${className || ""}`}
      onClick={(e) => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const rect = dialog.getBoundingClientRect();
        const clickedInDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;

        if (!clickedInDialog) {
          onClose();
        }
      }}
    >
      {children}
    </dialog>
  );
}
