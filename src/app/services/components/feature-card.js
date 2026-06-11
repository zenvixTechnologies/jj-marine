export default function FeatureCard({ title, text, icon: Icon }) {
  return (
    <div className="rounded-[12px] bg-[#eef2f1] p-4 shadow-[0_10px_20px_rgba(15,61,62,0.04)] transition-colors hover:bg-white">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#1e6f5c]">
        <Icon className="h-4 w-4" />
      </div>
      <h4 className="text-[0.88rem] font-semibold text-[#0f3d3e]">{title}</h4>
      <p className="mt-1 text-[0.76rem] leading-5 text-[#475558]">{text}</p>
    </div>
  );
}
