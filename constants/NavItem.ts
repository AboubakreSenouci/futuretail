import { createElement } from "react";
import { NavItem } from "@/components/layout/Navlink";
import {
  ChartNoAxesCombined,
  Shirt,
  Spool,
  ImageIcon,
  LayoutDashboard,
  History,
} from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Market Intelligence",
    href: "/market-intelligence",
    icon: createElement(ChartNoAxesCombined, { size: 20 }),
  },
  {
    label: "Trend Search",
    href: "/trend-search",
    icon: createElement(Shirt, { size: 20 }),
  },
  {
    label: "The Studio",
    href: "/studio",
    icon: createElement(Spool, { size: 20 }),
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: createElement(ImageIcon, { size: 20 }),
  },
  {
    label: "Dashboards",
    href: "/dashboards",
    icon: createElement(LayoutDashboard, { size: 20 }),
    children: [
      { label: "Overview", href: "/dashboards/overview" },
      { label: "Analytics", href: "/dashboards/analytics" },
    ],
  },
  {
    label: "Chat History",
    href: "/chat-history",
    icon: createElement(History, { size: 20 }),
    children: [{ label: "Recent", href: "/chat-history/recent" }],
  },
];
