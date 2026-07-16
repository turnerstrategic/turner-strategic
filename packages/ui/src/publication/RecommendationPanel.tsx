import { AccentBar } from "./_internal/AccentBar";

export type RecommendationPanelProps = {
  title: string;
  summary: string;
  status?: string;
};

export function RecommendationPanel({ title, summary, status }: RecommendationPanelProps) {
  return (
    <AccentBar accent="gold">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-body text-institutional-black font-medium">{title}</p>
        {status ? <p className="text-caption text-charcoal">{status}</p> : null}
      </div>
      <p className="text-body text-charcoal mt-2 leading-relaxed">{summary}</p>
    </AccentBar>
  );
}
