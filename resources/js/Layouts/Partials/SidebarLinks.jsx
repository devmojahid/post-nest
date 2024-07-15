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
    href: "/",
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: "Tasks",
    label: "3",
    href: "/tasks",
    icon: <IconChecklist size={18} />,
  },
  {
    title: "Requests",
    label: "10",
    href: "/requests",
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: "Trucks",
        label: "9",
        href: "/trucks",
        icon: <IconTruck size={18} />,
      },
      {
        title: "Cargos",
        label: "",
        href: "/cargos",
        icon: <IconBoxSeam size={18} />,
      },
    ],
  },
  //   {
  //     name: "Users",
  //     route: "users",
  //     icon: IconUsers,
  //   },
];
