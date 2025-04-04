import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {["Total Sales", "Active Users", "New Orders", "Pending Designs"].map(
          (title, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {i === 0
                    ? "$12,543"
                    : i === 1
                    ? "1,234"
                    : i === 2
                    ? "56"
                    : "23"}
                </div>
                <p className="text-xs text-muted-foreground">
                  +{(i + 1) * 5}% from last month
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40`}
                      alt="User"
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">User {i}</p>
                      <p className="text-sm text-muted-foreground">2h ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Purchased Design #{i}
                    </p>
                  </div>
                  <div className="text-right font-medium">
                    ${(i * 25).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Designs</CardTitle>
            <CardDescription>Top selling designs this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-muted"></div>
                  <div className="flex-1">
                    <p className="font-medium">Design #{i}</p>
                    <p className="text-sm text-muted-foreground">
                      {i * 12} sales
                    </p>
                  </div>
                  <div className="text-right font-medium">
                    ${(i * 25).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
