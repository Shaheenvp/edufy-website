import colors from "@/helpers/colors"
import ImageDisplay from './../ImageDisplay';
import ButtonDisplay from './../ButtonDisplay';


export default function OpportunityCard() {
    const color = colors()
    return (
        <div className="md:px-[10em] px-[1em] md:mt-[10em] md:mb-[2em] my-[1em] relative " >
            <div className="absolute md:block hidden top-[-11.5em] overflow-hidden left-[15em] ">
                <ImageDisplay src="/Opportunity-Image.png" alt={""} width={500} />
            </div>
            <div style={{ backgroundColor: color.secondaryColor }} className="md:px-[5em] px-[1.5em] flex justify-center md:py-[5em] py-[1.5em] md:rounded-[4em] rounded-[2em] ">
                <div className="w-[25%] hidden md:block "></div>
                <div className="text-white">
                    <h5 className="md:text-[30pt] text-[20pt] leading-[1.3em] font-[800] ">Unlock Great Opportunities</h5>
                    <p className="md:text-[16pt] text-[12pt] mt-[0.5em] md:mt-0 ">Let your journey begins with us ...</p>
                    <div className="md:mt-[1.5em] mt-[1em]">
                        <ButtonDisplay bg={false} text="Make a Seat Yours Today ➜" onclick="" />
                    </div>
                </div>
            </div>
        </div>
    )
}