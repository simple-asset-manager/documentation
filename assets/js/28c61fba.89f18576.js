(self.webpackChunksimple_asset_manager_docs=self.webpackChunksimple_asset_manager_docs||[]).push([[7527],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return i},Z:function(){return s}});var n=a(2263),r=a(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,p=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(o)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+c:c}(i,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9487:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),s=a(4996),o=["components"],l={id:"options",slug:"options",title:"Options & Assumptions",sidebar_label:"Options & Assumptions"},p={unversionedId:"asset_manager/options",id:"asset_manager/options",isDocsHomePage:!1,title:"Options & Assumptions",description:"The Options tab includes three important types of information:",source:"@site/docs/asset_manager/options.md",sourceDirName:"asset_manager",slug:"/asset_manager/options",permalink:"/docs/asset_manager/options",version:"current",sidebar_label:"Options & Assumptions",frontMatter:{id:"options",slug:"options",title:"Options & Assumptions",sidebar_label:"Options & Assumptions"},sidebar:"someSidebar",previous:{title:"Messaging With Tenants",permalink:"/docs/asset_manager/messages"},next:{title:"Managing Payments",permalink:"/docs/asset_manager/payments"}},c=[{value:"Property",id:"property",children:[{value:"Proforma Dates",id:"proforma-dates",children:[]},{value:"Details",id:"details",children:[]}]},{value:"Tenants",id:"tenants",children:[{value:"Credit / Vacancy Loss",id:"credit--vacancy-loss",children:[]}]},{value:"Valuation",id:"valuation",children:[{value:"Cap Rate",id:"cap-rate",children:[]}]},{value:"Access &amp; Permissions",id:"access--permissions",children:[{value:"Who Can Access The Property?",id:"who-can-access-the-property",children:[]},{value:"What Can They Do?",id:"what-can-they-do",children:[]}]}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Options tab includes three important types of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Descriptive information such as the Property's address"),(0,i.kt)("li",{parentName:"ul"},"Assumptions used for analysis and reporting such as dates, cap rate, and vacancy settings"),(0,i.kt)("li",{parentName:"ul"},"Control over User Access & Permissions")),(0,i.kt)("h2",{id:"property"},"Property"),(0,i.kt)("h3",{id:"proforma-dates"},"Proforma Dates"),(0,i.kt)("p",null,"The Proforma Dates are the time period that is evaluated on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/asset_manager/proforma"},(0,i.kt)("em",{parentName:"a"},"Proforma"))," tab.  The period selected will determine which Tenants and Expenses to include."),(0,i.kt)("p",null,"These fields include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start Date")," - The day the Proforma Period begins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"End Date")," - The day the Proforma Period ends.")),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Proforma Date Period",src:(0,s.Z)("img/asset_manager/options/property_dates.png")})),(0,i.kt)("h3",{id:"details"},"Details"),(0,i.kt)("p",null,"The Property's descriptive information, such as the name and address."),(0,i.kt)("p",null,"The following fields are accepted:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Current options include Retail or Office"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Address, City, State, Zip Code"))),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Property Information",src:(0,s.Z)("img/asset_manager/options/property_details.png")})),(0,i.kt)("h2",{id:"tenants"},"Tenants"),(0,i.kt)("h3",{id:"credit--vacancy-loss"},"Credit / Vacancy Loss"),(0,i.kt)("p",null,"Credit and Vacancy Loss is a reserve that is held to account for frictional vacancy, credit, and collection issues.  This reserve is  subtracted from Effective Gross Income to determine Potential Gross Income on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/asset_manager/proforma"},(0,i.kt)("em",{parentName:"a"},"Proforma")),"."),(0,i.kt)("p",null,"The following fields can be updated for each tenant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Apply Vacancy")," - If set to On, a vacancy factor is applied to that tenant.  If set to Off, no reserve is held for that tenant."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vacancy Factor")," - The % of a tenant's rent payments assumed to not be collected due to vacancy, credit, and collection issues.")),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Vacancy, Credit, and Collection Loss",src:(0,s.Z)("img/asset_manager/options/tenants_vacancy.png")})),(0,i.kt)("h2",{id:"valuation"},"Valuation"),(0,i.kt)("p",null,"Properties are valued using the Capitalized Value approach.  This approach is based on the theory that a property is worth the discounted sum of all its future payments."),(0,i.kt)("p",null,"This requires two inputs, a stabilized Net Operating Income and an assumed rate of return, more commonly known as the Cap Rate."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Capitalized Value approach assumes an unbroken revenue stream that grows at a constant rate.",(0,i.kt)("br",{parentName:"p"}),"\n","It is crucial to:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Include only normal income and expenses"),(0,i.kt)("li",{parentName:"ul"},"Set a proforma period that is one operating cycle, such as 12 months"),(0,i.kt)("li",{parentName:"ul"},"Apply a reasonable discount rate")))),(0,i.kt)("h3",{id:"cap-rate"},"Cap Rate"),(0,i.kt)("p",null,"A Cap Rate is the assumed rate of return on an investment in a property.  The Net Operating Income is divided by this rate to arrive at a valuation."),(0,i.kt)("p",null,"The following fields are accepted:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cap Rate - The capitalization rate to apply to the property, between .01% and 100%.  This should be entered as a percentage and not a decimal (7.50% is correct, 0.075 is not)."),(0,i.kt)("li",{parentName:"ul"},"Comments - Any comments or support for the cap rate.")),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Cap Rates",src:(0,s.Z)("img/asset_manager/options/valuation_cap_rates.png")})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This approach is based on the Dividend Discount Model, which is used to value dividend paying stocks."),(0,i.kt)("p",{parentName:"div"},"Click ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dividend_discount_model"},"here")," if you'd like more information on the Dividend Discount Model (via Wikipedia)."))),(0,i.kt)("div",{style:{borderBottom:"4px solid grey"}}),(0,i.kt)("h2",{id:"access--permissions"},"Access & Permissions"),(0,i.kt)("p",null,"Access & Permission are two similar concepts, but have a very important distinction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Access")," determines who can access the property."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Permissions")," determines what a user with access can do."),(0,i.kt)("h3",{id:"who-can-access-the-property"},"Who Can Access The Property?"),(0,i.kt)("p",null,"This section allows an Administrator to grant access, modify users' permissions, and revoke access."),(0,i.kt)("h4",{id:"grant-access"},"Grant Access"),(0,i.kt)("p",null,"Access to the property can be granted to another user by sharing an Access Code.  Each Access Code is tied to a specific permission, which determines what a user may or may not do - such as update tenant data, manage payments, bill tenants, send messages, and more.  It is considered best practice to grant the minimum level of permissions a user requires to successfully perform their task."),(0,i.kt)("p",null,"Each permission, and its associated ",(0,i.kt)("strong",{parentName:"p"},"Access Code"),", is listed in this section.  Click ",(0,i.kt)("em",{parentName:"p"},"Permission Details")," to view a summary of a permission,"),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Granting User Access",src:(0,s.Z)("img/asset_manager/options/admin_grant_access.png")})),(0,i.kt)("p",null,'Access Codes are entered by clicking "Add Property" and then "Enter Property Code" from the main Portfolio page.'),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Property Code",src:(0,s.Z)("img/asset_manager/options/property_code.png")})),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is one Administrator Access created when a property is first added.  This user can perform ",(0,i.kt)("strong",{parentName:"p"},"any")," function related to the property, including granting, modifying or revoking user access.  ",(0,i.kt)("strong",{parentName:"p"},"Be very careful when assigning Administrator Access to a user.")))),(0,i.kt)("h4",{id:"edit-access"},"Edit Access"),(0,i.kt)("p",null,"Select any user from the dropdown to change their assigned permission or revoke access to the property entirely.  "),(0,i.kt)("p",null,'To change the user\'s property permissions, select the desired permission from "Select New User Permission".  Once a new permission is selected, a comparison is provided that highlights how permissions will change from their previously assigned permission.'),(0,i.kt)("p",null,'To revoke a user\'s access to the property - click "Revoke Access" - and that user will no longer be able to access or perform any actions related to the property.'),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Edit User Access",src:(0,s.Z)("img/asset_manager/options/admin_edit_access.png")})),(0,i.kt)("h4",{id:"view-access"},"View Access"),(0,i.kt)("p",null,"Select any user from the dropdown to view their assigned permission and what actions they can perform."),(0,i.kt)("h3",{id:"what-can-they-do"},"What Can They Do?"),(0,i.kt)("p",null,"Permissions determine what actions a user granted access to the property can perform.  This includes billing, updating tenant data, uploading and sharing documents, messaging tenants, and more."),(0,i.kt)("h4",{id:"create-permission"},"Create Permission"),(0,i.kt)("p",null,"Permissions can be fine tuned to suit any role in your organization."),(0,i.kt)("p",null,"To create a permission:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter a name for the permission"),(0,i.kt)("li",{parentName:"ol"},'Select "Permit" or "Deny" for each relevant action.  These include:',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tenant Management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Charges - Requesting, Scheduling, and Deleting Charges, entered in Tenant Payments under the ",(0,i.kt)("a",{parentName:"li",href:"/docs/asset_manager/payments"},(0,i.kt)("em",{parentName:"a"},"Payments"))," tab.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create and Post Tenant Charges"),(0,i.kt)("li",{parentName:"ul"},"Delete Tenant Charges"))),(0,i.kt)("li",{parentName:"ul"},"Data - All tenant information entered in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/asset_manager/tenants"},(0,i.kt)("em",{parentName:"a"},"Tenants"))," tab.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create New Tenants"),(0,i.kt)("li",{parentName:"ul"},"Delete Tenants"),(0,i.kt)("li",{parentName:"ul"},"Edit Tenant Data"))),(0,i.kt)("li",{parentName:"ul"},"Documents - Documents stored and shared between Landlord and Tenant.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Upload and Share Documents"),(0,i.kt)("li",{parentName:"ul"},"Delete Documents"))),(0,i.kt)("li",{parentName:"ul"},"Messages - Communication between the property and tenant in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/asset_manager/messages"},(0,i.kt)("em",{parentName:"a"},"Messages"))," tab.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send Messages"),(0,i.kt)("li",{parentName:"ul"},"View Messages"))))),(0,i.kt)("li",{parentName:"ul"},"Property Management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Expenses - Property Expenses entered in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/asset_manager/expenses"},(0,i.kt)("em",{parentName:"a"},"Expenses"))," tab.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create Property Expenses"),(0,i.kt)("li",{parentName:"ul"},"Delete Property Expenses"),(0,i.kt)("li",{parentName:"ul"},"Edit Property Expenses"))),(0,i.kt)("li",{parentName:"ul"},"Payments - Property payment settings, such as which Bank Account to deposit rent payments, entered in Account Details under the ",(0,i.kt)("a",{parentName:"li",href:"/docs/asset_manager/payments"},(0,i.kt)("em",{parentName:"a"},"Payments"))," tab.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Link Banks Accounts & Make Payments"),(0,i.kt)("li",{parentName:"ul"},"Unlink Bank Accounts"),(0,i.kt)("li",{parentName:"ul"},"Edit Banking and Payment Information"))),(0,i.kt)("li",{parentName:"ul"},"Property - Creating, Deleting, and Updating Properties, via the main Portfolio page.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create New Properties"),(0,i.kt)("li",{parentName:"ul"},"Delete Properties"),(0,i.kt)("li",{parentName:"ul"},"Edit Property Details"))),(0,i.kt)("li",{parentName:"ul"},"Proforma & Valuation - Updating the Proforma Date Period and updating Cap Rate information, via the ",(0,i.kt)("a",{parentName:"li",href:"/docs/asset_manager/options"},(0,i.kt)("em",{parentName:"a"},"Options"))," tab.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create Cap Rate"),(0,i.kt)("li",{parentName:"ul"},"Delete Cap Rate"),(0,i.kt)("li",{parentName:"ul"},"Update Proforma Dates"))))))),(0,i.kt)("li",{parentName:"ol"},'Click "Save".')),(0,i.kt)("blockquote",null,(0,i.kt)("img",{alt:"Create Permission",src:(0,s.Z)("img/asset_manager/options/permission_create.png")})),(0,i.kt)("h4",{id:"edit-permission"},"Edit Permission"),(0,i.kt)("p",null,"Permissions can be updated after they are created if a certain role needs to be expanded or changed."),(0,i.kt)("p",null,"To edit a permission:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the permisison to edit from the dropbox box."),(0,i.kt)("li",{parentName:"ol"},"Update either the permission name or what actions the permission permits or denies."),(0,i.kt)("li",{parentName:"ol"},'Click "Save".')),(0,i.kt)("h4",{id:"view-permission"},"View Permission"),(0,i.kt)("p",null,"View any permission that has been created to make sure it covers everything the role needs."))}d.isMDXComponent=!0}}]);