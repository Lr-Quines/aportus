import { Component, inject } from '@angular/core';
import { LucideMoon, LucideSun } from '@lucide/angular';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { TooltipDirective } from '../../directives/tooltip/tooltip.directive';

@Component({
  selector: 'aportus-theme-toggle',
  imports: [
    TooltipDirective,
    LucideSun,
    LucideMoon
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {

  protected readonly themeService = inject(ThemeService);

}
