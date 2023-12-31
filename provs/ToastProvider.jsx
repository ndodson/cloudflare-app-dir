"use client";
import { Toaster } from "react-hot-toast";

export default function ToastProvider({
  children,
}) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className:
            "border-solid border-2 border-amber-900 p-4 text-amber-900",
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
          duration: 5000,
          success: {
            className: "bg-info p-4 text-black",
          },
          error: {
            className: "bg-error p-4 text-black",
          },
        }}
      />
    </>
  );
}

