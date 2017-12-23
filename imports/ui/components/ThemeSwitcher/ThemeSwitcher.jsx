import React from 'react';

import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';

import { THEME } from '../../constants/themes.js';

const TempThemeSwitch = ({ themeName, onThemeSwitch }) => {
  const checked = (themeName === THEME.LIGHT);
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch checked={checked} onChange={onThemeSwitch} aria-label="ThemeSwitch" />
        }
        label={themeName}
      />
    </FormGroup>
  )
};

export default TempThemeSwitch;
