import { computed, Service, signal } from '@angular/core';
import { STORAGE_KEYS } from '../../consts/storage-keys.const';
import { ApplicationTheme } from '../../enums/application-theme.enum';

@Service()
export class ThemeService {

  // #region Signals
  private readonly _currentTheme = signal<ApplicationTheme>(ApplicationTheme.Light);
  public readonly currentTheme = this._currentTheme.asReadonly();
  public readonly isDark = computed<boolean>(() => this._currentTheme() === ApplicationTheme.Dark);
  // #endregion Signals

  // #region Methods
  private setDarkTheme(): void {
    document.documentElement.classList.add('dark');
    localStorage.setItem(STORAGE_KEYS.THEME_PREFERENCE, 'dark');
    this._currentTheme.set(ApplicationTheme.Dark);
  }

  private setLightTheme(): void {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(STORAGE_KEYS.THEME_PREFERENCE, 'light');
    this._currentTheme.set(ApplicationTheme.Light);
  }

  public toggleTheme(): void {
    this.isDark()
      ? this.setLightTheme()
      : this.setDarkTheme();
  }

  public loadTheme(): void {
    const theme: string | null = localStorage.getItem(STORAGE_KEYS.THEME_PREFERENCE);

    if (theme) {
      theme === 'dark'
        ? this.setDarkTheme()
        : this.setLightTheme();

      return;
    }

    // sem preferência salva — usa a do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    prefersDark
      ? this.setDarkTheme()
      : this.setLightTheme();
  }
  // #endregion Methods

}
