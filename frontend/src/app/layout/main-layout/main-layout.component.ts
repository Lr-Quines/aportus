import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'aportus-main-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {

  // #region Signals
  protected readonly isSidebarExpanded = signal(false);
  // #endregion Signals

  // #region Methods
  protected toggleSidebar(): void {
    this.isSidebarExpanded.update((value: boolean) => !value);
  }
  // #endregion Methods

}
