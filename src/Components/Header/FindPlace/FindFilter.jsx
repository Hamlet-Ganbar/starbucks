import { useContext, useState } from "react"
import { MainContext } from "../../Context/Context"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"

function FindFilter({placeHide, setPlaceHide}) {
    const [store, setStore] = useState(false)
    const {storeHandle} = useContext(MainContext)
    const {val}=useContext(MainContext)
    const {places} = useContext(MainContext)
    const {setVal}=useContext(MainContext)


    const findPlace = (e) => {
        setVal(e.target.value)
        setPlaceHide(true)
        if (places.find(item => item.toLowerCase() === e.target.value.toLowerCase())) {
            setStore(true)
        }
        else {
            setStore(false)
        }
    }
    const findPlaces = () => {
        setPlaceHide(true)
    }
    const placeHandle = (e) => {
        setVal(e.target.innerHTML)
        if (placeHide === false) { setPlaceHide(true) }
        else { setPlaceHide(false) }
        if(places.find(item => item)){
            setStore(true)
        }
        else{
            setStore(false)
        }
    }
    return (
        <div className='content-filter'>
            <div className='find-search'>
                <input onClick={findPlaces} value={val} onChange={findPlace} type="text" placeholder='Find a store' />
                <ul className={placeHide ? 'places' : 'places place-hide'}>
                    {places.map(item => <li key={nanoid()} onClick={placeHandle}>{item}</li>)}
                </ul>
                <span>
                    <svg aria-hidden="true" className="valign-middle icon___35gdr" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path d="M15.447 15.043c-1.36 1.435-3.246 2.263-5.27 2.263-3.994 0-7.23-3.216-7.23-7.18 0-3.965 3.236-7.18 7.23-7.18 3.996 0 7.233 3.215 7.233 7.18 0 .47-.046.935-.136 1.39-.084.426.193.84.62.924.425.084.838-.193.922-.62.11-.555.166-1.122.166-1.695 0-4.835-3.943-8.752-8.804-8.752-4.86 0-8.804 3.918-8.804 8.752 0 4.835 3.943 8.753 8.804 8.753 2.46 0 4.758-1.01 6.41-2.754.3-.315.285-.813-.03-1.11-.315-.3-.812-.286-1.11.03zm1.307 2.725l4.506 4.477c.308.306.806.304 1.112-.004.306-.305.304-.802-.004-1.11l-4.506-4.476c-.308-.305-.805-.304-1.11.004-.307.308-.306.806.002 1.112z"></path></svg>
                </span>
            </div>
            <button className='filter-btn'>Filter</button>
            <button onClick={storeHandle} className={store ? 'confirm-store' : 'confirm-store confirm-hide'}><Link to="/menu">Confirm Store</Link></button>
        </div>
    )
}

export default FindFilter