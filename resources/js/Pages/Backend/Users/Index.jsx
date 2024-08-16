import { Layout } from "@/Layouts/Partials/Layout";
import React from "react";
import ContentLayout from "../ContentLayout";
// Data table
import { DataTable } from "./Partials/List/data-table";
import { columns } from "./Partials/List/columns";
import { Head } from "@inertiajs/react";
  
const Index = ({users}) => {
  const othersInfo = {
    name: "Users",
    createLink: route('users.create'),
    createText: 'Create User',
    search: true,
    searchIdentifier: 'name',
  }
  return (
    <ContentLayout>
      <Head title="Users" />
      <Layout.Body>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0 h-screen">
          <DataTable data={users.data} columns={columns} othersInfo={othersInfo} />
        </div>
      </Layout.Body>
    </ContentLayout>
  );
};

export default Index;
