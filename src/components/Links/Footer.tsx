'use client';

import Link from 'next/link';
import colors from './../../helpers/colors';
import ImageDisplay from '../ImageDisplay';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook } from '@mui/icons-material';

export default function Footer() {
  const color = colors();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        style={{ backgroundColor: '#adb5bd' }}
        className="font-[family-name:var(--font-montserrat)] 2xl:px-[10em] md:px-[5em] px-[3em] justify-between flex md:flex-row flex-col"
      >
        {/* Logo and Socials */}
        <div className="flex flex-col items-center justify-center md:gap-[1em] gap-[0.5em] py-[2em] md:py-0">
          <Link href="/" aria-label="Edufy Home" className="text-xl flex flex-row items-center justify-center">
            <ImageDisplay
              src="/Edufy-Icon.png"
              className="md:block max-w-lg object-contain"
              alt="Edufy Logo"
              width={180}
            />
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:text-orange-500"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-black hover:text-blue-600"
            >
              <Facebook fontSize="large" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-row justify-between py-[1.5em] md:py-[4em]">
          <div className="flex flex-col gap-y-[0.5em] mt-2 min-w-[200px]">
            <h3 className="md:text-[17pt] text-[13pt] font-[700]">Contact Us</h3>
            <div>
              <p className="text-[11.5pt] md:text-[14pt] font-semibold">Address:</p>
              <p className="text-[10.5pt] text-gray-700 md:text-[14pt]">
                {/* Replace with actual address */}
                123 Edufy Street, City, Country
              </p>
            </div>
            <div>
              <p className="text-[11.5pt] md:text-[14pt] font-semibold">Phone:</p>
              <p className="text-[10.5pt] text-gray-700 md:text-[14pt]">+919999999999</p>
            </div>
            <div>
              <p className="text-[11.5pt] md:text-[14pt] font-semibold">Email:</p>
              <p className="text-[10.5pt] text-gray-700 md:text-[14pt]">help@edufy.in</p>
            </div>
          </div>

          {/* Quick Links (Mobile) */}
          <div className="flex flex-col md:hidden gap-y-[0.5em] ml-8">
            <h3 className="md:text-[17pt] text-[13pt] font-[700]">Quick Links</h3>
            <Link href="#course" className="text-[11.5pt] md:text-[14pt] my-2 hover:underline focus:underline">
              Courses
            </Link>
            <Link href="#about" className="text-[11.5pt] md:text-[14pt] hover:underline focus:underline">
              About Us
            </Link>
          </div>
        </div>

        {/* Quick Links (Desktop) */}
        <div className="md:flex flex-col hidden py-[1.5em] md:py-[4em] min-w-[150px]">
          <h3 className="md:text-[17pt] text-[13pt] font-[700] mb-3">Quick Links</h3>
          <Link href="#course" className="text-[11.5pt] md:text-[14pt] mb-1 hover:underline focus:underline">
            Courses
          </Link>
          <Link href="#about" className="text-[11.5pt] md:text-[14pt] hover:underline focus:underline">
            About Us
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">©{currentYear} Edufy Pvt Ltd. All rights reserved.</p>
          <p className="text-xs mt-2">
            Follow us on
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
              aria-label="Facebook"
            >
              Facebook
            </a>
            ,
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
              aria-label="Instagram"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}