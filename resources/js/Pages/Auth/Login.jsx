import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import BlankLayout from "../Backend/BlankLayout";
import { Layout } from "@/Layouts/Partials/Layout";
import { Card } from "@/Components/ui/card";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <BlankLayout>
      <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <h1 className="text-xl font-medium">Shadcn Admin</h1>
          </div>
          <Card className="p-6">
            <div className="flex flex-col space-y-2 text-left">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below <br />
                to log into your account
              </p>
            </div>
            {/* <UserAuthForm /> */}
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              By clicking login, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </Card>
        </div>
      </div>
      {/* <Head title="Log in" /> */}

      {/* {status && (
          <div className="mb-4 font-medium text-sm text-green-600">
            {status}
          </div>
        )}

        <form onSubmit={submit}>
          <div>
            <InputLabel htmlFor="email" value="Email" />

            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData("email", e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="Password" />

            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="current-password"
              onChange={(e) => setData("password", e.target.value)}
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="block mt-4">
            <label className="flex items-center">
              <Checkbox
                name="remember"
                checked={data.remember}
                onChange={(e) => setData("remember", e.target.checked)}
              />
              <span className="ms-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="flex items-center justify-end mt-4">
            {canResetPassword && (
              <Link
                href={route("password.request")}
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot your password?
              </Link>
            )}

            <PrimaryButton className="ms-4" disabled={processing}>
              Log in
            </PrimaryButton>
          </div>
        </form> */}
    </BlankLayout>
  );
}
