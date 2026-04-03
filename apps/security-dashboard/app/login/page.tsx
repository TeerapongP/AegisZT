import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LoginShell from "@/components/login/LoginShell";
import LoginBrandBadge from "@/components/login/LoginBrandBadge";
import LoginCard from "@/components/login/LoginCard";
import LoginField from "@/components/login/LoginField";
import PasswordField from "@/components/login/PasswordField";

export const metadata = {
  title: "Login | AegisZT Security Dashboard",
  description: "Sign in to access the AegisZT security monitoring dashboard.",
};

export default function LoginPage() {
  return (
    <LoginShell>
      <LoginBrandBadge />

      <LoginCard
        title="Welcome back"
        subtitle="Use your workspace credentials to continue."
      >
        <div className="tw-space-y-4">
          <LoginField label="Email address">
            <input
              type="email"
              defaultValue="analyst@aegiszt.local"
              className="tw-w-full tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-3.5 tw-text-white tw-placeholder-slate-500 tw-outline-none tw-transition tw-duration-200 focus:tw-border-sky-400/60 focus:tw-bg-white/8 focus:tw-ring-2 focus:tw-ring-sky-400/15"
              placeholder="you@company.com"
            />
          </LoginField>

          <LoginField label="Password">
            <PasswordField defaultValue="AegisZT-2026" placeholder="Enter your password" />
          </LoginField>

          <div className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-text-sm">
            <label className="tw-flex tw-items-center tw-gap-2 tw-text-slate-300">
              <input type="checkbox" defaultChecked className="tw-h-4 tw-w-4 tw-rounded tw-border-white/20 tw-bg-white/10 tw-text-sky-500 focus:tw-ring-sky-400" />
              Remember this device
            </label>
            <Link href="/forgot-password" className="tw-text-sky-300 tw-transition hover:tw-text-sky-200">
              Forgot password?
            </Link>
          </div>

          <Link
            href="/?login=1"
            className="tw-group tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-2xl tw-border tw-border-white/10 tw-bg-[linear-gradient(135deg,#7dd3fc_0%,#38bdf8_35%,#0ea5e9_70%,#0891b2_100%)] tw-px-5 tw-py-3.5 tw-font-semibold tw-text-white tw-shadow-[0_18px_40px_rgba(14,165,233,0.24)] tw-transition tw-duration-200 hover:tw-shadow-[0_20px_50px_rgba(14,165,233,0.32)] hover:tw-translate-y-[-1px] hover:tw-saturate-110"
          >
            Sign in to dashboard
            <ArrowRight className="tw-h-4 tw-w-4 tw-transition tw-duration-200 group-hover:tw-translate-x-0.5" />
          </Link>
        </div>

        <div className="tw-mt-6 tw-flex tw-items-center tw-justify-between tw-rounded-2xl tw-border tw-border-white/10 tw-bg-black/10 tw-p-4 tw-text-sm tw-text-slate-300">
          <span>Need access?</span>
          <Link href="mailto:security@aegiszt.local" className="tw-text-sky-300 hover:tw-text-sky-200">
            Contact admin
          </Link>
        </div>
      </LoginCard>
    </LoginShell>
  );
}