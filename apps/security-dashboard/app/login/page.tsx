import Link from "next/link";
import LoginShell from "@/components/login/LoginShell";
import LoginBrandBadge from "@/components/login/LoginBrandBadge";
import LoginCard from "@/components/login/LoginCard";
import LoginForm from "@/components/login/LoginForm";

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
        subtitle="Use your registered passkey to continue."
      >
        <LoginForm />

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