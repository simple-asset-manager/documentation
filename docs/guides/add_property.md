---
id: add_property
title: Adding Properties
sidebar_label: Add a property
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Congratulations, you've just landed a new property management contract for Sequoia Springs, the hottest retail center in town!

Now you want to ditch the pen and paper and wow them with a modern Asset Management platform. <br/>
Getting up and running with Simple Asset Manager is, well, simple.

## First, Add the Property

1.  From the **Property** tab, click "Add Property" and then select "Create Property".
2.  The following information can be provided:
    - Property Name
        - This is the only required field.
    - Property Type
        - Retail and Office are currently supported.
    - Property Address
        - Includes Street Address, City, State and Zip Code.
3.  Click "Save Property".  After the property is saved, it will appear in the list of properties. Click any property to access or update information related to that property, such as adding Tenants or Expenses.

> Sequoia Springs is a Retail property located at 333 Jefferson Street, San Francisco, California 94133. 

<blockquote><img alt="Add a Property" src={useBaseUrl('img/guides/add_property/add_property_form.png')} /></blockquote>

## Then, Add Buildings to the Property

1.  Navigate to the **Buildings** tab and click "New Building".
2.  The following information can be provided:
    - Building Name
    - Building Size
    - Completion / Online Date
      - The Completion / Online Date is used to calculate the Property Occupancy for a given time period.  The building is only included if  "Include in Property GLA" is also selected.
    - Include in Property GLA
      - If selected, the building will be included in Property Occupancy calculations.

> Sequoia Springs includes 3 buildings for a total of 50,000 square feet.  All buildings were online as of January 1, 2015 and are included in the Property GLA. <br/><br/>
  The buildings are as follows:
- Building A is 30,000 square feet.
- Building B is 20,000 square feet.
- Building C is 20,000 square feet. 

<blockquote><img alt="Add a Building" src={useBaseUrl('img/guides/add_property/add_building_form.png')} /></blockquote>

## Next, Add Tenants to the Buildings

1.  Select the **Tenants** tab and click "New Tenant" to add a tenant to the property.
2.  Tenant information is separated into the following categories and accepts these fields:
    - General Information
      - Name
      - Size
      - Building
      - Suite
      - Status
      - Lease Start Date
      - Lease End Date
    - Rent
      - Base Rent
      - Common Area Maintenance
      - Insurance
      - Real Estate Taxes
      - Other Rent
    - Reimbursements
      - This section is for modeling property operating expense reimbursements from tenants.  For example, if a tenant pays a Pro-Rata share of the total snow removal expenses or common area electricity.
    - TI & LCs (Tenant Improvements and Leasing Commissions)
      - Tenant Improvements
        - Amount ($ per unit or total amount)
        - Date Paid
      - Leasing Commission: May be entered as a Total Amount, $ per unit, or as a % of Rent paid over a period
        - Amount ($ per unit or % of Rent over a period)
          - If entered as a % of rent, the following information must also be provided:
            - The period of time over which the commission is calculated
            - Which rental income to include (Base Rent, Common Area Maintenance, Insurance, or Taxes)
        - Date Paid
    - Options
      - Currently supports Renewal Options.  
      - Rent for any period, including option periods, is entered in the "Rent" tab.
    - Contact
      - Contacts for both Tenants and Landlord.
    - Sync
      - Sync creates a unique code that can be shared with the tenant.  When this code is entered by the user, a Tenant Portal is created allowing online rent payment, document sharing, communication, and more.

> Sequoia Springs includes 3 tenants occupying 60,000 square feet and 1 vacant suite offering 10,000 square feet available for lease. <br/><br/>
  The lease terms of the tenants in occupancy and projections for the available suites are as follows:
