export default function ResetButton() {

    const reset = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <>
            <button type='button' className='resetButton-button' onClick={reset}>
                RESET
            </button>
        </>
    )
}