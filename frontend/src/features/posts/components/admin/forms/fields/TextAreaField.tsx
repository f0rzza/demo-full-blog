type Props = { sectionTitle: string; fieldName: string; placeholder?: string; rows?: number };

export function TextAreaField({ sectionTitle, fieldName, placeholder = '', rows = 5 }: Props) {
  return (
    <section>
      <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">
        {sectionTitle}
      </h3>
      <textarea
        className="w-full bg-surface-container-low border-none rounded-xl p-4 font-body text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-outline/50"
        placeholder={placeholder}
        rows={rows}
        name={fieldName}
      ></textarea>
    </section>
  );
}
