import {
  IconApps,
  IconBoxSeam,
  IconChecklist,
  IconLayoutDashboard,
  IconPhotoScan,
  IconRouteAltLeft,
  IconTruck,
  IconUsersGroup,
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
    icon: <IconUsersGroup size={18} />,
  },
  {
    title: "Content Generator",
    href: "/ai/content-generator",
    icon: <IconPhotoScan size={18} />,
  },
  {
    title: "Image Generator",
    href: "/ai/image-generator",
    icon: <IconPhotoScan size={18} />,
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
