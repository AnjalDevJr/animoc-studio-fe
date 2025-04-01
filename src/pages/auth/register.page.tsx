import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  InputLabel,
  InputType,
  TextInputField,
} from "@/components/form/input-form.component";

export default function RegisterPage() {
  const registerDTO = Yup.object({
    name: Yup.string().min(2).max(50).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*_-])[a-zA-Z\d!@#$%&*_-]{8,15}$/
      )
      .required(),
    confirmPassword: Yup.string()
      .equals([Yup.ref("password")])
      .required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerDTO),
  });

  const submitForm = async (data: any) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* form Content */}
      <form className="flex-grow" onSubmit={handleSubmit(submitForm)}>
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="w-full max-w-md bg-gray-900 border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-white">
                Create an Account
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Enter your details to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <InputLabel htmlFor="name">Full Name</InputLabel>
                  </div>
                  <TextInputField
                    name="fullName"
                    type={InputType.TEXT}
                    placeholder="John Doe"
                    control={control}
                    errMsg={errors?.name?.message as string}
                  ></TextInputField>
                </div>
              </div>
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
                </div>
                <TextInputField
                  name="password"
                  type={InputType.PASSWORD}
                  placeholder="••••••••"
                  control={control}
                  errMsg={errors?.password?.message as string}
                ></TextInputField>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <InputLabel htmlFor="confirmPassword">
                    Confirm Password
                  </InputLabel>
                </div>
                <TextInputField
                  name="confirmPassword"
                  type={InputType.PASSWORD}
                  placeholder="••••••••"
                  control={control}
                  errMsg={errors?.confirmPassword?.message as string}
                ></TextInputField>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white hover: cursor-pointer">
                Create Account
              </Button>
              <div className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Sign in
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}
