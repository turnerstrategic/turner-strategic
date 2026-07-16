import { DataTable } from "./_internal/DataTable";

export type RecommendationEntry = {
  recommendation: string;
  action: string;
  status: string;
};

export type RecommendationTableProps = {
  entries: RecommendationEntry[];
};

export function RecommendationTable({ entries }: RecommendationTableProps) {
  return (
    <DataTable<RecommendationEntry>
      columns={[
        { header: "Recommendation", render: (row) => row.recommendation },
        { header: "Action", render: (row) => row.action },
        { header: "Status", render: (row) => row.status },
      ]}
      rows={entries}
      getRowKey={(row) => row.recommendation}
    />
  );
}
