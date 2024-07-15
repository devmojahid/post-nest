import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

import Sidebar from "./Partials/Sidebar";
import useIsCollapsed from "@/hooks/use-is-collapsed";

export default function Admin({ children }) {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${
          isCollapsed ? "md:ml-14" : "md:ml-64"
        } h-full`}
      >
        {children}
      </main>
    </div>

    // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    //   <div>
    //     <Link href="/">
    //       <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
    //     </Link>
    //   </div>

    //   <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
    //     {children}
    //   </div>
    // </div>
  );
}
