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
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md grid place-items-center">
              <Funnel className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Event Filters</h3>
              <p className="text-xs text-gray-600 mt-0.5">
                Refine your security event analysis
              </p>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold border shadow-sm transition-all ${hasActive
              ? 'bg-blue-50 text-blue-700 border-blue-200'
              : 'bg-gray-50 text-gray-600 border-gray-200'
              }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${hasActive ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
                }`}
            />
            {hasActive ? 'Active filters' : 'No filters'}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 py-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Status */}
          <Field label="Status" icon={<AlertCircle className="h-3.5 w-3.5" />}>
            <Dropdown
              value={values.status}
              options={statusOptions}
              onChange={(e) => update({ status: e.value })}
              placeholder="Select Status"
              className="w-full"
            />
          </Field>

          {/* Severity */}
          <Field label="Threat Level" icon={<AlertCircle className="h-3.5 w-3.5" />}>
            <Dropdown
              value={values.severity}
              options={severityOptions}
              onChange={(e) => update({ severity: e.value })}
              placeholder="Select Severity"
              className="w-full"
            />
          </Field>

          {/* Service */}
          <Field label="Service Type" icon={<Zap className="h-3.5 w-3.5" />}>
            <Dropdown
              value={values.service}
              options={serviceOptions}
              onChange={(e) => update({ service: e.value })}
              placeholder="Select Service"
              className="w-full"
            />
          </Field>

          {/* Date */}
          <Field label="Time Range" icon={<Database className="h-3.5 w-3.5" />}>
            <Calendar
              value={values.date}
              onChange={(e) => update({ date: e.value as Date | null })}
              placeholder="Select Date"
              dateFormat="dd/mm/yy"
              showIcon
              className="w-full"
            />
          </Field>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <Button
            label="Reset Filters"
            icon={<RefreshCw className="h-4 w-4" />}
            onClick={reset}
            outlined
            className="
            inline-flex items-center justify-center gap-2
            rounded-lg border border-blue-500
            bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700
            hover:bg-blue-100 hover:border-blue-600
            transition-colors shadow-sm
          "
          />



          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
              <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700">Real-time monitoring</span>
            </div>

            <Button
              label="Export Data"
              icon={<Download className="h-4 w-4" />}
              onClick={onExport}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors"
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
    <label className="block space-y-2">
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700">
        <span className="text-blue-600">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}