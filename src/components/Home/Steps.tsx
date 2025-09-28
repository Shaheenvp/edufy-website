'use client';

import { BookOnline, CalendarMonthOutlined, MonitorOutlined, Person } from '@mui/icons-material';
import React from 'react';
import Headers from '../Headers';
import colors from './../../helpers/colors';
import ImageDisplay from '../ImageDisplay';

const Steps = () => {
  const color = colors();
  const features = [
    {
      icon: <Person className="w-8 h-8 text-white" aria-label="Initial Consultation" />,
      title: "Initial Consultation",
      description: "Free assessment of your academic background and career goals to determine the best medical program for you."
    },
    {
      icon: <BookOnline className="w-8 h-8 text-white" aria-label="Application Process" />,
      title: "Application Process",
      description: "Complete assistance with university applications, document preparation, and submission to top medical universities."
    },
    {
      icon: <CalendarMonthOutlined className="w-8 h-8 text-white" aria-label="Visa & Documentation" />,
      title: "Visa & Documentation",
      description: "Expert guidance through visa applications, medical examinations, and all required documentation for your chosen country."
    },
    {
      icon: <MonitorOutlined className="w-8 h-8 text-white" aria-label="Pre-Departure Support" />,
      title: "Pre-Departure Support",
      description: "Comprehensive preparation including accommodation booking, airport pickup, and orientation in your new country."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 2xl:px-[10em] md:px-[3em] px-[1em] h-full">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-12 gap-5 items-center">
          {/* Left: Person image area */}
          <div>
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-3 md:p-2 overflow-hidden">
              <ImageDisplay
                src="/Student.jpeg"
                alt="Smiling student using a laptop"
                className="w-full h-full md:h-[40em] rounded-2xl object-cover"
              />
            </div>
          </div>
          {/* Right: Main steps/features */}
          <div>
            <Headers text="Our Student Onboarding Process" className="text-center md:text-start" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-gray-200 rounded-xl md:p-3 p-6 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center 2xl:gap-[1em] gap-2">
                    <div
                      style={{ backgroundColor: color.headerText }}
                      className="rounded-2xl p-4 text-white w-fit mb-4 transition-colors duration-300"
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;