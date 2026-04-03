export default function LoginField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="tw-block tw-space-y-2">
      <span className="tw-text-xs tw-font-medium tw-uppercase tw-tracking-[0.28em] tw-text-slate-400">{label}</span>
      {children}
    </label>
  );
}
