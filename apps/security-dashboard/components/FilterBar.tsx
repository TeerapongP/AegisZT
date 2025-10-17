'use client';
import React, { useMemo, useState } from 'react';
import { Funnel, RefreshCw, Download, AlertCircle, Zap, Database } from 'lucide-react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

// Types
interface FilterValues {
  status: 'all' | 'success' | 'failure' | 'warning';
  severity: 'all' | 'low' | 'medium' | 'high' | 'critical';
  service: 'all' | 'web' | 'ssh' | 'database' | 'api';
  date?: Date | null;
}

// Main FilterBar Component
export default function FilterBar({
  onChange,
  onExport,
}: {
  onChange?: (values: FilterValues) => void;
  onExport?: () => void;
}) {
  const [values, setValues] = useState<FilterValues>({
    status: 'all',
    severity: 'all',
    service: 'all',
    date: null,
  });

  const update = (patch: Partial<FilterValues>) => {
    const next = { ...values, ...patch };
    setValues(next);
    onChange?.(next);
  };

  const reset = () => {
    const resetValues: FilterValues = {
      status: 'all',
      severity: 'all',
      service: 'all',
      date: null,
    };
    setValues(resetValues);
    onChange?.(resetValues);
  };

  const hasActive = useMemo(
    () =>
      values.status !== 'all' ||
      values.severity !== 'all' ||
      values.service !== 'all' ||
      !!values.date,
    [values]
  );

  // Dropdown options
  const statusOptions = [
    { label: 'All Status', value: 'all' },
    { label: 'Success', value: 'success' },
    { label: 'Failure', value: 'failure' },
    { label: 'Warning', value: 'warning' },
  ];

  const severityOptions = [
    { label: 'All Levels', value: 'all' },
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
    { label: 'Critical', value: 'critical' },
  ];

  const serviceOptions = [
    { label: 'All Services', value: 'all' },
    { label: 'Web Application', value: 'web' },
    { label: 'SSH', value: 'ssh' },
    { label: 'Database', value: 'database' },
    { label: 'API', value: 'api' },
  ];

  return (
    <div className="tw-bg-white tw-border tw-border-gray-200 tw-rounded-xl tw-shadow-sm tw-overflow-hidden">
      {/* Header */}
      <div className="tw-px-6 tw-py-4 tw-bg-gradient-to-r tw-from-slate-50 tw-to-gray-50 tw-border-b tw-border-gray-200">
        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-items-center tw-gap-4">
            <div className="tw-h-11 tw-w-11 tw-rounded-xl tw-bg-gradient-to-br tw-from-blue-500 tw-to-blue-600 tw-shadow-md tw-grid tw-place-items-center">
              <Funnel className="tw-h-5 tw-w-5 tw-text-white" />
            </div>
            <div>
              <h3 className="tw-text-lg tw-font-bold tw-text-gray-900">Event Filters</h3>
              <p className="tw-text-xs tw-text-gray-600 tw-mt-0.5">
                Refine your security event analysis
              </p>
            </div>
          </div>
          <span
            className={`tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-px-4 tw-py-1.5 tw-text-xs tw-font-semibold tw-border tw-shadow-sm tw-transition-all ${hasActive
              ? 'tw-bg-blue-50 tw-text-blue-700 tw-border-blue-200'
              : 'tw-bg-gray-50 tw-text-gray-600 tw-border-gray-200'
              }`}
          >
            <span
              className={`tw-h-2 tw-w-2 tw-rounded-full ${hasActive ? 'tw-bg-blue-500 tw-animate-pulse' : 'tw-bg-gray-400'
                }`}
            />
            {hasActive ? 'Active filters' : 'No filters'}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="tw-px-6 tw-py-6 tw-bg-white">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5">
          {/* Status */}
          <Field label="Status" icon={<AlertCircle className="tw-h-3.5 tw-w-3.5" />}>
            <Dropdown
              value={values.status}
              options={statusOptions}
              onChange={(e) => update({ status: e.value })}
              placeholder="Select Status"
              className="tw-w-full"
            />
          </Field>

          {/* Severity */}
          <Field label="Threat Level" icon={<AlertCircle className="tw-h-3.5 tw-w-3.5" />}>
            <Dropdown
              value={values.severity}
              options={severityOptions}
              onChange={(e) => update({ severity: e.value })}
              placeholder="Select Severity"
              className="tw-w-full"
            />
          </Field>

          {/* Service */}
          <Field label="Service Type" icon={<Zap className="tw-h-3.5 tw-w-3.5" />}>
            <Dropdown
              value={values.service}
              options={serviceOptions}
              onChange={(e) => update({ service: e.value })}
              placeholder="Select Service"
              className="tw-w-full"
            />
          </Field>

          {/* Date */}
          <Field label="Time Range" icon={<Database className="tw-h-3.5 tw-w-3.5" />}>
            <Calendar
              value={values.date}
              onChange={(e) => update({ date: e.value as Date | null })}
              placeholder="Select Date"
              dateFormat="dd/mm/yy"
              showIcon
              className="tw-w-full"
            />
          </Field>
        </div>

        {/* Actions */}
        <div className="tw-mt-6 tw-pt-5 tw-border-t tw-border-gray-100 tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 tw-items-stretch sm:tw-items-center tw-justify-between">
          <Button
            label="Reset Filters"
            icon={<RefreshCw className="tw-h-4 tw-w-4" />}
            onClick={reset}
            outlined
            className="
            tw-inline-flex tw-items-center tw-justify-center tw-gap-2
            tw-rounded-lg tw-border tw-border-blue-500
            tw-bg-blue-50 tw-px-4 tw-py-2.5 tw-text-sm tw-font-medium tw-text-blue-700
            hover:tw-bg-blue-100 hover:tw-border-blue-600
            tw-transition-colors tw-shadow-sm
          "
          />



          <div className="tw-flex tw-items-center tw-gap-3">
            <div className="tw-flex tw-items-center tw-gap-2 tw-px-3 tw-py-2 tw-bg-emerald-50 tw-border tw-border-emerald-200 tw-rounded-lg">
              <span className="tw-h-2 tw-w-2 tw-bg-emerald-500 tw-rounded-full tw-animate-pulse" />
              <span className="tw-text-xs tw-font-semibold tw-text-emerald-700">Real-time monitoring</span>
            </div>

            <Button
              label="Export Data"
              icon={<Download className="tw-h-4 tw-w-4" />}
              onClick={onExport}
              className="tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-px-5 tw-py-2.5 tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-rounded-lg tw-text-sm tw-font-semibold tw-shadow-sm tw-transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */
function Field({
  label,
  icon,
  children
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode
}) {
  return (
    <label className="tw-block tw-space-y-2">
      <span className="tw-flex tw-items-center tw-gap-2 tw-text-xs tw-font-bold tw-uppercase tw-tracking-wider tw-text-gray-700">
        <span className="tw-text-blue-600">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}