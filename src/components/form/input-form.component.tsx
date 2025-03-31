import { Input } from "@/components/ui/input";
import { useController } from "react-hook-form";

interface InputLabelProps {
  htmlFor: string;
  children: any;
}

export const InputLabel = ({ htmlFor, children }: InputLabelProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className="text-white">
        {children}
      </label>
    </>
  );
};

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
}

interface TextInputFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  errMsg: string;
  control: any;
}

export const TextInputField = ({
  name,
  type,
  placeholder,
  errMsg,
  control,
}: TextInputFieldProps) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: "",
  });
  return (
    <>
      <Input
        {...field}
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-gray-800 border-gray-700 text-white"
      />
      <span className="text-red-800">{errMsg}</span>
    </>
  );
};
