type TagsProps = { items: readonly string[]; label?: string };

export function Tags({ items, label = "Technologies" }: TagsProps) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
