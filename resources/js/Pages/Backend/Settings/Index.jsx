import { Layout } from "@/Layouts/Partials/Layout";
import React from "react";
import ContentLayout from "../ContentLayout";
import { Separator } from "@/Components/ui/separator";
import {
  IconBrowserCheck,
  IconExclamationCircle,
  IconNotification,
  IconPalette,
  IconTool,
  IconUser,
} from "@tabler/icons-react";
import SidebarNav from "./SidebarNav";

const Index = ({ children }) => {
  return (
    <ContentLayout>
      <Layout.Body>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              App Integrations!
            </h2>
            <p className="text-muted-foreground">
              Here's a list of your apps for the integration!
            </p>
          </div>
        </div>
        <Separator className="my-4 lg:my-6" />
        <div className="flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="top-0 lg:sticky lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex w-full p-1 pr-4 md:overflow-y-hidden">
            {children}
          </div>
        </div>
      </Layout.Body>
    </ContentLayout>
  );
};

export default Index;

const sidebarNavItems = [
  {
    title: "Profile",
    icon: <IconUser size={18} />,
    href: "/settings/profile",
  },
  {
    title: "Account",
    icon: <IconTool size={18} />,
    href: "/settings/account",
  },
  {
    title: "Configurations",
    icon: <IconPalette size={18} />,
    href: "/settings/configurations",
  },
  {
    title: "Notifications",
    icon: <IconNotification size={18} />,
    href: "/settings/notifications",
  },
  {
    title: "Display",
    icon: <IconBrowserCheck size={18} />,
    href: "/settings/display",
  },
  {
    title: "Error Example",
    icon: <IconExclamationCircle size={18} />,
    href: "/settings/error-example",
  },
];
