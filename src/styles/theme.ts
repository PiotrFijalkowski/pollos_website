export const lightTheme = {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#1a1a1a',
    textSecondary: '#4a4a4a',
    accent: '#FFD700',
    border: 'rgba(0, 0, 0, 0.1)',
    grid: 'rgba(0, 0, 0, 0.05)',
    heroOverlay: 'rgba(255, 255, 255, 0.8)',
    navBackground: 'rgba(255, 255, 255, 0.95)',
    navText: '#1a1a1a',
  },
};

export const darkTheme = {
  colors: {
    background: '#0a0a0a',
    surface: '#141414',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    accent: '#FFD700',
    border: 'rgba(255, 255, 255, 0.05)',
    grid: 'rgba(255, 255, 255, 0.03)',
    heroOverlay: 'rgba(0, 0, 0, 0.7)',
    navBackground: '#141414',
    navText: '#ffffff',
  },
};

export type ThemeType = typeof lightTheme;
