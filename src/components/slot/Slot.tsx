import { useEffect, useState } from "react"
import Challenge from "../challenge/Challenge"
import Cover from "../cover/Cover"
import './Slot.css'

interface SlotProps {
    id: string;
    coverText: string;
    challengeText: string;
}

export default function Slot({ id, coverText, challengeText }: SlotProps) {

    const [isCoverVisible, setCoverVisible] = useState<boolean>(
        () => {
            const cache = window.localStorage.getItem(id)
            return cache === "true" ? true : false
        })

    useEffect(() => {
        window.localStorage.setItem(`${id}`, String(isCoverVisible))
    }, [isCoverVisible, id])
    
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