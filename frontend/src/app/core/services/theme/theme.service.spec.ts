import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enable dark theme and persist in localStorage', () => {
    const setItemSpy = vi.spyOn(localStorage, 'setItem');

    service.setDarkTheme();

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(setItemSpy).toHaveBeenCalledWith('themePreference', 'dark');
  });

  it('should enable light theme and persist in localStorage', () => {
    document.documentElement.classList.add('dark');

    const setItemSpy = vi.spyOn(localStorage, 'setItem');

    service.setLightTheme();

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(setItemSpy).toHaveBeenCalledWith('themePreference', 'light');
  });

  it('should toggle from light to dark', () => {
    document.documentElement.classList.remove('dark');

    const darkSpy = vi.spyOn(service, 'setDarkTheme');
    const lightSpy = vi.spyOn(service, 'setLightTheme');

    service.toggleTheme();

    expect(darkSpy).toHaveBeenCalled();
    expect(lightSpy).not.toHaveBeenCalled();
  });

  it('should toggle from dark to light', () => {
    document.documentElement.classList.add('dark');

    const darkSpy = vi.spyOn(service, 'setDarkTheme');
    const lightSpy = vi.spyOn(service, 'setLightTheme');

    service.toggleTheme();

    expect(lightSpy).toHaveBeenCalled();
    expect(darkSpy).not.toHaveBeenCalled();
  });

  it('should load dark theme from localStorage', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue('dark');

    const darkSpy = vi.spyOn(service, 'setDarkTheme');
    const lightSpy = vi.spyOn(service, 'setLightTheme');

    service.loadTheme();

    expect(darkSpy).toHaveBeenCalled();
    expect(lightSpy).not.toHaveBeenCalled();
  });

  it('should load light theme when localStorage is not dark', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue('light');

    const darkSpy = vi.spyOn(service, 'setDarkTheme');
    const lightSpy = vi.spyOn(service, 'setLightTheme');

    service.loadTheme();

    expect(lightSpy).toHaveBeenCalled();
    expect(darkSpy).not.toHaveBeenCalled();
  });

  it('should return true when dark class is present', () => {
    document.documentElement.classList.add('dark');

    expect(service.isDarkTheme()).toBe(true);
  });

  it('should return false when dark class is absent', () => {
    document.documentElement.classList.remove('dark');

    expect(service.isDarkTheme()).toBe(false);
  });
});
