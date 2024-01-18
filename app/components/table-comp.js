// app/components/incident-table.js
import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
  columns: [
    { name: 'datetime', label: 'Datetime' },
    { name: 'severity', label: 'Severity' },
    { name: 'cost', label: 'Cost' },
    { name: 'incidentKind', label: 'Incident Kind' },
    { name: 'jobName', label: 'Job Name' },
    { name: 'foreman', label: 'Foreman' },
    { name: 'description', label: 'Description' },
    { name: 'comment', label: 'Comment' },
  ],

  content: [
    {
      datetime: '2024-01-07 07:20:11',
      severity: 3,
      cost: 2304.1,
      incidentKind: 'Good Catch',
      jobName: 'Job E',
      foreman: 'Foreman B',
      description: 'Description for incident 1',
      comment: 'Comment for incident 1',
    },
    {
      datetime: '2024-01-08 16:31:18',
      severity: 5,
      cost: 4279.17,
      incidentKind: 'Near Miss',
      jobName: 'Job A',
      foreman: 'Foreman D',
      description: 'Description for incident 2',
      comment: 'Comment for incident 2',
    },
  ],

  didInsertElement() {
    this._super(...arguments);
    // Initialize DataTable when the component is inserted into the DOM
    $('table').DataTable();
  },
});
