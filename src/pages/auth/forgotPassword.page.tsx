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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  InputLabel,
  InputType,
  TextInputField,
} from "@/components/form/input-form.component";

export default function ForgotPasswordPage() {
  const forgotPasswordDTO = Yup.object({
    email: Yup.string().email().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordDTO),
  });

  const submitForm = async (data: { email: string }) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen mt-[6rem] bg-black text-white flex flex-col">
      {/* Main Content */}
      <form className="flex-grow" onSubmit={handleSubmit(submitForm)}>
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
                <div className="flex items-center justify-between">
                  <InputLabel htmlFor="email">Email</InputLabel>
                </div>
                <TextInputField
                  name="email"
                  type={InputType.EMAIL}
                  placeholder="your.email@example.com"
                  control={control}
                  errMsg={errors?.email?.message as string}
                ></TextInputField>
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
      </form>
    </div>
  );
}
