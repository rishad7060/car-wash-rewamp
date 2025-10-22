import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerForm } from "@/components/ui/customer-form";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  const handleCustomerSubmit = (customerData: any) => {
    console.log("New customer data:", customerData);
    // In a real implementation, this would save to backend
    alert(`Customer ${customerData.name} added with ${customerData.subscriptionPlan}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <p className="text-gray-600">Manage your car wash customers</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Existing Customers</CardTitle>
              <CardDescription>
                View and manage current customer subscriptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customers.map((customer) => (
                  <div key={customer.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{customer.name}</h3>
                        <p className="text-sm text-gray-600">{customer.mobile}</p>
                        <p className="text-sm text-gray-500">{customer.address}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                          {customer.subscriptionPlan}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          {customer.frequency} • {customer.preferredDays.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <CustomerForm onSubmit={handleCustomerSubmit} />
        </div>
      </div>
    </div>
  );
}