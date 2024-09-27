'use client'

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  ButtonBaseProps,
  ButtonProps,
  ButtonTypeMap,
  ExtendButtonBase,
  OutlinedInput,
  Select,
  Stack,
  SxProps,
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
import { Logout } from '@/app/(site)/server'
const headerStyles = {
  appBar: {
    zIndex: 1000,
  },
  toolbar: {
    padding: 0,
  },
  logoContainer: {
    width: 340,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#000000',
    fontWeight: 500,
  },
  button: {
    color: '#6290cb',
    backgroundColor: '#Dae7f9',
    '&:hover': {
      backgroundColor: '#Dae7f9',
    },
    minWidth: 0,
    margin: 0,
    borderRadius: 2,
    padding: 1,
  },
  select: {
    width: 400,
    marginLeft: 4,
    height: 40,
    borderRadius: 2,
  },
  iconStack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 1,
  },
  avatarStack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    marginRight: 2,
    padding: 1,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    height: 28,
    width: 28,
    color: '#6290cb',
    backgroundColor: '#Dae7f9',
  },
}
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
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
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
