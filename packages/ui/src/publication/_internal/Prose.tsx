type ProseProps = {
  paragraphs: string[];
};

export function Prose({ paragraphs }: ProseProps) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-body text-charcoal leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
