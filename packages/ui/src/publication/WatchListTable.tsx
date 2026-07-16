import { DataTable } from "./_internal/DataTable";

export type WatchListEntry = {
  name: string;
  reason: string;
  dateAdded: string;
};

export type WatchListTableProps = {
  entries: WatchListEntry[];
};

export function WatchListTable({ entries }: WatchListTableProps) {
  return (
    <DataTable<WatchListEntry>
      columns={[
        { header: "Name", render: (row) => row.name },
        { header: "Reason", render: (row) => row.reason },
        { header: "Date Added", render: (row) => row.dateAdded },
      ]}
      rows={entries}
      getRowKey={(row) => row.name}
    />
  );
}
