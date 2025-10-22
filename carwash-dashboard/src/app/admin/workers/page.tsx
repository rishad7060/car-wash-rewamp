import { AdminLayout } from "@/components/admin-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workers</h1>
          <p className="text-gray-600">Manage car wash staff and shift schedules</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Worker Management</CardTitle>
            <CardDescription>
              Manage staff, track shifts, and assign workers to appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Worker management features will be implemented in Phase 8.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}