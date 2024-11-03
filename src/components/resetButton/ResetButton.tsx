import './ResetButton.css'

export default function ResetButton() {

    const reset = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <button type='button' className='resetbutton-button' onClick={reset}>
            RESET
        </button>
    )
}