import React, { useState } from 'react';
import { useParams } from 'react-router';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Dashboard = () => {
    const { username } = useParams();
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className="body">
            <div >
            <Button onClick={toggleDrawer} className="drawer">Open Drawer</Button>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <List>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Page 2" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Page 3" />
                    </ListItem>
                </List>
            </Drawer>
            <div>Welcome, {username}</div>
        </div>
        </div>
        
    );
};

export default Dashboard;
