"use client";
import React, { useCallback, useEffect, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";

type ModalProps = {
  children: ReactNode;
  onDismiss?: () => void;
};

export default function Modal({ children, onDismiss }: ModalProps) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const handleDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss();
    } else {
      router.back();
    }
  }, [onDismiss, router]);

  const onClick = useCallback(
    (e: any) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        handleDismiss();
      }
    },
    [handleDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: any) => {
      if (e.key === "Escape") handleDismiss();
    },
    [handleDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="bg-white rounded-lg p-6 max-w-3xl sm:max-w-5xl w-full max-h-[90vh] overflow-auto"
      >
        {children}
      </div>
    </div>
  );
}
