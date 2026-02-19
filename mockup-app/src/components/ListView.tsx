import type { JobOpening } from "../types/job";
import { STAGE_LABELS } from "../types/job";

interface ListViewProps {
  jobs: JobOpening[];
}

export function ListView({ jobs }: ListViewProps) {
  return (
    <section className="list-view">
      <table>
        <thead>
          <tr>
            <th>Job title</th>
            <th>Organization</th>
            <th>Owner</th>
            <th>Stage</th>
            <th>Applicants</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.organization}</td>
              <td>{job.owner}</td>
              <td>{STAGE_LABELS[job.stage]}</td>
              <td>{job.applicants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
