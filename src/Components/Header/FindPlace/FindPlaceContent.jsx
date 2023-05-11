import FindFilter from './FindFilter'
import PlaceContent from './PlaceContent'

function FindPlaceContent({ placeHide, setPlaceHide }) {

    const closePlaces = () => {
        if (placeHide === true) {
            setPlaceHide(false)
        }
    }


    return (
        <div onClick={closePlaces} className='find-content containerr'>
            <FindFilter placeHide={placeHide} setPlaceHide={setPlaceHide} />
            <PlaceContent />
        </div>
    )
}

export default FindPlaceContent