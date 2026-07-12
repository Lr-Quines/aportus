import { LucideBuilding2, LucideCalculator, LucideChartNoAxesCombined, LucideHouse, LucideWallet } from "@lucide/angular";
import { NAV_ROUTES } from "../../../core/consts/routes.const";
import { SidebarItem } from "../interfaces/sidebar-item.interface";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Página inicial',
    route: NAV_ROUTES.HOME_PAGE,
    icon: LucideHouse
  },
  {
    label: 'Carteiras',
    route: NAV_ROUTES.PORTFOLIOS,
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
    label: 'Calculadoras',
    route: NAV_ROUTES.CALCULATORS,
    icon: LucideCalculator
  },
] as const;