- Super Greens Grocery is in Building A, Suite 100 and occupies all 30,000 square feet.  They have a 20-year lease that began on January 1, 2015 and ends December 31, 2034.
  - Status: Leased
  - Rent Terms
    - Base Rent for the first 10 years is $12.00 per square foot (psf), increasing to $15.00 psf in years 11-20.
      - 1/1/2015: $12.00 psf
      - 1/1/2025: $15.00 psf
    - Common Area Maintenance is $3.00 psf, increasing by $0.50 psf every 5 years.
      - 1/1/2015: $3.00 psf
      - 1/1/2020: $3.50 psf
      - 1/1/2025: $4.00 psf
      - 1/1/2030: $4.50 psf
    - Insurance is $0.25 psf, increasing by $0.10 psf every 5 years.
      - 1/1/2015: $0.25 psf
      - 1/1/2020: $0.35 psf
      - 1/1/2025: $0.45 psf
      - 1/1/2030: $0.55 psf
    - Real Estate Taxes is $2.00 psf, increasing by $0.25 psf every 5 years.
      - 1/1/2015: $2.00 psf
      - 1/1/2020: $2.25 psf
      - 1/1/2025: $2.50 psf
      - 1/1/2030: $2.75 psf
  - Tenant Improvements & Leasing Commissions (TIs and LCs)
    - Super Greens Grocery received a $20.00 psf Tenant Improvement and the Leasing Commission paid was $6.00 psf.  Both were paid January 1, 2015.
  - Options
    - Super Greens Grocery has been given one renewal option for 10 years, the Tenant is required to give notice 180 days prior to their lease expiring to exercise this option.
      - Base Rent will be $20.00 psf commencing on January 1, 2035.
      - Common Area Maintenance will be $5.00 psf commencing on January 1, 2035.
      - Insurance will be $0.65 psf commencing on January 1, 2035.
      - Real Estate Taxes will be $3.00 psf commencing on January 1, 2035.
  - Contact
    - The Tenant Contact is the Store Manager, John Green.
      - Email: john@sggrocer.com
      - Phone: 555-867-5309
      - Address: 333 Jefferson Street A100, San Francisco CA, 94133 <br/><br/>
- Rockfit Climbing is in Building B, Suite 100 and occupies all 20,000 square feet.  They have a 20-year lease that began on January 1, 2015 and ends December 31, 2034.
  - Status: Leased
  - Rent Terms
    - Base Rent for the first 10 years is $20.00 per square foot (psf), increasing to $25.00 psf in years 11-20.
      - 1/1/2015: $20.00 psf
      - 1/1/2025: $25.00 psf
    - Common Area Maintenance is $3.00 psf, increasing by $0.50 psf every 5 years.
      - 1/1/2015: $3.00 psf
      - 1/1/2020: $3.50 psf
      - 1/1/2025: $4.00 psf
      - 1/1/2030: $4.50 psf
    - Insurance is $0.25 psf, increasing by $0.10 psf every 5 years.
      - 1/1/2015: $0.25 psf
      - 1/1/2020: $0.35 psf
      - 1/1/2025: $0.45 psf
      - 1/1/2030: $0.55 psf
    - Real Estate Taxes are $2.00 psf, increasing by $0.25 psf every 5 years.
      - 1/1/2015: $2.00 psf
      - 1/1/2020: $2.25 psf
      - 1/1/2025: $2.50 psf
      - 1/1/2030: $2.75 psf
  - Tenant Improvements & Leasing Commissions (TIs and LCs)
    - Rockfit Climbing received a $10.00 psf Tenant Improvement and the Leasing Commission paid was $6.00 psf.  Both were paid January 1, 2015.
  - Options
    - Rockfit Climbing has been given one renewal option for 10 years, the Tenant is required to give notice 180 days prior to their lease expiring to exercise this option.
      - Base Rent will be $30.00 psf commencing on January 1, 2035.
      - Common Area Maintenance will be $5.00 psf commencing on January 1, 2035.
      - Insurance will be $0.65 psf commencing on January 1, 2035.
      - Real Estate Taxes will be $3.00 psf commencing on January 1, 2035.
  - Contact
    - The Tenant Contact is the President, Geo Rockwell.
      - Email: geo@rockfit.com
      - Phone: 555-555-7625
      - Address: 500 Joshua Tree Drive, Joshua Tree, California 92252<br/><br/>
- Garden Galore is in Building C, Suite 100 and occupies 10,000 square feet.  They have a 10-year lease that began on January 1, 2020 and ends December 31, 2029.
  - Status: Leased
  - Rent Terms
    - Base Rent for the first 5 years is $15.00 per square foot (psf), increasing to $20.00 psf in years 6-10.
      - 1/1/2020: $15.00 psf
      - 1/1/2025: $20.00 psf
    - Common Area Maintenance is fixed at $3.00 psf for the entire lease term.
      - 1/1/2020: $3.00 psf
    - Insurance is fixed at $0.35 psf for the entire lease term.
      - 1/1/2020: $0.35 psf
    - Real Estate Taxes are fixed at $2.25 psf for the entire lease term.
      - 1/1/2020: $2.25 psf
  - Tenant Improvements & Leasing Commissions (TIs and LCs)
    - Garden Galore received a $10.00 psf Tenant Improvement and the Leasing Commission paid was 6% of the Base Rent over the 10 year term.  Both were paid January 1, 2020.
  - Contact
    - The Tenant Contact is the Store Manager, Corey Smith.
      - Email: corey@gardengalore.com
      - Phone: 555-555-8293
      - Address: 200 Valley Drive, San Francisco, California 94133<br/><br/>
