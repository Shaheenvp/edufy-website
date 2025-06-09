import colors from './../../helpers/colors';
import ImageDisplay from './../ImageDisplay';
import Image from 'next/image';
import ButtonDisplay from './../ButtonDisplay';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function NavBar() {
    const color = colors()
    return (
        <div className="fixed top-0 left-0 w-full h-[12dvh] bg-white z-50 shadow-sm">
            <div className="flex justify-between items-center p-5 md:px-[15em]">
                <ImageDisplay src="/Edufy-Icon.png" alt="Edufy Icon" className='w-[120px] md:w-[150px] ' />
                <div className="flex items-center gap-10">
                    <InstagramIcon sx={{color: color.secondaryColor}} fontSize="large" />
                    <YouTubeIcon sx={{color: color.secondaryColor}} fontSize="large" />
                    <LinkedInIcon sx={{color: color.secondaryColor}} fontSize="large" />
                    <FacebookIcon sx={{color: color.secondaryColor}} fontSize="large" />
                    <ButtonDisplay text="Contact Us ➜" onclick="Contact Us" />
                </div>
            </div>
        </div>
    )
}