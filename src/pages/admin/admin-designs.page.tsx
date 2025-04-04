import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const AdminDesignPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Designs</h1>
        <Button>Upload Design</Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-video bg-muted"></div>
            <CardContent className="p-4">
              <h3 className="font-semibold">Design Title {i + 1}</h3>
              <p className="text-sm text-muted-foreground">Category</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">${((i % 5) + 1) * 25}</span>
                <span className="text-sm text-muted-foreground">
                  {((i % 10) + 1) * 5} sales
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDesignPage;
