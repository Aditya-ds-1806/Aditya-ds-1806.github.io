import React from 'react';
import {
  ThemeProvider,
  rpxTransformers,
  th,
  ColorModeProvider,
} from '@xstyled/styled-components';
import { transparentize } from 'polished';

const theme = {
  initialColorModeName: 'dark',
  defaultColorModeName: 'dark',
  fonts: {
    serif: 'Georgia, serif',
    'sans-serif':
      'Muli, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
    monospace:
      '"Source Code Pro", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace',
  },
  sizes: {
    'container-base': 784,
    'container-lg': 1200,
  },
  shadows: {
    glow: (p) => `${th.color('shadow')(p)} 0 0 0 ${th.space(1)(p)}`,
    soft: (p) => `0 ${th.px(2)(p)} ${th.px(6)(p)} 0 rgba(0, 0, 0, 0.1)`,
  },
  colors: {
    black: '#000',
    white: '#fff',

    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',

    danger: '#FF5252',

    lighter: th.color('white'),
    light100: '#DCDFF7',
    light300: '#ADB2DC',
    light400: '#6870AF',
    light500: '#343C7A',
    light700: '#2e3360',
    light800: '#282E5E',
    light900: '#22264A',
    light950: '#1f2347',
    'navbar-bg': (p) => transparentize(0.1, th.color('light900')(p)),
    shadow: (p) => transparentize(0.75, th.color('accent')(p)),
    'shadow-dark': (p) => transparentize(0.75, th.color('darker')(p)),
    darker: th.color('black'),
    accent: '#FFCC68',

    chrono_primary: '#FFCC68',
    chrono_secondary: '#22264A',
    chrono_bg_color: '#282E5E',
    chrono_fore_color: '#ADB2DC',
    chrono_title_color: '#ADB2DC',
    chrono_title_active_color: '#FFCC68',
    modes: {
      light: {
        lighter: '#100F4D',
        light950: '#F6F6F6',
        light900: '#EFEFF5',
        light800: '#F5F5F5',
        light700: '#E6E8F5',
        light500: '#D8D8E5',
        light400: '#4b547d',
        light300: '#535988',
        light200: '#445B8D',
        light100: '#363B65',
        darker: th.color('white'),
        accent: '#b54909',

        chrono_primary: '#B54909',
        chrono_secondary: '#EFEFF5',
        chrono_bg_color:
          'linear-gradient(340deg, var(--xstyled-colors-card-gradient-light,#2e3360) 0%, var(--xstyled-colors-card-gradient-dark,#1f2347) 100%)',
        chrono_fore_color: '#535988',
        chrono_title_color: '#535988',
        chrono_title_active_color: '#B54909',
      },
      'monochrome-light': {
        lighter: th.color('black'),
        light100: th.color('gray900'),
        light200: th.color('gray800'),
        light300: th.color('gray700'),
        light400: th.color('gray600'),
        light500: th.color('gray500'),
        light600: th.color('gray400'),
        light700: th.color('gray300'),
        light800: th.color('gray200'),
        light900: th.color('gray100'),
        light950: th.color('gray100'),
        darker: th.color('white'),
        accent: th.color('black'),
      },
      'monochrome-dark': {
        lighter: th.color('white'),
        light100: th.color('gray100'),
        light200: th.color('gray200'),
        light300: th.color('gray300'),
        light400: th.color('gray400'),
        light500: th.color('gray500'),
        light600: th.color('gray600'),
        light700: th.color('gray700'),
        light800: th.color('gray800'),
        light900: th.color('gray900'),
        light950: th.color('gray900'),
        darker: th.color('black'),
        accent: th.color('white'),
      },
    },

    bg: th.color('light900'),
    text: th.color('light300'),
    'card-border': th.color('light800'),
    'card-border-hover': th.color('light700'),
    'card-gradient-light': th.color('light700'),
    'card-gradient-dark': th.color('light950'),
  },
  transitions: {
    base: '.2s ease-in-out all',
  },
  transformers: {
    ...rpxTransformers,
  },
};

export function ThemeInitializer({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  );
}
