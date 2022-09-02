import React from "react"
import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { Home, MailOutline } from "@mui/icons-material"
import { useDrawerContext } from "../../contexts"

interface IDrawerProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IDrawerProps> = ({ children }) => {

  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
         <Box width={theme.spacing(28)} display='flex' flexDirection='column' height='100%'>
          <Box width={theme.spacing(20)} display='inline-flex' alignItems='center' justifyContent='space-evenly' >

            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12), my: 4}}  
                    src='https://avatars.githubusercontent.com/u/178033?v=40px' />
        
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100%' marginLeft={smDown ? 0 : theme.spacing(28)}>
        { children }
      </Box>
    </>
  )
}

