'use client';
import React, { useMemo, useState } from 'react';
import { AlertCircle, Zap, Database, Funnel } from 'lucide-react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import type { FilterValues } from '@/types/filterValues';

export interface FilterOption {
  label: string;
  value: string;
}

const defaultValues: FilterValues = {
  status: 'all',
  severity: 'all',
  service: 'all',
  date: null,
};

const defaultStatusOptions: FilterOption[] = [
  { label: 'All Status', value: 'all' },
  { label: 'Success', value: 'success' },
  { label: 'Failure', value: 'failure' },
  { label: 'Warning', value: 'warning' },
];

const defaultSeverityOptions: FilterOption[] = [
  { label: 'All Levels', value: 'all' },
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
  { label: 'Critical', value: 'critical' },
];

const defaultServiceOptions: FilterOption[] = [
  { label: 'All Services', value: 'all' },
  { label: 'Web Application', value: 'web' },
  { label: 'SSH', value: 'ssh' },
  { label: 'Database', value: 'database' },
  { label: 'API', value: 'api' },
];

export default function FilterBar({
  onChange,
  onExport,
  title = 'Event Filters',
  subtitle = 'Refine your security event analysis',
  statusLabel = 'Status',
  severityLabel = 'Threat Level',
  serviceLabel = 'Service Type',
  dateLabel = 'Time Range',
  exportLabel = 'Export Data',
  initialValues = defaultValues,
  statusOptions = defaultStatusOptions,
  severityOptions = defaultSeverityOptions,
  serviceOptions = defaultServiceOptions,
}: {
  onChange?: (values: FilterValues) => void;
  onExport?: () => void;
  title?: string;
  subtitle?: string;
  statusLabel?: string;
  severityLabel?: string;
  serviceLabel?: string;
  dateLabel?: string;
  exportLabel?: string;
  initialValues?: FilterValues;
  statusOptions?: FilterOption[];
  severityOptions?: FilterOption[];
  serviceOptions?: FilterOption[];
}) {
  const [values, setValues] = useState<FilterValues>(initialValues);

  const update = (patch: Partial<FilterValues>) => {
    const next = { ...values, ...patch };
    setValues(next);
    onChange?.(next);
  };

  const reset = () => {
    const resetValues: FilterValues = { ...initialValues };
    setValues(resetValues);
    onChange?.(resetValues);
  };

  const hasActive = useMemo(
    () =>
      values.status !== initialValues.status ||
      values.severity !== initialValues.severity ||
      values.service !== initialValues.service ||
      !!values.date,
    [values, initialValues]
  );

  // shared PrimeReact passThrough styles for inputs (สูง 40px, pill, โฟกัสฟ้า)
  const inputPt = {
    root: { className: 'tw-w-full tw-h-10 tw-rounded-lg tw-border tw-border-slate-300 focus:tw-ring-2 focus:tw-ring-sky-400 focus:tw-border-sky-400 tw-bg-white tw-text-slate-800' },
    input: { className: 'tw-h-10 tw-rounded-lg tw-pl-3 tw-pr-9 tw-text-sm tw-border-0 focus:tw-ring-0 tw-bg-transparent tw-text-slate-800 placeholder:tw-text-slate-400' },
    trigger: { className: 'tw-text-slate-500' },
    panel: { className: 'tw-rounded-lg tw-border tw-border-slate-200 tw-shadow-md' }
  } as const;

  const calendarPt = {
    input: { root: { className: 'tw-w-full tw-h-10 tw-rounded-lg tw-border tw-border-slate-300 tw-bg-white tw-text-slate-800 focus:tw-ring-2 focus:tw-ring-sky-400 focus:tw-border-sky-400 tw-pl-3 tw-pr-10 tw-text-sm' } },
    dropdownButton: { root: { className: 'tw-text-slate-500' } },
    panel: { className: 'tw-rounded-lg tw-border tw-border-slate-200 tw-shadow-md' }
  } as const;

  return (
    <div className="tw-bg-white tw-border tw-border-slate-200 tw-rounded-xl tw-shadow-sm tw-overflow-hidden">
      {/* Header */}
      <div className="tw-px-6 tw-py-4 tw-bg-gradient-to-r tw-from-slate-50 tw-to-gray-50 tw-border-b tw-border-slate-200">
        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-items-center tw-gap-4">
            <div className="tw-h-11 tw-w-11 tw-rounded-xl tw-bg-gradient-to-br tw-from-sky-500 tw-to-cyan-500 tw-shadow-md tw-grid tw-place-items-center">
              <Funnel className="tw-h-5 tw-w-5 tw-text-white" />
            </div>
            <div>
              <h3 className="tw-text-lg tw-font-bold tw-text-slate-900">{title}</h3>
              <p className="tw-text-xs tw-text-slate-600 tw-mt-0.5">{subtitle}</p>
            </div>
          </div>
          <span
            className={[
              'tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-px-4 tw-py-1.5 tw-text-xs tw-font-semibold tw-border tw-shadow-sm tw-transition-all',
              hasActive ? 'tw-bg-sky-50 tw-text-sky-700 tw-border-sky-200' : 'tw-bg-slate-50 tw-text-slate-600 tw-border-slate-200',
            ].join(' ')}
          >
            <span className={['tw-h-2 tw-w-2 tw-rounded-full', hasActive ? 'tw-bg-sky-500 tw-animate-pulse' : 'tw-bg-slate-400'].join(' ')} />
            {hasActive ? 'Active filters' : 'No filters'}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="tw-px-6 tw-py-6 tw-bg-white">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5">
          <Field label={statusLabel} icon={<AlertCircle className="tw-h-3.5 tw-w-3.5" />}>
            <Dropdown
              value={values.status}
              options={statusOptions}
              onChange={(e) => update({ status: e.value })}
              placeholder="Select Status"
              className="tw-w-full"
              pt={inputPt}
            />
          </Field>

          <Field label={severityLabel} icon={<AlertCircle className="tw-h-3.5 tw-w-3.5" />}>
            <Dropdown
              value={values.severity}
              options={severityOptions}
              onChange={(e) => update({ severity: e.value })}
              placeholder="Select Severity"
              className="tw-w-full"
              pt={inputPt}
            />
          </Field>

          <Field label={serviceLabel} icon={<Zap className="tw-h-3.5 tw-w-3.5" />}>
            <Dropdown
              value={values.service}
              options={serviceOptions}
              onChange={(e) => update({ service: e.value })}
              placeholder="Select Service"
              className="tw-w-full"
              pt={inputPt}
            />
          </Field>

          <Field label={dateLabel} icon={<Database className="tw-h-3.5 tw-w-3.5" />}>
            <Calendar
              value={values.date}
              onChange={(e) => {
                const nextDate = e.value instanceof Date || e.value === null ? e.value : null;
                update({ date: nextDate });
              }}
              placeholder="Select Date"
              dateFormat="dd/mm/yy"
              showIcon
              className="tw-w-full"
              pt={calendarPt}
            />
          </Field>
        </div>

        {/* Actions */}
        <div className="tw-mt-6 tw-pt-5 tw-border-t tw-border-slate-100 tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 tw-items-stretch sm:tw-items-center tw-justify-between">
          <Button
            label="Reset Filters"
            icon="pi pi-refresh"
            onClick={reset}
            size="small"
            className={[
              'tw-bg-white tw-border tw-border-slate-300 hover:tw-border-sky-400 hover:tw-bg-sky-50',
              'tw-text-sky-700 hover:tw-text-sky-800',
              'tw-rounded-lg tw-font-medium tw-px-4 tw-py-2',
              'tw-shadow-sm hover:tw-shadow-md',
              'focus:tw-ring-2 focus:tw-ring-sky-300 focus:tw-outline-none',
              'tw-transition-all tw-duration-200 tw-ease-in-out',
              '[&>span>.pi]:tw-mr-2',
            ].join(' ')}
          />


          <div className="tw-flex tw-items-center tw-gap-3">
            {/* เปลี่ยนเป็นฟ้า/น้ำเงินให้เข้าธีม */}
            <div className="tw-flex tw-items-center tw-gap-2 tw-px-3 tw-py-2 tw-bg-sky-50 tw-border tw-border-sky-200 tw-rounded-lg">
              <span className="tw-h-2 tw-w-2 tw-bg-sky-500 tw-rounded-full tw-animate-pulse" />
              <span className="tw-text-xs tw-font-semibold tw-text-sky-700">Real-time monitoring</span>
            </div>

            <Button
              label={exportLabel}
              icon="pi pi-download"
              onClick={onExport}
              size="small"
              className={[
                'tw-bg-gradient-to-r tw-from-sky-500 tw-to-cyan-500 hover:tw-from-sky-600 hover:tw-to-cyan-600',
                'tw-text-white tw-font-medium',
                'tw-rounded-lg tw-px-4 tw-py-2 tw-shadow-sm hover:tw-shadow-md',
                'focus:tw-ring-2 focus:tw-ring-sky-300 focus:tw-outline-none',
                'tw-transition-all tw-duration-200 tw-ease-in-out',
              ].join(' ')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="tw-block tw-space-y-2">
      <span className="tw-flex tw-items-center tw-gap-2 tw-text-xs tw-font-bold tw-uppercase tw-tracking-wider tw-text-slate-700">
        <span className="tw-text-sky-600">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}
