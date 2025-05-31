import colors from "@/helpers/colors"
import ImageDisplay from './../ImageDisplay';
import ButtonDisplay from './../ButtonDisplay';


export default function OpportunityCard() {
    const color = colors()
    return (
        <div className="px-[10em] my-[10em] relative " >
            <div className="absolute top-[-11em] overflow-hidden left-[15em] ">
                <ImageDisplay src="/Opportunity-Image.png" alt={""} width={500} />
            </div>
            <div style={{ backgroundColor: color.secondaryColor }} className="px-[5em] flex justify-center py-[5em] rounded-[4em] ">
                <div className="w-[25%] "></div>
                <div className="text-white">
                    <h5 className="text-[30pt] font-[800] ">Unlock Great Opportunities</h5>
                    <p className="text-[16pt] ">Let your journey begins with us ...</p>
                    <div className="mt-[1.5em] ">
                        <ButtonDisplay bg={false} text="Make a Seat Yours Today ➜" onclick="" />
                    </div>
                </div>
            </div>
        </div>
    )
}