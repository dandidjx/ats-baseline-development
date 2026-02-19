import type { JobOpening } from "../types/job";

interface JobCardProps {
  job: JobOpening;
}

const METRIC_GLYPHS: Record<string, string> = {
  docs: "D",
  screen: "S",
  test: "T",
  interview: "I",
  offer: "O",
  hire: "H",
};

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <div className="job-org">{job.organization}</div>
      <div className="job-owner">{job.owner}</div>

      <div className="job-metrics">
        {job.metrics.map((metric) => (
          <div key={`${job.id}-${metric.id}`} className="metric-pill" title={metric.label}>
            <span className="metric-glyph">{METRIC_GLYPHS[metric.id] ?? "M"}</span>
            <span>{metric.value}</span>
          </div>
        ))}
      </div>

      <div className="job-footer">
        <div className="job-applicants">P {job.applicants}</div>
        <div className="job-outcome">
          <span className="outcome-badge outcome-bad">x {job.failed}</span>
          <span className="outcome-badge outcome-good">v {job.passed}</span>
        </div>
      </div>
    </article>
  );
}
