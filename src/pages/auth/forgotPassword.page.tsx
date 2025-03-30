import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen mt-[6rem] bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="w-full max-w-md bg-gray-900 border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-white">
                Reset Password
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Enter your email address and we'll send you a a to reset your
                password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white hover:cursor-pointer">
                Send Reset email
              </Button>
              <Button
                variant="ghost"
                className="text-purple-400 hover:text-purple-300"
                asChild
              >
                <a href="/login" className="flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
