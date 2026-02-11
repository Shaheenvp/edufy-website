'use client';

import colors from "@/helpers/colors";
import ImageDisplay from './../ImageDisplay';
import ButtonDisplay from './../ButtonDisplay';
import { useRef } from "react";
import { useGsapReveal } from "@/helpers/useGsapReveal";

export default function OpportunityCard() {
  const color = colors();
  const sectionRef = useRef<HTMLDivElement>(null);
  useGsapReveal(sectionRef as unknown as React.RefObject<HTMLElement>, { selector: "[data-reveal]", stagger: 0.08 });

  // Handler for the call-to-action button
  const handleSeatClick = () => {
    // TODO: Replace with your actual seat booking or navigation logic
    console.log("CTA: Make a Seat Yours Today clicked");
  };

  return (
    <div ref={sectionRef} className="2xl:px-[10em] px-[1em] xl:mt-[10em] md:mb-[2em] my-[1em] relative">
      {/* Decorative Opportunity Image for desktop */}
      <div data-reveal className="absolute md:block hidden xl:top-[-10.25em] top-[-2.5em] overflow-hidden 2xl:left-[15em] z-10">
        <ImageDisplay
          src="/Opportunity-Image.png"
          alt="Excited students celebrating opportunity"
          className="xl:w-[30em] w-[22em]"
        />
      </div>

      {/* Main Card Content */}
      <div
        style={{ backgroundColor: color.secondaryColor }}
        data-reveal
        className="2xl:px-[5em] px-[1.5em] flex justify-center md:py-[5em] py-[1.5em] md:rounded-[4em] rounded-[2em]"
      >
        {/* Spacer for image overlay on desktop */}
        <div className="w-[25%] hidden md:block"></div>

        <div className="text-white">
          <h5 className="md:text-[30pt] text-[20pt] leading-[1.3em] font-[800]">
            Unlock Great Opportunities
          </h5>
          <p className="md:text-[16pt] text-[12pt] mt-[0.5em] md:mt-0">
            Let your journey begin with us ...
          </p>
          <div className="md:mt-[1.5em] mt-[1em]">
            <ButtonDisplay
              bg={false}
              text="Make a Seat Yours Today ➜"
              onclick="{handleSeatClick}"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