- The balance of Building C, Suite 101 is currently available and offering 10,000 square feet for rent.  There are currently no prospects, however the finance team has set the following guidance for leasing the space.  A deal is expected to be in place by January 1st, 2021.
  - Status: Available
  - Start Date: 1/1/2021
  - End Date: 12/31/2030
  - Rent Terms (10 year lease)
    - Base Rent for the first 5 years is $17.50 per square foot (psf), increasing to $22.50 psf in years 6-10.
      - 1/1/2021: $17.50 psf
      - 1/1/2026: $22.50 psf
    - Common Area Maintenance is $3.00 psf, increasing to $3.50 psf in years 6-10.
      - 1/1/2021: $3.00 psf
      - 1/1/2026: $3.50 psf
    - Insurance is $0.35 psf, increasing to $0.50 psf in years 6-10.
      - 1/1/2021: $0.35 psf
      - 1/1/2026: $0.50 psf
    - Real Estate Taxes are $2.25 psf, increasing to $2.50 psf in years 6-10.
      - 1/1/2021: $2.25 psf
      - 1/1/2026: $2.50 psf
  - Tenant Improvements & Leasing Commissions (TIs and LCs)
    - Prospective Tenant will be offered a $15.00 psf Tenant Improvement and the Leasing Commission will be 6% of the Base Rent over the 10 year term.  Both will be paid on the projected commencement date, January 1, 2021.

<blockquote>
  <div className="image-frame">
    <img alt="Add Tenant General Information" src={useBaseUrl('img/guides/add_property/add_tenant_form_1.png')} />
    <img alt="Add Tenant Rent" src={useBaseUrl('img/guides/add_property/add_tenant_form_2.png')} />
    <img alt="Add Leasing Costs" src={useBaseUrl('img/guides/add_property/add_tenant_form_3.png')} />
    <img alt="Add Option Information" src={useBaseUrl('img/guides/add_property/add_tenant_form_4.png')} />
    <img alt="Add Contact Information" src={useBaseUrl('img/guides/add_property/add_tenant_form_5.png')} />
  </div>
</blockquote>

## Finally, Add the Expenses

**Expenses** are divided into separate stages of the Commercial Real Estate Lifecycle:
  - Acquisition
  - Development
  - Financing
  - Operating
  - Selling


