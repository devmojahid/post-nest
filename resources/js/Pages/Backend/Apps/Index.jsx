import { Layout } from "@/Layouts/Partials/Layout";
import React, { useState } from "react";
import ContentLayout from "../ContentLayout";
import { Input } from "@/Components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { apps } from "./data";
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons-react";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/Others/CustomButton";

const appText = new Map([
  ["all", "All Apps"],
  ["connected", "Connected"],
  ["notConnected", "Not Connected"],
]);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [appType, setAppType] = useState("all");
  const [sort, setSort] = useState("ascending");

  const filteredApps = apps
    .sort((a, b) => {
      if (sort === "ascending") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    })
    .filter((app) => {
      if (appType === "all") return true;
      if (appType === "connected") return app.connected;
      if (appType === "notConnected") return !app.connected;
    });
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
        <div className="my-4 flex items-end justify-between sm:my-0 sm:items-center">
          <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
            <Input
              placeholder="Filter apps..."
              className="h-9 w-40 lg:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={appType} onValueChange={setAppType}>
              <SelectTrigger className="w-36">
                <SelectValue>{appText.get(appType)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Apps</SelectItem>
                <SelectItem value="connected">Connected</SelectItem>
                <SelectItem value="notConnected">Not Connected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-16">
              <SelectValue>
                <IconAdjustmentsHorizontal size={18} />
              </SelectValue>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="ascending">
                <div className="flex items-center gap-4">
                  <IconSortAscendingLetters size={16} />
                  <span>Ascending</span>
                </div>
              </SelectItem>
              <SelectItem value="descending">
                <div className="flex items-center gap-4">
                  <IconSortDescendingLetters size={16} />
                  <span>Descending</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className="shadow" />
        <ul className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredApps.map((app) => (
            <li
              key={app.name}
              className="rounded-lg border p-4 hover:shadow-md"
            >
              <div className="mb-8 flex items-center justify-between">
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  {app.logo}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={`${
                    app.connected
                      ? "border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900"
                      : ""
                  }`}
                >
                  {app.connected ? "Connected" : "Connect"}
                </Button>
              </div>
              <div>
                <h2 className="mb-1 font-semibold">{app.name}</h2>
                <p className="line-clamp-2 text-gray-500">{app.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Layout.Body>
    </ContentLayout>
  );
};

export default Index;
