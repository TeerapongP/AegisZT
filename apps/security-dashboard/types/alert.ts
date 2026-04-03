export type Alert = {
id: string;
timestamp: string; // ISO or display string
severity: 'Low' | 'Medium' | 'High' | 'Critical';
title: string;
description: string;
source: string;
status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
assignee?: string | null;
};