export default function LoginShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="tw-min-h-screen tw-relative tw-overflow-hidden tw-bg-[#06101c] tw-text-white">
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_85%_85%,rgba(14,165,233,0.14),transparent_24%)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[linear-gradient(135deg,rgba(255,255,255,0.025)_0%,transparent_26%,transparent_74%,rgba(255,255,255,0.025)_100%)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] tw-bg-[size:64px_64px] tw-opacity-15" />

      <div className="tw-relative tw-z-10 tw-min-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6 sm:tw-p-10 lg:tw-p-14">
        {children}
      </div>
    </main>
  );
}
