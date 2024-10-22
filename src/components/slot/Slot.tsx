import { ReactNode, useEffect, useState } from "react"

interface SlotProps {
    id: string;
    coverText: string;
    challengeText: ReactNode;
}

export default function Slot({ id, coverText, challengeText }: SlotProps) {

    const [isChallengeVisible, setChallengeVisible] = useState<boolean>(
        () => {
            const cache = window.localStorage.getItem(id)
            return cache === "true" ? true : false
        })

    useEffect(() => {
        window.localStorage.setItem(`${id}`, String(isChallengeVisible))
    }, [isChallengeVisible, id])
    
    const hideCover = () => {
        if (isChallengeVisible) setChallengeVisible(false)
        else setChallengeVisible(true)
    }

    return (
        <>
            <div className="slot-container" onClick={hideCover}>
                {!isChallengeVisible && (
                    <div className="cover-container">
                        <h3>{coverText}</h3>
                    </div>
                )}
                {isChallengeVisible && (
                    <div className="challenge-container">
                        {challengeText}
                    </div>
                )}
            </div>
        </>
    )
}