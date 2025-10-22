import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InvoiceCard } from "@/components/ui/invoice-card";
import { invoices, getInvoices } from "@/lib/mockApi";
import { useEffect, useState } from "react";

export default function BillingPage() {
  const [invoiceList, setInvoiceList] = useState<typeof invoices>([]);

  useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = async () => {
    try {
      const data = await getInvoices();
      setInvoiceList(data);
    } catch (error) {
      console.error("Failed to load invoices:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
        <p className="text-gray-600">Manage invoices and payment processing</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {invoiceList.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
}