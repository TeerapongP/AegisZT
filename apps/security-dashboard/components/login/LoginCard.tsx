import { Shield } from "lucide-react";

export default function LoginCard({
  title,
  subtitle,
  eyebrow = "Sign in",
  icon,
  children,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="tw-w-full tw-max-w-[27.5rem] tw-rounded-[2rem] tw-border tw-border-white/10 tw-bg-white/[0.05] tw-p-6 sm:tw-p-8 tw-shadow-[0_30px_120px_rgba(0,0,0,0.42)] tw-backdrop-blur-2xl animate-login-rise">
      <div className="tw-flex tw-items-start tw-justify-between tw-gap-4">
        <div className="tw-space-y-2">
          <p className="tw-text-[0.7rem] tw-uppercase tw-tracking-[0.38em] tw-text-slate-400">{eyebrow}</p>
          <h1 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-white">{title}</h1>
          <p className="tw-text-sm tw-leading-6 tw-text-slate-300">{subtitle}</p>
        </div>
        <div className="tw-grid tw-h-12 tw-w-12 tw-place-items-center tw-rounded-2xl tw-bg-sky-500/15 tw-border tw-border-sky-400/20 tw-shadow-[0_8px_24px_rgba(14,165,233,0.15)]">
          {icon ?? <Shield className="tw-h-6 tw-w-6 tw-text-sky-300" />}
        </div>
      </div>

      <div className="tw-mt-8 tw-space-y-4">{children}</div>
    </div>
  );
}
