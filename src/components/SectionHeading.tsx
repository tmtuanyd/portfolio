type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
};

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-faint uppercase">
        {label}
        <span className="text-accent"> / {index}</span>
      </p>
      <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
