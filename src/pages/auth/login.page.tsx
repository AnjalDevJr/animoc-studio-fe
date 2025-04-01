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
import { Checkbox } from "@/components/ui/checkbox";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  InputLabel,
  InputType,
  TextInputField,
} from "@/components/form/input-form.component";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const loginDTO = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginDTO),
  });

  const submitForm = async (data: { email: string; password: string }) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <form className="flex-grow mt-[4rem]" onSubmit={handleSubmit(submitForm)}>
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="w-full max-w-md bg-gray-900 border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-white">
                Sign In
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <InputLabel htmlFor="email">Email</InputLabel>
                </div>
                <TextInputField
                  name="email"
                  type={InputType.TEXT}
                  placeholder="your.email@example.com"
                  control={control}
                  errMsg={errors?.email?.message as string}
                ></TextInputField>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <NavLink
                    to="/forgot-password"
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Forgot password?
                  </NavLink>
                </div>
                <TextInputField
                  name="password"
                  type={InputType.PASSWORD}
                  placeholder="••••••••"
                  control={control}
                  errMsg={errors?.password?.message as string}
                ></TextInputField>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-400">
                  Remember me
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Sign In
              </Button>
              <div className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Sign up
                </NavLink>
              </div>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}
