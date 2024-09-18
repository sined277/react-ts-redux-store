import React, { useState } from "react"
import { PIZZA_TYPES } from "../../utils/PIZZA_TYPES"
import { useDispatch } from "react-redux"
import { addProductInCart } from "../../feautures/slices/cartSlice"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CartItem } from "../../feautures/slices/cartSlice"

type PizzaBlockProps = {
    id: string,
    title: string,
    imageUrl: string,
    price: number,
    sizes: number[],
    types: number[],
}



const PizzaBlock:React.FC<PizzaBlockProps> = (pizzaData) => {

    const { id, title, imageUrl, price, sizes, types } = pizzaData

    const cartItem = useSelector((state) => state.cart.pizzasInCartData.find((pizza) => {
        return pizza.id === id
    }))

    const addedCount = cartItem ? cartItem.count : 0

    const dispatch = useDispatch()

    const handlerAddPizzaInCart = () => {
        const item: CartItem = {
            id,
            title,
            imageUrl,
            price,
            types,
            count: 0
        }
        dispatch(addProductInCart(item))
    }

    const [isActiveIndexType, setIsActiveIndexType] = useState(0)
    const [isActiveIndexSize, setIsActiveIndexSize] = useState(0)

    const handleChangeActiveIndexType = (index) => {
        setIsActiveIndexType(index)
    }

    const handleChangeActiveIndexSyze = (index) => {
        setIsActiveIndexSize(index)
    }


    return (
        <div className="pizza-block">
            <Link to={`/pizza/${id}`}>
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            </Link>
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type, index) => {
                        return (
                            <li key={index} onClick={() => handleChangeActiveIndexType(index)} className={isActiveIndexType === index ? "active" : ""}>{PIZZA_TYPES[type]}</li>
                        )
                    })}
                </ul>
                <ul>
                    {sizes.map((size, index) => {
                        return (
                            <li key={index} onClick={() => handleChangeActiveIndexSyze(index)} className={isActiveIndexSize === index ? "active" : ""}>{size} см.</li>
                        )
                    })}
                </ul>
            </div>
            <div onClick={handlerAddPizzaInCart} className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} $</div>
                <div className="button button--outline button--add">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
                    </svg>
                    <span>Добавить</span>
                    <i>{addedCount}</i>
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock