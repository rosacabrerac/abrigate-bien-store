import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { removeToast, type Toast, toasts } from "../store/cartStore";

function ToastItem({ toast }: { toast: Toast }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [toast.id]);

  return (
    <div className="bg-slate-900 text-white p-4 rounded-lg shadow-lg flex justify-between gap-4 border border-slate-700">
      <span>{toast.message}</span>
      <button
        type="button"
        onClick={() => removeToast(toast.id)}
        className="text-red-400 hover:text-red-300"
      >
        X
      </button>
    </div>
  );
}

export default function ToastContainer() {
  const toastList = useStore(toasts);

  return (
    <div className="flex flex-col gap-2 fixed bottom-4 right-4 z-50">
      {toastList.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
