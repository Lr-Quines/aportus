import { NAV_ROUTES } from "../../../core/consts/routes.const";
import { NavLineItem } from "../../../shared/components/nav-line/interfaces/nav-line-item.interface";

export const navItemsCalculator: NavLineItem[] = [
  { label: 'Juros compostos', route: NAV_ROUTES.COMPOUND_INTEREST },
  { label: 'Primeiro milhão', route: NAV_ROUTES.FIRST_MILLION },
  { label: 'Reserva de emergência', route: NAV_ROUTES.EMERGENCY_FUND },
]
