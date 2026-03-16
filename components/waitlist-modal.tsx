"use client";

import type { FormEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
  content: {
    title: string;
    body: string;
    subtext: string;
    inputLabel: string;
    inputPlaceholder: string;
    actionLabel: string;
    successTitle: string;
    successBody: string;
  };
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function WaitlistModal({
  open,
  onClose,
  content,
}: WaitlistModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const errorId = useId();
  const inputId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    lastActiveElementRef.current = document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const focusTarget = submitted ? closeButtonRef.current : emailInputRef.current;
    window.requestAnimationFrame(() => {
      focusTarget?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      lastActiveElementRef.current?.focus();
    };
  }, [open, onClose, submitted]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(18,20,18,0.66)] px-4 py-6 backdrop-blur-md"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative w-full max-w-xl rounded-[2rem] border border-[color:rgba(30,33,30,0.12)] bg-[rgba(255,255,255,0.96)] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.24)] sm:p-8"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(30,33,30,0.12)] bg-white text-xl text-[var(--continua-charcoal)] transition hover:border-[color:rgba(30,33,30,0.22)]"
          aria-label="Close waitlist modal"
        >
          x
        </button>

        {submitted ? (
          <div className="space-y-5 pr-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--continua-sage-deep)]">
              Private notification
            </p>
            <h2
              id={titleId}
              className="font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--continua-charcoal)]"
            >
              {content.successTitle}
            </h2>
            <p
              id={descriptionId}
              className="max-w-lg text-base leading-7 text-[color:rgba(30,33,30,0.72)]"
            >
              {content.successBody}
            </p>
          </div>
        ) : (
          <div className="space-y-6 pr-10">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--continua-sage-deep)]">
                Batch access
              </p>
              <h2
                id={titleId}
                className="font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--continua-charcoal)]"
              >
                {content.title}
              </h2>
              <p
                id={descriptionId}
                className="max-w-lg text-base leading-7 text-[color:rgba(30,33,30,0.72)]"
              >
                {content.body}
              </p>
              <p className="text-sm leading-6 text-[color:rgba(30,33,30,0.56)]">
                {content.subtext}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <label
                htmlFor={inputId}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:rgba(30,33,30,0.56)]"
              >
                {content.inputLabel}
              </label>
              <input
                id={inputId}
                ref={emailInputRef}
                type="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                placeholder={content.inputPlaceholder}
                autoComplete="email"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? errorId : descriptionId}
                className="w-full rounded-[1.2rem] border border-[color:rgba(30,33,30,0.14)] bg-[rgba(245,242,235,0.6)] px-4 py-4 text-base text-[var(--continua-charcoal)] outline-none transition placeholder:text-[color:rgba(30,33,30,0.36)] focus:border-[var(--continua-sage-deep)] focus:bg-white"
              />
              {error ? (
                <p
                  id={errorId}
                  className="text-sm leading-6 text-[rgb(147,53,53)]"
                >
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[var(--continua-charcoal)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--continua-alabaster)] transition hover:bg-[rgb(24,26,24)]"
              >
                {content.actionLabel}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
