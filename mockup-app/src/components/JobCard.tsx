import type { ReactNode } from "react";
import {
  CheckmarkRegular,
  ClipboardTaskRegular,
  DismissRegular,
  DocumentRegular,
  EditRegular,
  PeopleRegular,
  PersonRegular,
  SparkleRegular,
} from "@fluentui/react-icons";
import type { JobOpening } from "../types/job";

interface JobCardProps {
  job: JobOpening;
}

const METRIC_ICONS: Record<string, ReactNode> = {
  docs: <DocumentRegular />,
  screen: <PeopleRegular />,
  test: <EditRegular />,
  interview: <SparkleRegular />,
  offer: <ClipboardTaskRegular />,
  hire: <PersonRegular />,
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
            <span className="metric-glyph">{METRIC_ICONS[metric.id] ?? <DocumentRegular />}</span>
            <span>{metric.value}</span>
          </div>
        ))}
      </div>

      <div className="job-footer">
        <div className="job-applicants">
          <PeopleRegular />
          <span>{job.applicants}</span>
        </div>
        <div className="job-outcome">
          <span className="outcome-badge outcome-bad">
            <DismissRegular />
            {job.failed}
          </span>
          <span className="outcome-badge outcome-good">
            <CheckmarkRegular />
            {job.passed}
          </span>
        </div>
      </div>
    </article>
  );
}
