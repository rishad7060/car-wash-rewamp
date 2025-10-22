import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">View business analytics and performance reports</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Business Analytics</CardTitle>
            <CardDescription>
              Revenue trends, customer analytics, and worker performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Reports and analytics features will be implemented in Phase 10.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}