### View Expenses
- Select "Expenses" from the sidebar.
- Expenses are displayed over the [Proforma Period dates](guides/add_property.md#proforma-period-dates).  Click the down-arrow on any expense to see more detailed information such as timing and payment frequency.

### Add, Remove, or Update Expenses
- Select "Manage" from the sidebar.
- Choose from one of the options that appear - New Expense, New Category, Edit Expenses, Edit Categories, or Expense Groups
  - Expense Groups are primarily used to group similar expenses when modeling expense reimbursements from Tenants.

### Reimburse Expenses
- Select "Reimbursements" to model any Operating Expense reimbursements paid to the property, including from Tenants.

### Expense Categories
Each expense must be assigned to a category.

To add an Expense Category, select "New Expense Category" and enter the desired category name.  After adding a category, new expenses can be added to that category or existing expenses can be re-categorized into the new category by selecting "Edit Expenses".

### Expense Line Items
Individual Expenses are added by selecting "New Expense" and entering the following details.
- Expense Name
- Expense Category
- Amount
  - An expense can be either "Basic" or "Advanced".  Select "Advanced Options" to enter an Advanced expense, which allows additional control over the expense amount and timing.
  - Advanced expenses require the following information:
    - Expense Amount
      - Input as either a total amount or a % increase over the previous period's amount.
    - Expense Start Date
    - Expense End Date
- Units/Frequency
  - Units accepts "Total", dollars per square foot ($/psf), or dollars per square meter ($/psm).
  - Frequency
    - Options include Annually, Quarterly, or Monthly.
- "Below-the-line" Cash Flow Expense
  - This option is to indicate an unusual or other non-operational recurring expense.  Expenses marked as "Below-the-line" are deducted after Net Operating Income to determine the Property's Net Cash Flow.
  - A common type of "Below-the-line" expense is the Interest Expense due for a loan.

:::note        
Basic Expenses are assumed to be a total amount over the Proforma Period entered, therefore if an expense is entered as:
  - Amount: $10,000
  - Unit: Total
  - Frequency: Monthly

The calculated expense for the proforma period will be $10,000 * 12 = $120,000.

Accordingly, the same expense paid quarterly is calculated as $10,000 * 4 = $40,000.
:::

> The 2021 Operating Budget for Sequoia Springs is:
  - Common Area Maintenance
    - Painting: $7,500 / year
    - Asphalt Repairs: $12,500 / year
    - Landscaping: $50,000 / year
  - Utilities
    - Electricity: $55,000 / year
    - Water: $12,500 / year
  - Insurance
    - Property Insurance: $0.25 psf / year
  - Real Estate Taxes
    - Property Taxes: $2.25 psf / year
  - Other
    - Security: $36,000 / year
    - Property Management: $30,000 / year
  - Non-Recoverable
    - Miscellaneous : $7,500 / year

> The Acquisition Costs for Sequoia Springs are:
  - Architectural & Engineering
    - Renderings: $25,000
  - Purchase Price
    - Purchase Price: $9,000,000
  - Closing Costs
    - Closing Costs: $215,000



<blockquote>
  <div className="image-frame">
    <img alt="Add Expense Category" src={useBaseUrl('img/guides/add_property/add_expense_form_1.png')} />
    <img alt="Add Expense Line Item" src={useBaseUrl('img/guides/add_property/add_expense_form_2.png')} />
  </div>
</blockquote>



## Property Options

The **Options** tab includes four sections that serve the following important functions:
 - Access & Permissions - Who has access to the property and what can they do?
 - Property - Updating general property information (Name, Address, etc.) and the Proforma Period Dates
 - Tenants - Updating the vacancy and credit loss reserves applied to each Tenant
 - Valuation - Setting the Capitalization Rate used to value the property

For purposes of this guide, we will review how to set the Proforma Period Dates, apply a Capitalization Rate, and update the Vacancy and Credit Loss reserves.

### Proforma Period Dates

:::tip
  Set the Proforma Period Dates before entering property expenses.  This will set the default starting date for any expenses that require detailed timing to the Proforma Period dates, saving time if there are a large number of expenses to add.
:::

Select "Dates" under the Property section on the sidebar.  The dates selected for the "Proforma Period" will determine the period of Income and Expenses displayed in the Proforma.

>The Proforma Period for Sequoia Springs is January 1, 2021 through December 31, 2021.

<blockquote><img alt="Add Proforma Date Period" src={useBaseUrl('img/guides/add_property/add_option_dates.png')} /></blockquote>

### Valuation
Select "Cap Rate" under the Valuation section on the sidebar.  The Capitalization Rate entered will be applied to the Net Operating Income over the Proforma Period selected, resulting in the Property Valuation that is displayed on the Dashboard and Proforma tabs.
  - Capitalization Rate: The rate to apply, entered as a whole number (ie. 7.50 instead of 0.075).
  - Comments: Any comments you would like to enter to support the Capitalization Rate entered.

>The Capitalization Rate for Sequoia Springs is 7.00%.  This is based on a recent sale of a comparable 75,000 square foot shopping center, Redwood Village, which sold at a 6.75% cap rate.  The Cap Rate for Sequoia Springs has been increased by 0.25% due to Redwood Village being fully occupied while Sequoia Springs currently has one vacancy.

<blockquote><img alt="Add Capitalization Rate" src={useBaseUrl('img/guides/add_property/add_option_valuation.png')} /></blockquote>

### Vacancy and Credit Loss Reserves
Select "Credit / Vacancy Loss" under the Tenants section on the sidebar.  This section allows for reserving against rental income that will not be collected and appears as the "Less: Vacancy" line on the Proforma tab.
  - Apply Vacancy: Toggle if the vacancy rate is applied to a particular tenant.
  - Vacancy Factor: The % of the Total Rental Income that is assumed will not be collected from a particular tenant.  This is entered as a whole number and the default is 5.00%

>- Super Greens Grocery credit rating was recently re-evaluated and upgraded to a AA, as a result there will not be any vacancy reserve held against this tenant.
 - Garden Galore is current on their rental obligations, but paid late multiple times throughout 2020.  As a result, the Asset Manager has elected to increase their Vacancy Factor to 7.50%.

<blockquote><img alt="Credit and Vacancy Loss" src={useBaseUrl('img/guides/add_property/add_option_vacancy.png')} /></blockquote>