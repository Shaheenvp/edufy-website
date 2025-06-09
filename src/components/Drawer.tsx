'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import Link from 'next/link';
import colors from './../helpers/colors';
import ButtonDisplay from './ButtonDisplay';

export default function DrawerUi() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [height, setHeight] = useState(70);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleCoursesToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (coursesOpen) setHeight(height-8);
    else setHeight(height+8);
    setCoursesOpen(!coursesOpen);
  };
  
  const handleDestinationsToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (destinationsOpen) setHeight(height-8);
    else setHeight(height+8);
    setDestinationsOpen(!destinationsOpen);
  };
  
  const color = colors();

  const courses = [
    { name: 'Business And Management', href: '' },
    { name: 'Hospitality And Tourism', href: '' },
    { name: 'Engineering', href: '' },
    { name: 'Accounting And Finance', href: '' }
  ];

  const destinations = [
    { name: 'United Kingdom', href: '' },
    { name: 'Ireland', href: '' },
    { name: 'Germany', href: '' },
    { name: 'Canada', href: '' }
  ];

  const DrawerList = (
    <Box sx={{ width: 300, height: height + 30 + 'dvh', backgroundColor: color.headerText }} className="font-[600]" role="presentation">
      <List sx={{ padding: "20px", height: '10dvh'}}>
        <div style={{backgroundColor: color.secondaryColor}} className="w-1/5 items-center flex justify-center p-2 rounded-full" onClick={toggleDrawer(false)}>
          <CloseIcon className="dark:text-white " fontSize="large" />
        </div>
      </List>
      
      <List sx={{ padding: "20px", height: height + 'dvh', overflow: 'auto' }}>
        <ListItem className="mt-1" disablePadding>
          <div className="w-full">
            <button
              onClick={handleCoursesToggle}
              className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-full mt-10 flex items-center justify-between"
            >
              Courses
              {coursesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
            <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
              <div className="mt-2">
                {courses.map((course, index) => (
                  <Link
                    key={index}
                    href={course.href}
                    className="block bg-[#f5f5f5] text-[#333] py-[0.6em] px-[1em] text-base rounded-full font-[family-name:var(--font-montserrat)] w-full mb-2 hover:bg-[#e0e0e0] transition-colors"
                    onClick={toggleDrawer(false)}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </Collapse>
          </div>
        </ListItem>
        <ListItem className="mt-[-10px]" disablePadding>
          <div className="w-full">
            <button
              onClick={handleDestinationsToggle}
              className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-full mt-10 flex items-center justify-between"
            >
              Destinations
              {destinationsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
            <Collapse in={destinationsOpen} timeout="auto" unmountOnExit>
              <div className="mt-2">
                {destinations.map((destination, index) => (
                  <Link
                    key={index}
                    href={destination.href}
                    className="block bg-[#f5f5f5] text-[#333] py-[0.6em] px-[1em] text-base rounded-full font-[family-name:var(--font-montserrat)] w-full mb-2 hover:bg-[#e0e0e0] transition-colors"
                    onClick={toggleDrawer(false)}
                  >
                    {destination.name}
                  </Link>
                ))}
              </div>
            </Collapse>
          </div>
        </ListItem>

        <ListItem className="mt-[-10px]" disablePadding>
          <Link href="/about" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10 block">
            About Us
          </Link>
        </ListItem>
      </List>
      
      <List sx={{ padding: "20px" }}>
        <ListItem className="flex justify-center" disablePadding>
          <ButtonDisplay text="Enquire" px="px-[5em]" py="py-[1em]" onclick='' />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: color.primaryColor }} />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
