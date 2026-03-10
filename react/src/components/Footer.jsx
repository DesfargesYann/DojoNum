import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuizIcon from '@mui/icons-material/Quiz';
import Paper from '@mui/material/Paper';



export default function Footer()
{
    return (
        <>
            <Paper
            sx= {{position: "fixed",bottom: 0, left: 0, right: 0}}
            elevation={3}> 
            <Navbar/>
            </ Paper>
        </>
    )
}
export function Navbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
            <Link to={"/"}>
                <BottomNavigationAction label="Quiz" icon={<QuizIcon />}/>
            </Link>
            <Link to={"/PageProfil/"}>
                <BottomNavigationAction label="Profil" icon={<AccountBoxIcon />} />
            </Link>
        
      </BottomNavigation>
    </Box>
  );
}

