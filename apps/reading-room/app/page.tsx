import { Button } from "@turner-strategic/ui";
import { ORGANIZATION_NAME } from "@turner-strategic/common";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">{ORGANIZATION_NAME} Reading Room</h1>
      <p className="text-sm text-neutral-500">Infrastructure scaffold — no features yet.</p>
      <Button>Placeholder</Button>
    </main>
  );
}
