import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const AdminSettingsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" defaultValue="********" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettingsPage;
