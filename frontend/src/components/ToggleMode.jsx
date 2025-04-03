import { Button, Stack, Switch } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemesContext } from "../theme/ThemesContextProvider";

const ToggleMode = () => {

  const { mode, toggleThemeMode } = useThemesContext();

  return (
    <Switch variant="contained" onClick={toggleThemeMode}>
      {mode === 'light' ? (
        <Stack direction='row' gap={2}>
          <LightMode />
          {mode}
        </Stack>
      ) : (
        <Stack direction='row' gap={2}>
          <DarkMode />
          {mode}
        </Stack>
      )}
    </Switch>
  )
}

export default ToggleMode;
