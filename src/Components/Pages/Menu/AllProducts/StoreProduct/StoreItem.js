import { Link} from "react-router-dom"
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { useEffect,useState } from "react"
import { nanoid } from "nanoid"

function StoreItem({ img, name, size, star, id, dataid, store, setStore }) {
    let basketStore = JSON.parse(localStorage.getItem('productBasket'))
    const [road, setroad] = useState("")
    const addHandle = () => {
        const b = basketStore.find(item => item.name === name);
        if (basketStore.length <= 15) {
            basketStore.push({
                id: nanoid(),
                name: b.name,
                img: b.img,
                size: b.size,
                star: "200★ item",
            })
        }
        setStore(basketStore)
        localStorage.setItem('productBasket', JSON.stringify(basketStore))
    }

    const deleteHandle = (e) => {
        const b = basketStore.find(item => item.id === id)?.id;
        let arr = basketStore.filter(item => item.id !== b)
        setStore(arr)
        localStorage.setItem('productBasket', JSON.stringify(arr))
    }


    const editHandler = () => {
        let b = `/menu/product/${basketStore.find(item => item.name === name)?.dataid}`
        setroad(b)
    }

    useEffect(() => {
        editHandler()
    }, [road])


    return (
        // <Link to='/menu'>

        <div className='prods'>
            <div><img src={img} alt={name} /></div>
            <div>
                <h3>{name}</h3>
                <p>{size}</p>
                <p>{star}</p>
                <div className="operations">
                    <button onClick={editHandler}>
                        <Link to={road} >

                            <svg aria-hidden="true" className="valign-middle " focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path d="M7.676 18.837l-2.472-2.48-2.015 2.023-.476 2.914 2.95-.44 2.012-2.017zm7.247-12.223l-8.597 8.62 2.472 2.478 8.596-8.62-2.47-2.478zm5.693 1.496l-1.504 1.508c-.012.014-.016.03-.03.044-.01.013-.028.016-.042.027l-9.647 9.674c-.012.014-.016.03-.028.042-.012.013-.03.016-.042.028L6.6 22.166c-.122.12-.277.2-.445.223l-4.048.602c-.04.006-.078.008-.117.008-.253 0-.476-.128-.623-.322-.26-.167-.41-.475-.356-.8l.655-4.007c.027-.164.105-.316.222-.432l12.475-12.51 1.563-1.567c.31-.31.81-.31 1.12 0 .31.31.31.814 0 1.124l-1 1.005 2.47 2.478.98-.982c.31-.31.812-.31 1.12 0 .31.31.31.813 0 1.124zm1.59-1.91c-.202 0-.405-.078-.56-.233l-3.6-3.61c-.31-.31-.31-.813 0-1.124.31-.31.812-.31 1.122 0l3.6 3.61c.31.31.31.814 0 1.124-.156.155-.36.232-.562.232z"></path></svg>
                        </Link>
                    </button>
                    <AiOutlineMinusCircle onClick={deleteHandle} size={20} />
                    <AiOutlinePlusCircle onClick={addHandle} size={20} />
                </div>
            </div>
        </div>
    )
}

export default StoreItem