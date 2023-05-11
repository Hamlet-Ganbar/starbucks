function ForgotModal({setForgotModal,setModal}) {
    const modalclosen=()=>{
        setForgotModal(false)
        setModal(false)
    }
    return (
        <>
            <div className='sign-modal-forgot'>
                <p>You can now use your email instead of a username.</p>
                <div onClick={modalclosen} className='modal-close'><button>Got it</button> </div>
            </div>
        </>
    )
}
export default ForgotModal