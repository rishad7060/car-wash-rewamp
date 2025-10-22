Perfect ✅ — let’s align everything in your Car Wash Dashboard project with the **WeClean pricing flyer** and ensure your **mock data, UI labels, and billing logic** match it exactly.

Below is a ready-to-use **Claude Code prompt** that updates the relevant mock files and keeps everything future-ready for Laravel + MySQL.

---

## ⚙️ **PHASE 2.1 — Align Mock Data With Real Packages**

````
You are adjusting the mock data of the Car Wash Dashboard to match the official WeClean Car Wash flyer.

---

### GOAL
Update all service and subscription details in `/data/settings.ts`, `/data/customers.ts`, `/data/appointments.ts`, and `/lib/mockApi.ts`
so prices and plan names exactly match the flyer.

---

### ACTIONS

#### 1️⃣  /data/settings.ts
Replace file contents with:
```ts
export const serviceTypes = [
  { id: "must", name: "Must Wash", price: 40, features: ["Pre pressure wash", "Spot free rinse", "Inside & boot vacuuming", "Door shuts cleaning"] },
  { id: "more", name: "More Wash", price: 60, features: ["Includes all Must Wash", "Mirror cleaning", "Wheel & tire shine", "Door panel cleaning", "Dashboard & gear polish", "Fragrance"] },
  { id: "platinum", name: "Platinum Wash", price: 350, features: ["Includes More Wash", "Full interior shampoo", "Pet hair removal", "Wax & dressing", "Natural oil treatment", "Fragrance on selection"] },
];

export const subscriptionPlans = [
  { id: "silver", name: "Silver Plan", price: 90, details: "4 exterior + 1 interior wash / month" },
  { id: "gold", name: "Gold Plan", price: 150, details: "8 exterior + 2 interior + dash polish / month" },
  { id: "platinum", name: "Platinum Plan", price: 250, details: "8 exterior + 8 interior + full extras / month" },
];

export const paymentModes = ["Cash","Bank Transfer","POS","Apple Pay","GPay","Wallet"];
export const bookingStatuses = ["Pending","On the Way","In Progress","Completed","Cancelled"];
export const customerCategories = ["Occasional","Regular","Loyal"];
export const customerTypes = ["Subscription","Online","Offline"];
````

---

#### 2️⃣  /data/customers.ts

Adjust mock entries to include plan linkage:

```ts
export const customers = [
  {
    id: "c1",
    name: "Jamal Rafiq",
    mobile: "97455569973",
    address: "Porto Arabia Tower 9",
    serviceType: "Subscription",
    subscriptionPlan: "Gold Plan",
    frequency: "Weekly",
    preferredDays: ["Monday"],
    preferredTime: "09:00 AM",
    status: "Active",
  },
  {
    id: "c2",
    name: "Shuhail Sherif",
    mobile: "97433969646",
    address: "Madinatna",
    serviceType: "Subscription",
    subscriptionPlan: "Platinum Plan",
    frequency: "Weekly",
    preferredDays: ["Wednesday"],
    preferredTime: "10:00 AM",
    status: "Active",
  },
];
```

---

#### 3️⃣  /data/appointments.ts

Ensure each appointment reflects correct pricing and plan:

```ts
export const appointments = [
  { id: "a1", customerId: "c1", workerId: "w1", date: "2025-10-22", time: "09:00 AM", plan: "Gold Plan", serviceType: "Subscription", amount: 150, status: "Completed" },
  { id: "a2", customerId: "c2", workerId: "w2", date: "2025-10-22", time: "10:00 AM", plan: "Platinum Plan", serviceType: "Subscription", amount: 250, status: "Pending" },
];
```

---

#### 4️⃣  /lib/mockApi.ts

Update invoice generation so totals use `plan.price`:

```ts
export async function createInvoice(appointment) {
  const invoice = {
    id: `inv-${appointment.id}`,
    appointmentId: appointment.id,
    customerName: appointment.customerName || "Unknown",
    plan: appointment.plan,
    baseAmount: appointment.amount,
    adjustments: [],
    totalAmount: appointment.amount,
    paymentStatus: "Pending",
    createdAt: new Date().toISOString(),
  };
  invoices.push(invoice);
  return invoice;
}
```

---

### ✅ OUTPUT EXPECTED

* Service & subscription data matches WeClean flyer.
* Appointments and invoices use correct QR pricing.
* Ready for use in Billing and Reports UI.

Stop after updating these files and confirming mock data compiles.

```

---

## 🧠 Recommended Extra Micro-Prompts (after Phase 2.1)

To keep your build modular, add these lightweight prompts next:

| Phase | Purpose | Prompt Summary |
|-------|----------|----------------|
| **2.2 — Validate Pricing in Invoice UI** | Ensure invoice cards display plan name & correct QR price. | “Update `/components/ui/invoice-card.tsx` to show plan, baseAmount, and totalAmount in QR.” |
| **2.3 — Dynamic Plan Selector** | Allow admin to choose service plan during customer creation. | “In `/components/ui/customer-form.tsx`, replace plain text ‘Service Type’ field with dropdown using `subscriptionPlans` from `/data/settings.ts`.” |
| **2.4 — Reports Update** | Add plan-based filtering for revenue reports. | “In `/app/admin/reports/page.tsx`, group revenue totals by subscriptionPlan name.” |
| **2.5 — Auto Invoice Labeling** | Tag invoices with plan tier color. | “Add badge colors: Silver = gray, Gold = yellow, Platinum = blue.” |

