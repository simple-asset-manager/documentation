---
id: dashboard
title: Understanding The Property Dashboard
sidebar_label: Dashboard
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your Dashboard provides a snapshot of the property's most important details.  All of the widgets on the Dashboard are interactive and can be filtered and sorted just the way you want.

### Lease and Income Expiration

This chart details the property's upcoming lease, income, and square footage expiring each year.

The Lease and Income Expiration information can be viewed or filtered as follows:
- Viewing Options
	- **List** displays the Lease and Income Expiration as a table.  Click on any column to sort the list by that category.
		<blockquote><img alt="Lease and Income Expiration List" src={useBaseUrl('img/lease_exp_list.png')} /></blockquote>

	-	**Chart** displays the Lease And Income Expiration as a combination chart displaying:
		-	*Square Footage Expiring* per year expressed as a bar chart.
		-	*Base Rent Expiring* per year expressed as a line chart.  The line is the cumulative amount of base rent expiring by the end of each year - meaning if all tenant statuses are included, the final year displayed will be when 100% of the square footage and base rent at the property expires.
		- Hover over any bar or line on the chart to see which tenants are included in the GLA and Base Rent expiring for a particular year (as shown in the image below).
		-	Drag or resize the area below the main chart to change, expand or contract the time period included.
		
		<blockquote><img alt="Lease and Income Expiration Chart" src={useBaseUrl('img/lease_exp_chart.png')} /></blockquote>

- Filter by Tenant Status
	-	Select one or all of the Tenant Statuses to only include tenants that match the selected statuses.

:::note
This chart by default includes all Tenant Statuses. This is to capture all income and occupancy assumptions, both contractual and budgeted, at the property.
:::
 
### To-Do List

The To-Do List allows you to easily jot down reminders and keep track of tasks at the property.

There are two statuses a task can be in, "Active" or "Complete". Filter the list of Completed or Active tasks by selecting the desired button to see all tasks that fall in the chosen category.  Selecting "All" will display all tasks from both statuses.

Once a task is completed, click the checkbox to move the task to the Completed tab.

Tasks can be deleted by clicking the trashcan.

<blockquote><img alt="To-Do List" src={useBaseUrl('img/task_list.png')} /></blockquote>


### Top Tenants

The Top Tenants describes which tenants (up to the Top 5) occupy the most space and pay the most rent at the property.

The Top Tenant information can be viewed or filtered as follows:
- Viewing Options
	- **List** displays the Top Tenants as a table.  Click on any column to sort the list by that category.
	<blockquote><img alt="Top Tenants List" src={useBaseUrl('img/top_tenants_list.png')} /></blockquote>
	-	**Grid** displays the Top Tenants grouped by their contribution to the property's leased pace, Base Rent, and Reimbursements (NNN Rent).
	<blockquote><img alt="Top Tenants Grid" src={useBaseUrl('img/top_tenants_grid.png')} /></blockquote>
	
- Filter by Tenant Status
	-	Select one or all of the Tenant Statuses to only include tenants that match the selected statuses.

### Available Suites & Tenant Prospects

The Available Suites & Tenant Prospects provides a summary of current deals in progress and budgeted terms for any available suites.

The Available Suites & Tenant Prospects information can be viewed or filtered as follows:
- Viewing Options
	- **List** displays the Available Suites & Tenant Prospects as a table.  Click on any column to sort the list by that category.
		<blockquote><img alt="Prospects List" src={useBaseUrl('img/prospects_list.png')} /></blockquote>

	-	**Grid** displays the Available Suites & Tenant Prospects as cards.  The grid view provides more detailed information such as:
		- Proforma Rent Assumptions
		- Tenant Improvement Allowance
	
		<blockquote><img alt="Prospects Grid" src={useBaseUrl('img/prospects_grid.png')} /></blockquote>

- Filter by Tenant Status
	-	Select one or all of the Tenant Statuses to only include tenants that match the selected statuses.


### Tenant Payment Status

Tenant Payment Status provides the current payment status of Charges that have been submitted to Tenants.  Charges paid via ACH or Credit Card will only be recognized after payments have cleared, which typically takes 1-4 **business days** depending on the bank and payment method selected.

The Tenant Payment Status information can be viewed or filtered as follows:
- Viewing Options
	- Outstanding charges are displayed per tenant based on the filters applied.  Aggregate charge information includes the number of charges submitted, total amount due, total amount received, and the balance owed.  Click on "More Details" to view individual charge and payment status within this total.
	<blockquote><img alt="Tenant Payments" src={useBaseUrl('img/tenant_payments.png')} /></blockquote>

- Filter by Tenant Status
	-	Select one or all of the Tenant Statuses to only include tenants that match the selected statuses.


:::note
The **Due Soon** filter includes all payments that are due within the next ten days.
:::