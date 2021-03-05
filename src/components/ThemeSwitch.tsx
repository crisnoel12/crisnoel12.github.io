import { Switch, Tooltip } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import React from 'react';
import { MODE } from './Layouts/MainContainer';
import { capitalize } from './Utils/index';

export default function ThemeSwitch({ themeMode, handleChangeMode }) {
  return (
    <Tooltip
      title={`Switch to ${themeMode === MODE.DARK ? capitalize(MODE.LIGHT) : capitalize(MODE.DARK)} Mode`}
    >
      <Switch
        color={"secondary"}
        icon={<NightsStayIcon />}
        checkedIcon={<Brightness7Icon htmlColor={"darkgoldenrod"} />} 
        checked={themeMode === MODE.LIGHT}
        onChange={() => handleChangeMode(themeMode === MODE.DARK ? MODE.LIGHT : MODE.DARK)}
      />
    </Tooltip>
  )
}
