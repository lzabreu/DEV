import React from "react"
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { MailOutline, Home } from "@mui/icons-material"
import { useDrawerContext } from "../../contexts"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"

interface IDrawerProps {
  children: React.ReactNode
}

interface IListItemLinkProps {
  label: string
  icon: string
  to: string
  onClick: (() => void) | undefined
}
const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
  const navigate = useNavigate()

  const resolvedPath = useResolvedPath(to)
  const match = useMatch({path: resolvedPath.pathname, end: false})

  const handleClick = () => {
    navigate(to)
    if (onClick) onClick()
  }

  return (
    <ListItemButton selected={!!match} onClick={onClick}>
      <ListItemIcon>
        <Icon> 
          {icon}
        </Icon>

      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
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
              <ListItemLink 
                icon ="home"
                label="Pagina Inicial"
                to="/pagina-inicial"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
              <ListItemLink 
                icon ="mailOutline"
                label="Email"
                to="/mail"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
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

