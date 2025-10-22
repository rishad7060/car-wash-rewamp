import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Invoice } from "@/lib/mockApi";

interface InvoiceCardProps {
  invoice: Invoice;
}

export function InvoiceCard({ invoice }: InvoiceCardProps) {
  const getPlanBadgeColor = (planName: string) => {
    switch (planName) {
      case "Silver Plan":
        return "bg-gray-100 text-gray-800";
      case "Gold Plan":
        return "bg-yellow-100 text-yellow-800";
      case "Platinum Plan":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col">
          <CardTitle className="text-lg font-semibold">
            Invoice #{invoice.id.split('-')[1]}
          </CardTitle>
          <CardDescription className="text-sm">
            {invoice.customerName} • {new Date(invoice.createdAt).toLocaleDateString()}
          </CardDescription>
        </div>
        <Badge className={getPlanBadgeColor(invoice.plan)}>
          {invoice.plan}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Base Amount</p>
            <p className="text-xl font-bold">SAR {invoice.baseAmount.toFixed(2)}</p>
          </div>
          <div className="space-y-2 text-right">
            <p className="text-sm text-gray-600">Total Amount</p>
            <p className="text-xl font-bold text-green-600">SAR {invoice.totalAmount.toFixed(2)}</p>
          </div>
        </div>

        {invoice.adjustments.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm font-medium text-gray-700 mb-2">Adjustments</p>
            <div className="space-y-1">
              {invoice.adjustments.map((adj, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{adj.description}</span>
                  <span className={adj.type === "discount" ? "text-green-600" : "text-red-600"}>
                    {adj.type === "discount" ? "-" : "+"}SAR {adj.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <Badge variant={invoice.paymentStatus === "Paid" ? "default" : "secondary"}>
              {invoice.paymentStatus}
            </Badge>
            <p className="text-sm text-gray-500">
              QR Code Ready • Amount: SAR {invoice.totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}