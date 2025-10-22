import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { invoices } from "@/lib/mockApi";
import { subscriptionPlans } from "@/data/settings";

export default function ReportsPage() {
  // Calculate revenue by subscription plan
  const revenueByPlan = subscriptionPlans.map(plan => {
    const planInvoices = invoices.filter(inv => inv.plan === plan.name);
    const totalRevenue = planInvoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
    const paidRevenue = planInvoices
      .filter(inv => inv.paymentStatus === "Paid")
      .reduce((sum, inv) => sum + inv.totalAmount, 0);
    const invoiceCount = planInvoices.length;
    const paidCount = planInvoices.filter(inv => inv.paymentStatus === "Paid").length;

    return {
      planName: plan.name,
      totalRevenue,
      paidRevenue,
      pendingRevenue: totalRevenue - paidRevenue,
      invoiceCount,
      paidCount,
      conversionRate: invoiceCount > 0 ? (paidCount / invoiceCount) * 100 : 0,
    };
  });

  const totalRevenue = revenueByPlan.reduce((sum, plan) => sum + plan.totalRevenue, 0);
  const totalPaid = revenueByPlan.reduce((sum, plan) => sum + plan.paidRevenue, 0);
  const totalInvoices = revenueByPlan.reduce((sum, plan) => sum + plan.invoiceCount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600">View business analytics and performance reports</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">SAR {totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">All plans combined</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">SAR {totalPaid.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Collected payments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">SAR {(totalRevenue - totalPaid).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Outstanding payments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalInvoices}</div>
            <p className="text-xs text-muted-foreground">All invoices created</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue by Plan Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue by Subscription Plan</CardTitle>
          <CardDescription>
            Breakdown of revenue performance by subscription tier
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueByPlan.map((plan) => (
              <div key={plan.planName} className="p-4 border rounded-lg">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div>
                    <h4 className="font-semibold text-sm">{plan.planName}</h4>
                    <p className="text-xs text-gray-500">
                      {plan.invoiceCount} invoice{plan.invoiceCount !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-lg font-bold">SAR {plan.totalRevenue.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Paid</p>
                    <p className="text-lg font-bold text-green-600">SAR {plan.paidRevenue.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Rate</p>
                    <p className="text-lg font-bold">{plan.conversionRate.toFixed(1)}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}