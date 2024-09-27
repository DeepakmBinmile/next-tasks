import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
const ITEM_HEIGHT = 68

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizOutlinedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{ 'aria-labelledby': 'long-button' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 5,
              width: 300,
              boxShadow: 'none',
              backgroundColor: '#F9FAFC',
              padding: '12px',
              gap: '8px',
            },
          },
        }}
      >
        <MenuItem sx={{ marginBottom: '8px', gap: '8px' }} onClick={handleClose}>
          <ClassOutlinedIcon /> Gallery
        </MenuItem>
        <MenuItem sx={{ marginBottom: '8px', gap: '8px' }} onClick={handleClose}>
          <AccountTreeOutlinedIcon /> Plan
        </MenuItem>
        <MenuItem sx={{ marginBottom: '8px', gap: '8px' }} onClick={handleClose}>
          <FolderOpenIcon /> Document
        </MenuItem>
      </Menu>
    </div>
  )
}
