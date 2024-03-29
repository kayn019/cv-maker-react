import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import './App.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



const drawerWidth = 360;

function PermanentDrawerLeft({user, setUser,edu, setEdu, work, setWork}) {
    const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleEdu = (e) => {
    setEdu((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleWork = (e) => {
    setWork((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Typography variant="h4" align='center' sx={{padding: 5}}>
        <HistoryEduIcon sx={{fontSize : 40}} />CV Maker
        </Typography>
        <Divider />


        <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Personal Information</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
        >
      <div>
        <TextField
          required
          id="name"
          label="Full Name"
          defaultValue="John"
           value={user.name}
          onChange={handleChange}
        />

        <TextField
          id="email"
          label="E-mail"
          type="email"
          onChange={handleChange}
        />
        <TextField
          id="phone"
          label="Phone"
          type="number"
          onChange={handleChange}
        />
        <TextField
          id="address"
          label="Address"
          defaultValue=""
          onChange={handleChange}
        />
      </div>
     
     
    </Box>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          
          id="school"
          label="School"
          defaultValue=""
           value={edu.school}
          onChange={handleEdu}
        />
        <TextField
          
          id="degree"
          label="Degree"
          defaultValue=""
           value={edu.degree}
          onChange={handleEdu}
        />
        <TextField
          
          id="startDate"
          label="Start Date"
          defaultValue=""
           value={edu.startDate}
          onChange={handleEdu}
        />
        <TextField
          
          id="endDate"
          label="End Date"
          defaultValue=""
           value={edu.endDate}
          onChange={handleEdu}
        />        
        <TextField
          
          id="location"
          label="Location"
          defaultValue=""
           value={edu.location}
          onChange={handleEdu}
        />     
      </div>
    </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Professional Work</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          
          id="name"
          label="Company Name"
          defaultValue=""
           value={work.name}
          onChange={handleWork}
        />
        <TextField
          
          id="position"
          label="Position Title"
          defaultValue=""
           value={work.position}
          onChange={handleWork}
        />
        <TextField
          
          id="startDate"
          label="Start Date"
          defaultValue=""
           value={work.startDate}
          onChange={handleWork}
        />
        <TextField
          
          id="endDate"
          label="End Date"
          defaultValue=""
           value={work.endDate}
          onChange={handleWork}
        />    
        <TextField
          id="location"
          label="Location"
          defaultValue=""
           value={work.location}
          onChange={handleWork}
        />      
   
      </div>
     
     
    </Box>
        </AccordionDetails>
      </Accordion>

    </div>

        <Divider />
        <List>
          {['Trash'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={(event) => {
                  console.log("reload clicked");
                  window.location.reload(false);
                  
                }}>
                <ListItemIcon>
                  {index % 2 === 0 ? <DeleteIcon /> : <MailIcon />}
                </ListItemIcon>
                
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
  );
}

function App() {
   const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [edu, setEdu] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: ""
  });
  const [work, setWork] = useState({
    name: "",
    position: "",
    startDate: "",
    endDate: "",
    location: ""
  });
  return (
    
      <div className='container'>
        
        <div className='leftSide'>
        <PermanentDrawerLeft  
        user={user} 
        setUser={setUser}
        edu={edu}
        setEdu={setEdu}
        work={work}
        setWork={setWork}/>
          <div className='general'>
            <div>Personal Info</div>
            <div> 
              <label htmlFor="">Full name</label>
              <input type="text"  id="name"/>
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>  
          </div>
          <div className='education'>Education</div>
          <div className='practical'>Work</div>
        </div>
        <div className='rightSide'>
          <div className="paper">
            <div className='top'>
             <div className='topInfo'>
              <Typography variant="h3" sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                {user.name}
              </Typography>
             </div>
             <div className="lowInfo">
              
              <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                {user.email}
              </Typography>
              <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                {user.phone}
              </Typography>
              <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                {user.address}
              </Typography>
             </div>
            </div>
            <div className='bot'>
              <div className='botEdu'>
              <Typography variant="h4" sx={{ color: "#000000", fontWeight: 900 }}>
                Education : 
              </Typography>
              <Typography variant="h5" sx={{ color: "#000000", fontWeight: 700 }}>
              {edu.degree},  {edu.school}
              </Typography>

              <Typography variant="h6" sx={{ color: "#000000" }}>
                {edu.startDate} ~ {edu.endDate}
              </Typography>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                {edu.location}
              </Typography>
              </div>
              
              <div className='botWork'>
              <Typography variant="h4" sx={{ color: "#000000", fontWeight: 900 }}>
                Professional Experience: 
              </Typography>
              <Typography variant="h5" sx={{ color: "#000000", fontWeight: 700 } }>
              {work.name}
              </Typography>
              <Typography variant="h6" sx={{ color: "#000000" }}>
              {work.position}
              </Typography>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                {work.startDate} ~ {work.endDate}
              </Typography>
              <Typography variant="h6" sx={{ color: "#000000" }}>
              {work.location}
              </Typography>
              </div>

              </div>
            </div>
          <div className='footer'>
            @kayn019
          </div>
          </div>
        </div>

    
  )
}

export default App
