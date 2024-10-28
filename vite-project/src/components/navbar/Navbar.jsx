import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
    Collapse,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai';
import myContext from "../../context/data/myContext";

export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    const context = useContext(myContext);
    const { mode, toggleMode } = context;

    // All NavList 
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            {['Home', 'Blogs', 'Admin Login'].map((item, index) => (
                <Typography
                    key={index}
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-semibold transition-all hover:text-pink-500 hover:underline"
                    style={{ color: mode === 'dark' ? '#FFD700' : '#2C3E50', fontFamily: 'Poppins, sans-serif' }}
                >
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="flex items-center">
                        {item}
                    </Link>
                </Typography>
            ))}
        </ul>
    );

    return (
        <>
            {/* Navbar  */}
            <Navbar
                className="sticky top-0 z-20 h-max max-w-full border-none rounded-none py-4 px-6 lg:px-12 shadow-lg transition-all duration-300"
                style={{ background: mode === 'dark' ? '#1F1B24' : '#F3E5AB' }}>

                {/* Desktop View  */}
                <div className="flex items-center justify-between">
                    {/* Home Page Link  */}
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-3xl font-bold flex gap-3 items-center"
                            style={{ color: mode === 'dark' ? '#FFD700' : '#2C3E50', fontFamily: 'Great Vibes, cursive' }}
                        >
                            {/* Logo Image  */}
                            <img
                                className='w-12 h-12'
                                src='https://cdn-icons-png.flaticon.com/128/3685/3685253.png'
                                alt="logo"
                            />
                            {/* Logo Text  */}
                            <span>
                                QUICKBLOG
                            </span>
                        </Typography>
                    </Link>

                    {/* All Items  */}
                    <div className="flex items-center gap-6">
                        {/* Navlist  */}
                        <div className="hidden lg:block">
                            {navList}
                        </div>

                        {/* Search Icon */}
                        <div className="cursor-pointer transition-all hover:scale-110">
                            <AiOutlineSearch style={{ color: mode === 'dark' ? 'white' : 'black', fontSize: '24px' }} />
                        </div>

                        {/* Share Icon */}
                        <div className="hidden lg:block cursor-pointer transition-all hover:scale-110">
                            <AiOutlineShareAlt style={{ color: mode === 'dark' ? 'white' : 'black', fontSize: '24px' }} />
                        </div>

                        {/* Admin Profile Pic */}
                        <div className="cursor-pointer transition-all hover:scale-110">
                            <Link to={'/dashboard'}>
                                <Avatar
                                    src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                                    alt="avatar"
                                    withBorder={true}
                                    className="p-0.5 w-12 h-12"
                                    style={{
                                        border: mode === 'dark' ? '2px solid #FFD700' : '2px solid #2C3E50'
                                    }}
                                />
                            </Link>
                        </div>

                        {/* Dark And Light Button */}
                        <div className="flex justify-center items-center cursor-pointer transition-all hover:scale-110">
                            <IconButton onClick={toggleMode} className="rounded-full" style={{ background: mode === 'light' ? '#F9C74F' : '#F3722C', color: mode === 'dark' ? 'white' : '#1F1B24' }}>
                                {mode === 'light'
                                    ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                    )
                                    : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    )
                                }
                            </IconButton>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden">
                            <IconButton
                                className="ml-auto h-10 w-10 text-inherit rounded-lg flex items-center justify-center"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                                style={{ background: mode === 'light' ? '#F9C74F' : '#F3722C', color: mode === 'dark' ? 'white' : '#1F1B24' }}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <Collapse open={openNav} className="lg:hidden">
                    {/* NavList  */}
                    {navList}
                </Collapse>
            </Navbar>
        </>
    );
}
