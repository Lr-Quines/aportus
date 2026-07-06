import { Component, HostListener, input, model } from '@angular/core';

@Component({
  selector: 'aportus-offcanvas',
  imports: [],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css',
})
export class OffcanvasComponent {

  // #region Signals
  public readonly isSidebarExpanded = model.required<boolean>();
  public readonly position = input<'left' | 'right'>('right');
  public readonly size = input<'md' | 'lg' | 'full'>('md');
  // #endregion Signals

  // #region Methods
  public close(): void {
    this.isSidebarExpanded.set(false);
  }

  @HostListener('window:keydown.escape')
  public onEscapePress(): void {
    if (this.isSidebarExpanded()) this.close();
  }
  // #endregion Methods

}
