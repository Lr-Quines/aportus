import { Service } from '@angular/core';

@Service()
export class ThemeService {

  private readonly storageKey = 'themePreference';

  public isDarkTheme(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  public setDarkTheme(): void {
    document.documentElement.classList.add('dark');
    localStorage.setItem(this.storageKey, 'dark');
  }

  public setLightTheme(): void {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(this.storageKey, 'light');
  }

  public toggleTheme(): void {
    this.isDarkTheme()
      ? this.setLightTheme()
      : this.setDarkTheme();
  }

  public loadTheme(): void {
    const theme: string | null = localStorage.getItem(this.storageKey);

    theme === 'dark'
      ? this.setDarkTheme()
      : this.setLightTheme();
  }

}
