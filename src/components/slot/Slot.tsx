import { ReactNode, useEffect, useState } from "react"
import Challenge from "../challenge/Challenge"
import Cover from "../cover/Cover"
import './Slot.css'

interface SlotProps {
    id: string;
    coverText: string;
    challengeText: ReactNode;
}

export default function Slot({ id, coverText, challengeText }: SlotProps) {

    const [isChallengeVisible, setChallengeVisible] = useState<boolean>(() => {
        const cache = window.localStorage.getItem(id);
        return cache === "true";
    })

    useEffect(() => {
        window.localStorage.setItem(`${id}`, String(isChallengeVisible))
    }, [isChallengeVisible, id]);
    
    const hideCover = () => {
        setChallengeVisible(!isChallengeVisible);
    };

    return (
        <div className="slot-container" onClick={hideCover}>
            {!isChallengeVisible && <Cover text={coverText}/>}
            {isChallengeVisible && <Challenge tag={challengeText} />}
        </div>
    )
}