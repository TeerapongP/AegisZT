'use client';

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import LoginField from "./LoginField";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("analyst@aegiszt.local");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await signIn("passkey", {
      email,
      redirect: false,
      redirectTo: "/",
    });

    setIsSubmitting(false);

    if (!result) {
      setError("Unable to start passkey sign-in.");
      return;
    }

    if (!result.ok) {
      setError(result.error ?? "Passkey sign-in failed.");
      return;
    }

    router.push(result.url ?? "/");
    router.refresh();
  }

  return (
    <form className="tw-space-y-4" onSubmit={handleSubmit}>
      <LoginField label="Email address">
        <input
          type="email"
          name="email"
          autoComplete="username webauthn"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="tw-w-full tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-3.5 tw-text-white tw-placeholder-slate-500 tw-outline-none tw-transition tw-duration-200 focus:tw-border-sky-400/60 focus:tw-bg-white/8 focus:tw-ring-2 focus:tw-ring-sky-400/15"
          placeholder="you@company.com"
          required
        />
      </LoginField>

      <div className="tw-flex tw-items-center tw-gap-2 tw-rounded-2xl tw-border tw-border-sky-400/15 tw-bg-sky-500/10 tw-p-4 tw-text-sm tw-text-sky-100">
        <ShieldCheck className="tw-h-4 tw-w-4 tw-shrink-0 tw-text-sky-300" />
        Use a registered passkey. No password is required.
      </div>

      {error ? (
        <p className="tw-rounded-2xl tw-border tw-border-rose-400/20 tw-bg-rose-500/10 tw-p-3 tw-text-sm tw-text-rose-200" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="tw-group tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-2xl tw-border tw-border-white/10 tw-bg-[linear-gradient(135deg,#7dd3fc_0%,#38bdf8_35%,#0ea5e9_70%,#0891b2_100%)] tw-px-5 tw-py-3.5 tw-font-semibold tw-text-white tw-shadow-[0_18px_40px_rgba(14,165,233,0.24)] tw-transition tw-duration-200 hover:tw-shadow-[0_20px_50px_rgba(14,165,233,0.32)] hover:tw-translate-y-[-1px] hover:tw-saturate-110 disabled:tw-cursor-not-allowed disabled:tw-opacity-70"
      >
        {isSubmitting ? <Loader2 className="tw-h-4 tw-w-4 tw-animate-spin" /> : null}
        Sign in with passkey
        {!isSubmitting ? <ArrowRight className="tw-h-4 tw-w-4 tw-transition tw-duration-200 group-hover:tw-translate-x-0.5" /> : null}
      </button>
    </form>
  );
}