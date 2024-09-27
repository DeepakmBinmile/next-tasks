'use client'

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  OutlinedInput,
  Select,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import WifiTetheringRoundedIcon from '@mui/icons-material/WifiTetheringRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import { Logout } from '@/app/(auth)/server'
import { headerStyles } from './_styles/style'

const HeaderButton = ({
  icon,
  badgeContent,
  onClick,
}: {
  icon: JSX.Element
  badgeContent?: number
  onClick?: () => void
}) => (
  <Button sx={headerStyles.button} onClick={onClick}>
    {badgeContent ? (
      <Badge badgeContent={badgeContent} color="primary">
        {icon}
      </Badge>
    ) : (
      icon
    )}
  </Button>
)

const HeaderIcons = () => (
  <Stack direction="row" sx={headerStyles.iconStack}>
    <HeaderButton icon={<WifiTetheringRoundedIcon />} />
    <HeaderButton icon={<TranslateRoundedIcon />} />
    <HeaderButton icon={<NotificationsNoneRoundedIcon />} badgeContent={4} />
    <HeaderButton onClick={() => Logout()} icon={<ExitToAppRoundedIcon />} />
    <HeaderButton icon={<FullscreenRoundedIcon />} />
    <Stack sx={headerStyles.avatarStack}>
      <Button sx={headerStyles.button}>
        <Avatar sx={headerStyles.avatar}>S</Avatar>
      </Button>
      <HeaderButton icon={<SettingsRoundedIcon />} />
    </Stack>
  </Stack>
)
const DashboardHeaderComponent = ({ topPadding }: { topPadding: number }) => {
  return (
    <AppBar position="fixed" sx={{ ...headerStyles.appBar, height: topPadding }}>
      <Toolbar sx={{ ...headerStyles.toolbar, height: topPadding }}>
        <Box sx={headerStyles.logoContainer}>
          <Typography variant="h4" noWrap component="div" sx={headerStyles.logo}>
            LOGO
          </Typography>
          <HeaderButton icon={<MenuIcon />} />
        </Box>
        <Stack
          sx={headerStyles.subStack}
        >
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            sx={headerStyles.select}
            input={<OutlinedInput />}
          >
            {/* Add MenuItems here */}
          </Select>
          <HeaderIcons />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default DashboardHeaderComponent
