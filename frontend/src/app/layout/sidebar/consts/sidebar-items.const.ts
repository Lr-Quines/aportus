import { LucideBuilding2, LucideCalculator, LucideChartNoAxesCombined, LucideHouse, LucideWallet } from "@lucide/angular";
import { SidebarItem } from "../models/sidebar-item.model";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Página inicial',
    route: '/home-page',
    icon: LucideHouse
  },
  {
    label: 'Carteiras',
    route: '/portfolios',
    icon: LucideWallet
  },
  {
    label: 'Ações',
    route: '/acoes',
    icon: LucideChartNoAxesCombined
  },
  {
    label: 'FIIs',
    route: '/fiis',
    icon: LucideBuilding2
  },
  {
    label: 'Calculadora de juros',
    route: '/interest-calculator',
    icon: LucideCalculator
  },
] as const;
