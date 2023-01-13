import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../asyncMock'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(productsFromApi => {
            setProducts(productsFromApi)

        })

    }, [])

    const productsComponents = products.map(prod => <li>{prod.name} </li>)


    return(

        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ul>
                {productsComponents}
            </ul>
        </div>
    )


}

export default ItemListContainer