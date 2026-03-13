import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box } from '@mui/system'
import { ReactNode } from "react";
import { useAppDrawerContext } from "../../contexts";


interface AppMenuLateralProps {
  children: ReactNode;
}

export const AppMenuLateral: React.FC<AppMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useAppDrawerContext();

  return (
    <>
      <Drawer open={ isDrawerOpen } variant={smDown ? 'temporary' : 'permanent'} onClose={ toggleDrawerOpen }>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
            <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar
                sx={{ height: theme.spacing(12), width: theme.spacing(12) }} 
                src="https://i.pinimg.com/736x/83/54/43/8354437b68a4a2315a563b793c2d2d41.jpg"
             />
            </Box>
            <Divider />
            <Box flex={1}>
                <List component='nav'>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Página Inicial'/>
                    </ListItemButton>

                </List>

            </Box>
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)} >
        {children}
      </Box>
    </>
  );
};
