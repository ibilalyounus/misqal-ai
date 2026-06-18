export default function SectionKicker({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/35 sm:gap-4 sm:text-[11px] sm:tracking-[0.28em]">
      <span>{number}</span>
      <span className="h-px w-12 bg-white/20 sm:w-20" />
      <span>{label}</span>
      <span className="hidden h-px w-12 bg-white/20 sm:block sm:w-20" />
      <span className="hidden sm:inline">Every piece of content, made to count.</span>
      <span className="hidden h-px w-12 bg-white/20 md:block" />
      <span dir="rtl" lang="ar">
        مِثقال
      </span>
    </div>
  );
}