import { Type } from "@angular/core";

export interface SidebarItem {
  label: string;
  route: string;
  icon: Type<unknown>;
}
