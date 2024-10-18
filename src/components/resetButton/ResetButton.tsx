import './ResetButton.css'

export default function ResetButton() {

    const reset = () => {
        window.localStorage.clear()
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