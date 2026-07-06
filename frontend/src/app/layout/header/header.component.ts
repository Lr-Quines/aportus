import { Component, output } from '@angular/core';
import { LucideMenu, LucideUser } from '@lucide/angular';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'aportus-header',
  imports: [
    ThemeToggleComponent,
    LucideMenu,
    LucideUser
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  // #region Signals
  protected readonly toggleSidebar = output<void>();
  // #endregion Signals

}
