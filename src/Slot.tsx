import { useState } from "react"
import Challenge from "./Challenge"
import Cover from "./Cover"

interface SlotProps {
    coverText: string;
    challengeText: string;
}

export default function Slot({ coverText, challengeText }: SlotProps) {

    const [isCoverVisible, setCoverVisible] = useState(true)

    const hideCover = () => {
        if (isCoverVisible) setCoverVisible(false)
        else setCoverVisible(true)
    }
    

    return (
        <>
            {/* Calls hideCover when slot is clicked, and then changes status of isCoverVisible to false */}
            <div className="slot-container" onClick={hideCover}>
                {isCoverVisible && <Cover text={coverText}/>}
                {!isCoverVisible && <Challenge text={challengeText}/>}
            </div>
        </>
    )
}