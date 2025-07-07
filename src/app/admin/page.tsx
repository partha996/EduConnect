import { PageHeader } from "@/components/layout/PageHeader";
import { UsersTable } from "@/components/admin/UsersTable";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { users } from "@/lib/mock-data";

export default function AdminPage() {
  return (
    <>
      <PageHeader
        title="Admin Panel"
        description="Manage users and platform settings."
      />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">User Management</CardTitle>
                <CardDescription>View and manage all users on the platform.</CardDescription>
            </CardHeader>
            <CardContent>
                <UsersTable users={users} />
            </CardContent>
        </Card>
      </div>
    </>
  );
}
