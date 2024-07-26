import { Layout } from "@/Layouts/Partials/Layout";
import React, { useState } from "react";
import ContentLayout from "../../ContentLayout";
import SettingsLayout from "../Index";
import { Head, Link, useForm } from "@inertiajs/react";
import { Separator } from "@/Components/ui/separator";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/Others/CustomButton";
const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });
  const submit = (e) => {
    e.preventDefault();
    // setIsLoading(true);

    // post(route("login"), {
    //   onSuccess: () => setIsLoading(false),
    //   onError: () => setIsLoading(false),
    // });
  };
  return (
    <SettingsLayout>
      <Head title="Profile Settings" />
      <div className="flex flex-1 flex-col">
        <div className="flex-none">
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">This Is Profile</p>
        </div>
        <Separator className="my-4 flex-none" />
        <div className="faded-bottom -mx-4 flex-1 overflow-auto scroll-smooth px-4 md:pb-16">
          <div className="lg:max-w-xl">
            <form onSubmit={submit}>
              <div className="grid gap-2">
                <div>
                  <InputLabel htmlFor="email" value="Email" />
                  <Input
                    placeholder="name@example.com"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData("email", e.target.value)}
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <InputLabel htmlFor="password" value="Password" />
                    <Link
                      href={route("password.request")}
                      className="text-sm font-medium text-muted-foreground hover:opacity-75"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    placeholder="********"
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

                <Button className="mt-2" loading={isLoading}>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default Index;
