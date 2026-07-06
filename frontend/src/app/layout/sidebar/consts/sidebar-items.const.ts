import { LucideArrowLeftRight, LucideLayoutDashboard, LucideTrendingUp, LucideWallet } from "@lucide/angular";
import { SidebarItem } from "../models/sidebar-item.model";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Visão Geral',
    route: '/dashboard',
    icon: LucideLayoutDashboard
  },
  {
    label: 'Carteiras',
    route: '/portfolios',
    icon: LucideWallet
  },
  {
    label: 'Lançamentos',
    route: '/transactions',
    icon: LucideArrowLeftRight
  },
  {
    label: 'Relatórios',
    route: '/reports',
    icon: LucideTrendingUp
  },
];
