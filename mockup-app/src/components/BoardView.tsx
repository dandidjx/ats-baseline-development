import type { JobOpening, StageColumn } from "../types/job";
import { STAGE_LABELS } from "../types/job";
import { BoardColumn } from "./BoardColumn";

interface BoardViewProps {
  jobs: JobOpening[];
}

const STAGE_ORDER: StageColumn[] = ["draft", "submitted", "approved", "in_progress"];

export function BoardView({ jobs }: BoardViewProps) {
  return (
    <section className="board-grid">
      {STAGE_ORDER.map((stage) => (
        <BoardColumn
          key={stage}
          title={STAGE_LABELS[stage]}
          jobs={jobs.filter((job) => job.stage === stage)}
        />
      ))}
    </section>
  );
}
