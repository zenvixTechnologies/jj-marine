export default function SectionShell({ children, className = "" }) {
  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">{children}</div>
    </section>
  );
}
