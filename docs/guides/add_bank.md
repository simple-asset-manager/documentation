---
id: add_bank
title: Accept Online Payments
sidebar_label: Accept Online Payments
---

import useBaseUrl from '@docusaurus/useBaseUrl';

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Simple Asset Manager has partnered with Dwolla to process ACH transactions - focusing on built-in compliance, security infrastructure and an innovative integration ensuring that Simple Asset Manager **never stores sensitive banking details.**

## Add a Bank Account
Navigate to the **Payments** tab to begin the process of adding a bank account.

Depending on the amount of money transferred per week and whether the account is registered to a Business Entity or Individual will determine what information is required.

Once your account is approved and a bank account linked - you may begin charging Tenants and collecting rent entirely online.

<blockquote><img alt="Add Bank" src={useBaseUrl('img/add_bank_add_bank.png')} /></blockquote>

:::note
More broadly known as "Know Your Customer", the purpose of performing this due diligence is to verify the identity of individuals wishing to conduct a financial transaction, while also giving a reasonable understanding of the type of activity in which each customer will engage.  

Only the minimum amount of information to satisfy these requirements will be requested.

[Click here to learn more about Know Your Customer and the Customer Identification Program](https://www.dwolla.com/updates/guide-customer-identification-program-payments-api/ "Know your customer")
:::

## Charging a Tenant

A charge can be submitted to any tenant added to the Property.  Once a charge has been submitted, its status is easily tracked either through the **Dashboard** or "View payments" on the sidebar.

:::note
**Tenants that have been Synced** will receive an e-mail notification and are able to pay their charges online via the Tenant Portal.

[Click here to learn more about Syncing tenants](sync_tenant)
:::

### Request Payment
Select "Request Payment" from the sidebar to charge a Tenant.

- Required Information
	- Tenant To Bill
		- Select from any Tenant added to the Property
			- Any Tenant status may be charged - including "Available" suites with no tenant.  <br/>  This is intentional. For example, if a prospective tenant is contributing towards the costs of an architectural fitout, the charge can be submitted, tracked, and paid all via Simple Asset Manager.
	- Billing Type
		- Select the type of Charge (Base Rent, Real Estate Taxes, CAM Reconciliation, etc.)
	- Billing Period
		- Start of Billing Period
		- End of Billing Period
		- Date Payment Due
	- Amount to Bill
		- The "Calculated Payment" is provided **solely for informational purposes**.  This calculation is based on the period selected and rent details for that Tenant, which is not necessarily the amount that should be billed.
- Optional Information
	- Message or Note to include with the Charge
	- Attachments to include with the Charge
	- Internal Notes & Information
		- Any notes or attachments entered in this section will not be shared with the Tenant.

<blockquote><img alt="Request Payment" src={useBaseUrl('img/add_bank_charge_request.png')} /></blockquote>

### Staging vs. Submit Charge
Once all the information for a Charge has been entered, there are two options:
- **Save** will hold the charge in "Staging" - which can be accessed under "View Payments" in the sidebar.
    - Select a single or multiple charges in Staging to either Submit or Delete the selected charges.
    - Staging is designed to be a queue for charges that are finalized but require approval or review before submitting to the Tenant.  Once a charge is in Staging, it may not be edited. <br/>  If a charge is incorrect, delete the charge and create a new one.

<blockquote><img alt="Request Payment" src={useBaseUrl('img/add_bank_charge_staging.png')} /></blockquote>

- **Save & Submit to Tenant** moves the charge to "Submitted" and sends an e-mail notification to the Tenant if they are synced.
    - Once a charge is submitted, its status can be tracked on the Payments card in the Dashboard and under "View Payments".

### Post Payment
Tenants are able to make payments online through their Tenant Portal by **Syncing**.  

[To learn how to sync Tenants, click here.](guides/sync_tenant.md "Sync Tenants")

If a Tenant is *not synced*, or makes a payment via cash or a check - payments can also be posted manually.
- First, create the charge and click "Save & Submit to Tenant" to move the charge to Submitted.
- Click on "Post Payment" to see a list of all charges that have been submitted.  Click on "Post" to select a charge to pay.
-	Provide the following payment information:
	-	Payment Method
		- Choose from Cash, Check, or Credit Card
	-	Payment Amount
	-	Payment Date
	- Payment Note (optional)


<blockquote>
	<div class="image-frame">
	<img alt="Select Charge for Payment" src={useBaseUrl('img/add_bank_charge_post_table.png')} />
		<hr/>
		<hr/>
	<img alt="Post Payment" src={useBaseUrl('img/add_bank_charge_post_payment.png')} />
	</div>
</blockquote>