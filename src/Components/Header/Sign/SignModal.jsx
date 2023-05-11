function SignModal({ setModal, setForgotModal }) {
    const modalclose = () => {
        setModal(false)
        setForgotModal(false)
    }
    return (
        <>
            <div className='sign-modal'>
                <p>Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices.</p>
                <div onClick={modalclose} className='modal-close'><button>Got it</button> </div>
            </div>

        </>

    )
}

export default SignModal


