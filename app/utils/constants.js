export const RESOURCE_TYPE_TABLE = 1;
export const RESOURCE_TYPE_BAR_CHART = 2;
export const RESOURCE_TYPE_PIE_CHART = 3;

export const CHART_TABLE_MAPPINGS = [
  {
    id: 1,
    resourceName: 'Incidents Logs',
    resourceId: RESOURCE_TYPE_TABLE,
    resourceDescription: '',
  },
  {
    id: 2,
    resourceName: 'Incident Severity Distribution',
    resourceId: RESOURCE_TYPE_BAR_CHART,
    xAxisLabel: 'Severity Levels',
    yAxisLabel: 'No. of Incidents',
    resourceDescription: `<b>Description:</b><br/>
                        The Incident Severity Distribution chart is a bar chart that provides a clear representation of the distribution of incident severity levels within a given dataset. The X-axis represents different severity levels, such as low, medium, and high, while the Y-axis displays the count of incidents corresponding to each severity level.
                        <br/><br/>
                        This chart helps stakeholders, safety officers, or relevant personnel quickly grasp the proportion of incidents falling into different severity categories. It enables effective analysis of safety performance by highlighting areas with higher incident severity and identifying trends or patterns over time.
                        <br/><br/>
                        <b>Usage:</b>
                        <br><br>
                        Identify the frequency of incidents at each severity level.<br>
                        Monitor and compare the distribution of severity levels over specific periods.<br>
                        Make informed decisions to improve safety measures based on the severity distribution patterns.<br>
                        Note: The chart can be customized to include additional details or context, such as time intervals, specific incident types, or other relevant factors based on the dataset and reporting requirements.<br>`,
  },
  {
    id: 3,
    resourceName: 'Incident Kind Distribution',
    resourceId: RESOURCE_TYPE_PIE_CHART,
    resourceDescription: `<b>Description:</b><br/>
                    The Incident Kind Distribution chart is a representation of the distribution of incident types within a given dataset. The chart displays the count of each incident kind, such as "Good Catch," "Near Miss," or "Injury." The X-axis represents different incident kinds, while the Y-axis shows the count of incidents for each kind.

                    This chart is valuable for quickly understanding the proportion of different incident types in a dataset. It aids stakeholders and safety officers in identifying the frequency of various incident kinds, allowing for targeted analysis and informed decision-making.

                    <br/><br/>
                    <b>Usage:</b> <br><br>
                    - Identify the frequency of each incident kind.<br>
                    - Compare and analyze the distribution of incident types over specific periods.<br>
                    - Make informed decisions and improvements to safety measures based on incident kind distribution patterns.<br>

                    Note: The chart can be customized to include additional details, such as time intervals, specific incident types, or other relevant factors based on the dataset and reporting requirements.
`,
  },
];
