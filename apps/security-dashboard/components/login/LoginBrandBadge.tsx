import { Shield } from "lucide-react";

export default function LoginBrandBadge() {
  return (
    <div className="tw-mb-7 tw-flex tw-items-center tw-gap-3 tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-2 tw-backdrop-blur-md tw-shadow-[0_10px_40px_rgba(0,0,0,0.18)] animate-login-fade">
      <div className="tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-full tw-bg-sky-500/12 tw-border tw-border-sky-400/20">
        <Shield className="tw-h-4 tw-w-4 tw-text-sky-300" />
      </div>
      <div>
        <p className="tw-text-[0.65rem] tw-uppercase tw-tracking-[0.38em] tw-text-slate-400">AegisZT</p>
        <p className="tw-text-sm tw-text-slate-200">Secure Access</p>
      </div>
    </div>
  );
}
