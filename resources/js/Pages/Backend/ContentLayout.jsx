import { Overview } from "@/Components/Admin/Dashboard/overview";
import { RecentSales } from "@/Components/Admin/Dashboard/recent-sales";
import Search from "@/Components/Admin/Search";
import ThemeSwitch from "@/Components/Admin/ThemeSwitch";
import TopNav from "@/Components/Admin/TopNav";
import { UserNav } from "@/Components/Admin/UserNav";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Admin from "@/Layouts/Admin";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Layout } from "@/Layouts/Partials/Layout";
import Sidebar from "@/Layouts/Partials/Sidebar";
import { Head } from "@inertiajs/react";

export default function ContentLayout({ children }) {
  return (
    <>
      <Admin>
        <Layout>
          <Layout.Header>
            <TopNav />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <ThemeSwitch />
              <UserNav />
            </div>
          </Layout.Header>
          {children}
        </Layout>
      </Admin>
    </>
  );
}
