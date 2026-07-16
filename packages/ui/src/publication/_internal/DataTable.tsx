import type { ReactNode } from "react";

export type DataTableColumn<Row> = {
  header: string;
  render: (row: Row) => ReactNode;
};

type DataTableProps<Row> = {
  columns: DataTableColumn<Row>[];
  rows: Row[];
  getRowKey: (row: Row) => string;
};

export function DataTable<Row>({ columns, rows, getRowKey }: DataTableProps<Row>) {
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="border-institutional-black/10 border-b">
          {columns.map((column) => (
            <th
              key={column.header}
              className="text-caption text-charcoal pb-3 pr-6 font-normal uppercase tracking-widest"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-institutional-black/10 divide-y">
        {rows.map((row) => (
          <tr key={getRowKey(row)}>
            {columns.map((column) => (
              <td key={column.header} className="text-body text-institutional-black py-3 pr-6">
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
