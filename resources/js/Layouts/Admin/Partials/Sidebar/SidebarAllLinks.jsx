import {
  IconApps,
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconError404,
  IconExclamationCircle,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconHexagonNumber5,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUserShield,
  IconUsers,
  IconLock,
} from "@tabler/icons-react";

export const SidebarLinks = [
  {
    title: "Dashboard",
    label: "",
    href: "/dashboard",
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <IconChecklist size={18} />,
  },
  {
    title: "Comming Soon",
    href: "/comming-soon",
    icon: <IconChecklist size={18} />,
  },
  {
    title: "404 Error",
    href: "/error-404",
    icon: <IconError404 size={18} />,
  },
  {
    title: "All Generators",
    href: "/all-gnerators",
    icon: <IconApps size={18} />,
  },
  {
    title: "Settings",
    href: "/sub-menu",
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: "Profile",
        href: "/settings/profile",
        icon: <IconTruck size={18} />,
      },
      {
        title: "Account",
        label: "",
        href: "/settings/account",
        icon: <IconBoxSeam size={18} />,
      },
    ],
  },
];
