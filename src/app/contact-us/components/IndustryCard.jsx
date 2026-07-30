// components/IndustryCard.jsx

import Image from "next/image";

export default function IndustryCard({
  icon,
  title,
  description,
  image,
}) {
  return (
    <div className="glass-card group relative min-w-[320px] overflow-hidden rounded-xl p-6 border border-marine-primary/5 shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-marine-gold pointer-events-none" />
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-marine-gold to-marine-gold-soft text-marine-primary shadow-lg">
        {icon}
      </div>

      <h3 className="mb-4 text-xl font-bold text-marine-primary">
        {title}
      </h3>

      <p className="mb-6 text-sm text-marine-text leading-relaxed">
        {description}
      </p>

      <div className="relative mt-8 h-40 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
        />
      </div>
    </div>
  );
}