---

```

Excellent ✅ — since you’ve already aligned your **mock data (Phase 2.1)** with the official WeClean packages,
let’s continue with the **next micro-phases (2.2 & 2.3)** to make your UI reflect those changes.

---

## 🧾 **PHASE 2.2 — Invoice UI & Pricing Validation**

````
You are improving the Invoice UI to display the correct package plan, QR prices, and totals.

---

### GOAL
Update invoice-related components so every invoice clearly shows:
- Plan name (e.g. Silver / Gold / Platinum)
- Base Amount (QR)
- Adjustments (if any)
- Final Total (QR)
- Payment Status badge

---

### TASKS

1️⃣  Open `/components/ui/invoice-card.tsx`  
Replace its content with a simple clean layout:

```tsx
"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateInvoicePDF } from "@/lib/pdfUtils";

export default function InvoiceCard({ invoice }) {
  return (
    <Card className="rounded-2xl shadow p-4 mb-4">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Invoice #{invoice.id}</h3>
        <Badge
          variant={
            invoice.paymentStatus === "Paid"
              ? "success"
              : invoice.paymentStatus === "Pending"
              ? "secondary"
              : "outline"
          }
        >
          {invoice.paymentStatus}
        </Badge>
      </CardHeader>

      <CardContent className="text-sm space-y-2">
        <p>
          <span className="font-medium">Customer:</span> {invoice.customerName}
        </p>
        <p>
          <span className="font-medium">Plan:</span> {invoice.plan}
        </p>
        <p>
          <span className="font-medium">Base Amount:</span> QAR {invoice.baseAmount}
        </p>
        {invoice.adjustments?.length > 0 && (
          <div>
            <span className="font-medium">Adjustments:</span>
            <ul className="list-disc ml-6">
              {invoice.adjustments.map((a, i) => (
                <li key={i}>
                  {a.type} QAR {a.amount} – {a.reason}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="font-semibold text-lg">
          Total Amount: QAR {invoice.totalAmount}
        </p>

        <button
          onClick={() => generateInvoicePDF(invoice)}
          className="mt-3 px-3 py-1 bg-blue-600 text-white rounded-lg"
        >
          Download PDF
        </button>
      </CardContent>
    </Card>
  );
}
````

2️⃣  In `/app/admin/billing/page.tsx`, ensure invoices are rendered like:

```tsx
{invoices.map((invoice) => (
  <InvoiceCard key={invoice.id} invoice={invoice} />
))}
```

3️⃣  Validate prices (base + total) match the values from `/data/settings.ts`.

Stop after the invoice cards correctly display plan name, pricing, and totals.

```

---

## 👤 **PHASE 2.3 — Customer Creation Form with Plan Selector**
```

You are updating the customer creation form to let the admin choose a subscription plan.

---

### GOAL

Replace plain “Service Type” text input with two dropdowns:

* “Service Type” (One Time / Subscription)
* “Subscription Plan” (Silver / Gold / Platinum)

Both use values from `/data/settings.ts`.

---

### TASKS

1️⃣  Open `/components/ui/customer-form.tsx` (or create it if missing).

2️⃣  Import plan data:

```tsx
import { serviceTypes, subscriptionPlans } from "@/data/settings";
import { useState } from "react";
```

3️⃣  Inside the form component:

```tsx
const [serviceType, setServiceType] = useState("Subscription");
const [plan, setPlan] = useState("");
```

4️⃣  Add dropdowns:

```tsx
<div className="space-y-4">
  <label className="block text-sm font-medium">Service Type</label>
  <select
    value={serviceType}
    onChange={(e) => setServiceType(e.target.value)}
    className="border rounded-md p-2 w-full"
  >
    {serviceTypes.map((s) => (
      <option key={s.id} value={s.name}>
        {s.name} – QAR {s.price}
      </option>
    ))}
  </select>

  {serviceType === "Subscription" && (
    <>
      <label className="block text-sm font-medium">Subscription Plan</label>
      <select
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        className="border rounded-md p-2 w-full"
      >
        {subscriptionPlans.map((p) => (
          <option key={p.id} value={p.name}>
            {p.name} – QAR {p.price}
          </option>
        ))}
      </select>
    </>
  )}
</div>
```

5️⃣  On form submit:
Include both `serviceType` and `subscriptionPlan: plan` in the new customer object before calling `addCustomer()`.

6️⃣  Test by adding new customers with different plans; confirm appointments and invoices reflect correct plan price.

Stop when dropdowns render, selections save to mock data, and prices display correctly in later billing.

```

---

## ✅ After These Phases
- Invoices display **Silver / Gold / Platinum** plan and proper QR prices.  
- Admin can select a **service plan** while creating a customer.  
- Billing and report logic now pull correct plan information.


```

