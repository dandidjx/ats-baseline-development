import type { JobOpening } from "../types/job";
import { JobCard } from "./JobCard";

interface BoardColumnProps {
  title: string;
  jobs: JobOpening[];
}

export function BoardColumn({ title, jobs }: BoardColumnProps) {
  return (
    <section className="board-column">
      <header className="board-column-header">
        <h2>{title}</h2>
        <p>
          {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
        </p>
      </header>
      <div className="board-column-body">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
