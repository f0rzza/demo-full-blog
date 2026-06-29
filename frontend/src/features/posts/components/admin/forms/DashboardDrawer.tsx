import { IconButton, SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, type ReactNode } from 'react';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
type Props = { anchor?: Anchor; children: ReactNode };

export function DashboardDrawer({ anchor = 'left', children }: Props) {
  const [isDisplay, setIsDisplay] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDisplay(open);
  };

  return (
    <>
      <IconButton
        aria-label="open dashboard drawer"
        onClick={toggleDrawer(true)}
        edge="start"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          bgcolor: 'success.dark',
          color: 'white',
          width: 56,
          height: 56,
          borderRadius: '50%',
          boxShadow: 4,
          '&:hover': {
            bgcolor: 'success.dark',
          },
          display: isDisplay ? 'none' : 'flex',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor={anchor}
        open={isDisplay}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableScrollLock
      >
        <div onClick={toggleDrawer(false)}>{children}</div>
      </SwipeableDrawer>
    </>
  );
}
