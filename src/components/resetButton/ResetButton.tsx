import Slot from '../slot/Slot'
import './ResetButton.css'

export default function ResetButton() {

    const reset = () => {

    }

    return (
        <>
            <button type='button'
            className='resetButton-button'
            onClick={reset}>
                RESET
            </button>
        </>
    )
}