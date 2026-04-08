"use client";

import { useState } from "react";
import { FileText, Download, Calendar, Filter } from "lucide-react";

const mockReports = [
  {
    id: "1",
    title: "Security Incident Summary",
    type: "Incident Report",
    period: "Last 30 Days",
    generated: "2026-04-07",
    status: "completed",
  },
  {
    id: "2",
    title: "Threat Detection Analysis",
    type: "Threat Report",
    period: "Last 7 Days",
    generated: "2026-04-06",
    status: "completed",
  },
  {
    id: "3",
    title: "Access Control Audit",
    type: "Audit Report",
    period: "Q1 2026",
    generated: "2026-04-01",
    status: "completed",
  },
  {
    id: "4",
    title: "Vulnerability Assessment",
    type: "Vulnerability Report",
    period: "Last 14 Days",
    generated: "2026-03-28",
    status: "pending",
  },
];

export default function ReportsPage() {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredReports = filterType === "all"
    ? mockReports
    : mockReports.filter((r) => r.type.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <div className="tw-space-y-6">
      {/* Header */}
      <div className="tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
        <div>
          <h1 className="tw-text-2xl tw-font-bold tw-text-slate-900 dark:tw-text-slate-100">Reports</h1>
          <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">
            Generate and view security reports
          </p>
        </div>
        <button className="tw-inline-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-bg-blue-600 tw-text-white tw-rounded-lg hover:tw-bg-blue-700 tw-transition-colors tw-text-sm tw-font-medium">
          <FileText className="tw-w-4 tw-h-4" />
          Generate Report
        </button>
      </div>

      {/* Filters */}
      <div className="tw-flex tw-flex-wrap tw-gap-3">
        <div className="tw-inline-flex tw-items-center tw-gap-2 tw-px-3 tw-py-2 tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
          <Filter className="tw-w-4 tw-h-4 tw-text-slate-400" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-200 tw-bg-transparent tw-border-none tw-outline-none"
          >
            <option value="all">All Types</option>
            <option value="incident">Incident Report</option>
            <option value="threat">Threat Report</option>
            <option value="audit">Audit Report</option>
            <option value="vulnerability">Vulnerability Report</option>
          </select>
        </div>
        <button className="tw-inline-flex tw-items-center tw-gap-2 tw-px-3 tw-py-2 tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg hover:tw-bg-slate-50 dark:hover:tw-bg-slate-700 tw-transition-colors tw-text-sm tw-text-slate-700 dark:tw-text-slate-200">
          <Calendar className="tw-w-4 tw-h-4 tw-text-slate-400" />
          Date Range
        </button>
      </div>

      {/* Reports Table */}
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-xl tw-overflow-hidden">
        <table className="tw-w-full">
          <thead className="tw-bg-slate-50 dark:tw-bg-slate-700/50 tw-border-b tw-border-slate-200 dark:tw-border-slate-700">
            <tr>
              <th className="tw-text-left tw-px-4 tw-py-3 tw-text-xs tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 tw-uppercase tw-tracking-wider">
                Report Name
              </th>
              <th className="tw-text-left tw-px-4 tw-py-3 tw-text-xs tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 tw-uppercase tw-tracking-wider">
                Type
              </th>
              <th className="tw-text-left tw-px-4 tw-py-3 tw-text-xs tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 tw-uppercase tw-tracking-wider">
                Period
              </th>
              <th className="tw-text-left tw-px-4 tw-py-3 tw-text-xs tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 tw-uppercase tw-tracking-wider">
                Generated
              </th>
              <th className="tw-text-left tw-px-4 tw-py-3 tw-text-xs tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 tw-uppercase tw-tracking-wider">
                Status
              </th>
              <th className="tw-text-right tw-px-4 tw-py-3 tw-text-xs tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 tw-uppercase tw-tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="tw-divide-y tw-divide-slate-200 dark:tw-divide-slate-700">
            {filteredReports.map((report) => (
              <tr key={report.id} className="tw-hover:tw-bg-slate-50 dark:tw-hover:tw-bg-slate-700/50 tw-transition-colors">
                <td className="tw-px-4 tw-py-4">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-10 tw-h-10 tw-rounded-lg tw-bg-blue-50 dark:tw-bg-slate-700 tw-flex tw-items-center tw-justify-center tw-flex-shrink-0">
                      <FileText className="tw-w-5 tw-h-5 tw-text-blue-600" />
                    </div>
                    <div>
                      <p className="tw-text-sm tw-font-medium tw-text-slate-900 dark:tw-text-slate-100">{report.title}</p>
                      <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400 tw-mt-0.5">ID: {report.id}</p>
                    </div>
                  </div>
                </td>
                <td className="tw-px-4 tw-py-4">
                  <span className="tw-inline-flex tw-items-center tw-px-2.5 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium tw-bg-slate-100 dark:tw-bg-slate-700 tw-text-slate-800 dark:tw-text-slate-200">
                    {report.type}
                  </span>
                </td>
                <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-slate-600 dark:tw-text-slate-300">
                  {report.period}
                </td>
                <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-slate-600 dark:tw-text-slate-300">
                  {report.generated}
                </td>
                <td className="tw-px-4 tw-py-4">
                  <span
                    className={`tw-inline-flex tw-items-center tw-px-2.5 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium ${
                      report.status === "completed"
                        ? "tw-bg-green-100 dark:tw-bg-green-900/30 tw-text-green-800 dark:tw-text-green-400"
                        : "tw-bg-yellow-100 dark:tw-bg-yellow-900/30 tw-text-yellow-800 dark:tw-text-yellow-400"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="tw-px-4 tw-py-4 tw-text-right">
                  <button
                    className="tw-inline-flex tw-items-center tw-gap-1.5 tw-px-3 tw-py-1.5 tw-text-sm tw-text-blue-600 dark:tw-text-blue-400 hover:tw-bg-blue-50 dark:hover:tw-bg-slate-700 tw-rounded-md tw-transition-colors disabled:tw-opacity-50"
                    disabled={report.status !== "completed"}
                  >
                    <Download className="tw-w-4 tw-h-4" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state */}
      {filteredReports.length === 0 && (
        <div className="tw-text-center tw-py-12">
          <FileText className="tw-w-12 tw-h-12 tw-text-slate-300 dark:tw-text-slate-600 tw-mx-auto tw-mb-4" />
          <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm">No reports found for the selected filter</p>
        </div>
      )}
    </div>
  );
}
