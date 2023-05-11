import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const ProductsContext = createContext()

function GlobalProducts({ children }) {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(("https://raw.githubusercontent.com/Hamlet-Ganbar/starbucks/main/src/AllData.json"))
            .then(response => {
                if (response.status === 404) {
                    navigate("menu/404")
                }
                else {
                    return response.json()
                }
            })
            .then(data => {setTimeout(()=>{setData(data.products); setLoading(false)}, 1000)})
    }, [navigate])

        
    let checkStorage = () => {
        if (localStorage.getItem('productBasket') === null) {
            localStorage.setItem('productBasket', JSON.stringify([]))
        }
        else {
            JSON.parse(localStorage.getItem('productBasket'))
        }
    }
    checkStorage()

    const [basketSum, setBasketSum] = useState(JSON.parse(localStorage.getItem("productBasket"))?.length)

    const datas = { data, setData, checkStorage, basketSum, setBasketSum, loading }

    return (
        <ProductsContext.Provider value={datas}>
            {children}
        </ProductsContext.Provider>
    )
}

export { GlobalProducts }