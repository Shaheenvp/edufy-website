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
import { motion, AnimatePresence } from 'framer-motion';

export default function DrawerUi() {
    const [open, setOpen] = useState(false);
    const [coursesOpen, setCoursesOpen] = useState(false);
    const [destinationsOpen, setDestinationsOpen] = useState(false);
    const [height, setHeight] = useState(70);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const color = colors();

    const DrawerList = (
        <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-80 h-screen bg-gradient-to-br from-[#002448] to-[#1a365d] relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-[#FF9257] rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-16 w-16 h-16 bg-[#EC651B] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-16 w-12 h-12 bg-[#FF9257] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Header */}
            <div className="relative z-10 p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-xl font-bold">Menu</h2>
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleDrawer(false)}
                        className="w-10 h-10 bg-[#FF9257] rounded-full flex items-center justify-center hover:bg-[#EC651B] transition-colors duration-300"
                    >
                        <CloseIcon className="text-white" />
                    </motion.button>
                </div>
            </div>

            {/* Navigation Items */}
            <div className="relative z-10 p-6 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Link
                        href="#course"
                        onClick={() => setOpen(false)}
                        className="block w-full p-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#FF9257] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">📚</span>
                            </div>
                            <span className="font-medium">Courses</span>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="#about"
                        onClick={() => setOpen(false)}
                        className="block w-full p-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#EC651B] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">ℹ️</span>
                            </div>
                            <span className="font-medium">About Us</span>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4"
                >
                    <ButtonDisplay
                        text="Contact Us"
                        px="px-6 py-3 w-full"
                        onclick="Contact Us"
                    />
                </motion.div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-white/60 text-sm"
                >
                    <p>© 2024 Edufy</p>
                    <p className="mt-1">Your Gateway to Global Education</p>
                </motion.div>
            </div>
        </motion.div>
    );

    return (
        <div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDrawer(true)}
                className="w-10 h-10 bg-[#002448] rounded-lg flex items-center justify-center hover:bg-[#1a365d] transition-colors duration-300 shadow-lg"
            >
                <motion.div
                    animate={open ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <MenuIcon style={{ color: color.primaryColor }} />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {open && (
                    <Drawer
                        anchor="right"
                        open={open}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                                backgroundColor: 'transparent',
                                boxShadow: 'none'
                            }
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={toggleDrawer(false)}
                        />
                        <motion.div
                            initial={{ x: 320 }}
                            animate={{ x: 0 }}
                            exit={{ x: 320 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            {DrawerList}
                        </motion.div>
                    </Drawer>
                )}
            </AnimatePresence>
        </div>
    );
}