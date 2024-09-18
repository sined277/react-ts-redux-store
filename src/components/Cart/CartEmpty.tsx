import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/ROUTES'



const CartEmpty: React.FC = () => {
    return (
        <div>
            <div className="content">
                <div className="container container--cart">
                    <div className="cart cart--empty">
                        <h2>Корзина пустая 😕</h2>
                        <p>
                            Вероятней всего, вы не заказывали ещё пиццу.<br />
                            Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p>
                        <Link to={ROUTES.HOME}>
                            <button className="button button--black">
                                <span>Вернуться назад</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty