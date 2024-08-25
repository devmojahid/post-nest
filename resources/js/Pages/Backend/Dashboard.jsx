import { Button } from "@/Components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import AdminDashboard from "@/Layouts/Admin/AdminDashboard";
import { PlusCircle } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <AdminDashboard>
      <Card className="title-card">
        <CardHeader className="title-card-head">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Dashboard</CardTitle>
            </div>
            <div>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Button className="mt-4">Add Product</Button>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default Dashboard;

// import { Overview } from "@/Components/Admin/Dashboard/overview";
// import { RecentSales } from "@/Components/Admin/Dashboard/recent-sales";
// import Search from "@/Components/Admin/Search";
// import ThemeSwitch from "@/Components/Admin/ThemeSwitch";
// import TopNav from "@/Components/Admin/TopNav";
// import { UserNav } from "@/Components/Admin/UserNav";
// import { Button } from "@/Components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/Components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
// import Admin from "@/Layouts/Admin";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Layout } from "@/Layouts/Partials/Layout";
// import Sidebar from "@/Layouts/Partials/Sidebar";
// import { Head } from "@inertiajs/react";
// import ContentLayout from "./ContentLayout";

// export default function Dashboard({ auth }) {
//   return (
//     <>
//       <ContentLayout>
//         <Layout.Body>
//           <div className="mb-2 flex items-center justify-between space-y-2">
//             <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
//             <div className="flex items-center space-x-2">
//               <Button>Download</Button>
//             </div>
//           </div>
//           <Tabs
//             orientation="vertical"
//             defaultValue="overview"
//             className="space-y-4"
//           >
//             <div className="w-full overflow-x-auto pb-2">
//               <TabsList>
//                 <TabsTrigger value="overview">Overview</TabsTrigger>
//                 <TabsTrigger value="analytics">Analytics</TabsTrigger>
//                 <TabsTrigger value="reports">Reports</TabsTrigger>
//                 <TabsTrigger value="notifications">Notifications</TabsTrigger>
//               </TabsList>
//             </div>
//             <TabsContent value="overview" className="space-y-4">
//               <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                 <Card>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                       Total Revenue
//                     </CardTitle>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="h-4 w-4 text-muted-foreground"
//                     >
//                       <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//                     </svg>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">$45,231.89</div>
//                     <p className="text-xs text-muted-foreground">
//                       +20.1% from last month
//                     </p>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                       Subscriptions
//                     </CardTitle>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="h-4 w-4 text-muted-foreground"
//                     >
//                       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                       <circle cx="9" cy="7" r="4" />
//                       <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
//                     </svg>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">+2350</div>
//                     <p className="text-xs text-muted-foreground">
//                       +180.1% from last month
//                     </p>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">Sales</CardTitle>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="h-4 w-4 text-muted-foreground"
//                     >
//                       <rect width="20" height="14" x="2" y="5" rx="2" />
//                       <path d="M2 10h20" />
//                     </svg>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">+12,234</div>
//                     <p className="text-xs text-muted-foreground">
//                       +19% from last month
//                     </p>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                       Active Now
//                     </CardTitle>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="h-4 w-4 text-muted-foreground"
//                     >
//                       <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//                     </svg>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">+573</div>
//                     <p className="text-xs text-muted-foreground">
//                       +201 since last hour
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>
//               <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
//                 <Card className="col-span-1 lg:col-span-4">
//                   <CardHeader>
//                     <CardTitle>Overview</CardTitle>
//                   </CardHeader>
//                   <CardContent className="pl-2">
//                     <Overview />
//                   </CardContent>
//                 </Card>
//                 <Card className="col-span-1 lg:col-span-3">
//                   <CardHeader>
//                     <CardTitle>Recent Sales</CardTitle>
//                     <CardDescription>
//                       You made 265 sales this month.
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <RecentSales />
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </Layout.Body>
//       </ContentLayout>
//     </>
//   );
// }
