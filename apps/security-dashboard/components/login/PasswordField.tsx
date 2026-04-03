"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({
  defaultValue,
  placeholder,
}: {
  defaultValue?: string;
  placeholder?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="tw-relative">
      <input
        type={showPassword ? "text" : "password"}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="tw-w-full tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-3.5 tw-pr-12 tw-text-white tw-placeholder-slate-500 tw-outline-none tw-transition tw-duration-200 focus:tw-border-sky-400/60 focus:tw-bg-white/8 focus:tw-ring-2 focus:tw-ring-sky-400/15"
      />
      <button
        type="button"
        onClick={() => setShowPassword((value) => !value)}
        className="tw-absolute tw-right-3 tw-top-1/2 tw--translate-y-1/2 tw-text-slate-400 tw-transition hover:tw-text-white"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff className="tw-h-4 tw-w-4" /> : <Eye className="tw-h-4 tw-w-4" />}
      </button>
    </div>
  );
}
