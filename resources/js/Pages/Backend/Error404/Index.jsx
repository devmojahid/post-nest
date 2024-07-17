import { Layout } from "@/Layouts/Partials/Layout";
import React from "react";
import BlankLayout from "../BlankLayout";
import { Button } from "@/Components/ui/button";
// inertia link

const Index = () => {
  return (
    <BlankLayout>
      <Layout.Body>
        <div className="h-svh">
          <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
            <h1 className="text-[7rem] font-bold leading-tight">404</h1>
            <span className="font-medium">Oops! Page Not Found!</span>
            <p className="text-center text-muted-foreground">
              It seems like the page you're looking for <br />
              does not exist or might have been removed.
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="outline">Go Back</Button>
              <Button>Back to Home</Button>
            </div>
          </div>
        </div>
      </Layout.Body>
    </BlankLayout>
  );
};

export default Index;
