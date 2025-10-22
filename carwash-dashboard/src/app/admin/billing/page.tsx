import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
          <p className="text-gray-600">Manage invoices and payment processing</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Invoice Management</CardTitle>
            <CardDescription>
              Create, edit, and manage customer invoices with PDF export
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Billing and invoice features will be implemented in Phase 9.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}