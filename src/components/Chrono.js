import React from 'react';
import { Chrono } from 'react-chrono';
import { withTheme } from '@xstyled/styled-components';

function CustomChrono(props) {
  const theme = {
    primary: props.theme.colors.chrono_primary,
    secondary: props.theme.colors.chrono_secondary,
    cardBgColor: props.theme.colors.chrono_bg_color,
    cardForeColor: props.theme.colors.chrono_fore_color,
    titleColor: props.theme.colors.chrono_title_color,
    titleColorActive: props.theme.colors.chrono_title_active_color,
  };

  const isBrowser = typeof window !== 'undefined';
  let mode = 'VERTICAL_ALTERNATING';

  if (isBrowser) {
    mode = window.innerWidth < 768 ? 'VERTICAL' : 'VERTICAL_ALTERNATING';
  }

  return (
    <Chrono
      hideControls
      useReadMore={false}
      items={props.items}
      cardHeight="100%"
      theme={theme}
      mode={mode}
    />
  );
}

export default withTheme(CustomChrono);
