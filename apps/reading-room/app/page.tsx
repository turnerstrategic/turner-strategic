import { ArticleSection } from "./_components/ArticleSection";
import { BulletPanel } from "./_components/BulletPanel";
import { Greeting } from "./_components/Greeting";
import { InstitutionScorecard } from "./_components/InstitutionScorecard";
import { PublicationHeader } from "./_components/PublicationHeader";
import { ReaderShell } from "./_components/ReaderShell";
import { TableOfContents } from "./_components/TableOfContents";
import { tableOfContentsSections } from "./_components/tableOfContents.data";

const changesSinceYesterday = [
  "Initiated Position: Company X",
  "Raised Confidence: Company Y",
  "New Legislative Risk: Defense Sector",
  "Executive Order Affecting Energy Imports",
  "Two Insider Purchases Added to Watch List",
];

const todaysAgenda = [
  "Review Morning Brief",
  "Committee Recommendation: 2 Actions",
  "Retail Sales Report – 8:30 AM",
  "House of Representatives in Session",
  "No Scheduled Federal Reserve Remarks",
  "Earnings: Netflix, American Express",
];

const articleContent: Record<string, string[]> = {
  "executive-summary": [
    "This morning's edition reviews a period marked by steady operating performance across the Institution's core holdings, tempered by a more cautious posture toward rate-sensitive sectors. The Investment Committee met on schedule and forwarded two recommendations for the Chairman's review, detailed further in Committee Proceedings.",
    "Broad market conditions remain constructive, though the Office of Research continues to monitor a narrowing breadth of leadership among index constituents. No material changes were made to strategic allocation targets this week; tactical positioning adjustments are outlined in Capital Allocation.",
  ],
  "executive-directors-note": [
    "Institutions endure by the quality of their judgment in ordinary weeks, not merely in extraordinary ones. This week offered little in the way of dramatic developments, and that, in itself, is worth noting. The temptation in quiet periods is to manufacture urgency where none exists. We have resisted that temptation.",
    "The portfolio remains positioned as it was a fortnight ago, with only minor adjustments made at the margin. Members should read this week's brief not for what has changed, but for the confirmation that our thesis continues to hold.",
  ],
  "political-general-news": [
    "Congress remains in regular session this week, with the House taking up a slate of appropriations measures ahead of the summer recess. No floor votes are expected to materially affect sectors within the Institution's core holdings.",
    "Separately, state-level legislative activity in several jurisdictions has introduced new permitting requirements for energy infrastructure projects. The Office of Research is tracking downstream implications for holdings within the industrials sleeve.",
  ],
  "market-overview": [
    "Domestic equity markets closed the prior session broadly higher, extending a period of low realized volatility. Fixed income markets were comparatively quiet, with the belly of the curve holding within a narrow range.",
    "Credit spreads remain tight by historical standards, a condition the Committee continues to regard with measured caution rather than alarm. The Institution's equity sleeve outperformed its primary benchmark on a trailing basis, driven principally by security selection rather than sector allocation.",
  ],
  "government-affairs": [
    "The Executive Branch issued no material policy actions overnight that bear directly on the Institution's holdings. An executive order concerning energy import licensing, signed earlier this week, remains under review by the Office of Research for its effect on the Institution's energy-adjacent positions; a fuller assessment will appear in a forthcoming edition.",
  ],
  "executive-branch-watch": [
    "No scheduled remarks from Federal Reserve officials are expected today. The Office of the Chairman notes the absence of forward guidance this week as consistent with the Committee's stated intention to let recent policy actions work through the economy before signaling further direction.",
  ],
  "economic-intelligence": [
    "This morning's retail sales report, due at 8:30 AM, is expected to offer the clearest read yet on the durability of consumer spending heading into the second half of the year. The Institution's internal consumption model, maintained by the Office of Research, currently anticipates a modest deceleration from the prior month's pace, consistent with the gradual normalization the Committee has anticipated since the spring.",
  ],
  "corporate-intelligence": [
    "Earnings season continues this week, with Netflix and American Express both scheduled to report. Neither holding constitutes a material position within the current portfolio; both are monitored for signal value regarding, respectively, discretionary consumer spending and premium consumer credit health — two indicators the Office of Research regards as useful leading measures for the broader Institution thesis.",
  ],
  "historical-perspective": [
    "The Office of Publications & Records periodically revisits prior editions to assess the durability of the Institution's judgment. Reviewing the corresponding edition from one year prior, the Institution's cautious stance toward rate-sensitive credit proved directionally sound, though the magnitude of the move was more modest than anticipated at the time. This edition's judgments are offered with the same discipline and the same humility.",
  ],
  "committee-proceedings": [
    "The Investment Committee convened its regular session this week and forwarded two recommendations to the Chairman for final review. Details of both recommendations remain confidential pending the Chairman's determination and will be reflected in Capital Allocation once finalized. The Committee's next regular session is scheduled for the following week.",
  ],
  "capital-allocation": [
    "No changes were made to strategic target weights this week. Tactical adjustments at the margin included a modest increase to the Institution's cash allocation, now standing at 12 percent, reflecting the Committee's preference for available capital ahead of several anticipated portfolio actions. Active holdings remain at seventeen positions.",
  ],
  "watch-list": [
    "Two insider purchase filings were added to the Institution's watch list this week, in keeping with the Office of Research's ongoing practice of monitoring insider activity as a secondary signal alongside fundamental analysis. Neither filing has yet prompted a formal recommendation to the Committee.",
  ],
  appendix: [
    "Supporting schedules, position-level detail, and the full text of Committee recommendations are maintained under separate cover by the Office of Publications & Records and are available to members upon request, consistent with the Institution's standing disclosure practices.",
  ],
};

const articleSections = tableOfContentsSections
  .filter(({ id }) => id !== "institution-scorecard")
  .map(({ id, title }) => ({ id, title, paragraphs: articleContent[id] ?? [] }));

export default function ReadingRoomPage() {
  return (
    <div className="px-4 py-12 sm:px-12 sm:py-16 lg:px-20">
      <div className="max-w-3xl">
        <Greeting />

        <hr className="border-institutional-black/10 my-12 border-0 border-t" />

        <div className="flex flex-col gap-12">
          <BulletPanel title="Changes Since Yesterday" items={changesSinceYesterday} />
          <BulletPanel title="Today's Agenda" items={todaysAgenda} />
          <InstitutionScorecard />
        </div>

        <PublicationHeader />
      </div>

      <div className="mt-16">
        <ReaderShell tableOfContents={<TableOfContents />}>
          <div className="flex flex-col gap-10">
            {articleSections.map((section) => (
              <ArticleSection key={section.id} {...section} />
            ))}
          </div>
        </ReaderShell>
      </div>
    </div>
  );
}
