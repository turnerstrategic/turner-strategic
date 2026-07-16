type ArticleSectionProps = {
  id: string;
  title: string;
  paragraphs: string[];
};

export function ArticleSection({ id, title, paragraphs }: ArticleSectionProps) {
  return (
    <section id={id} className="border-institutional-black/10 scroll-mt-8 border-t pt-10">
      <h2 className="text-heading3 text-institutional-black font-semibold">{title}</h2>
      <div className="mt-4 flex flex-col gap-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-charcoal leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
