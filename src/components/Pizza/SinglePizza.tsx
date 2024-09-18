import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ROUTES } from '../../utils/ROUTES'

const SinglePizza: React.FC = () => {
    const params = useParams()
    const paramdId = params.idPizza
    const navigate = useNavigate()
    const [singlePizzaData, setSinglePizzaData] = useState<{
        imageUrl: string,
        title: string,
        price: number,
    }>();


    
    useEffect(() => {
        const fetchSinglePizza = async () => {
            try {
                const response = await axios.get(`https://64d35f4567b2662bf3dc1a22.mockapi.io/pizzas?id=${paramdId}`)
                const data = await response.data;
                setSinglePizzaData(data)
                
            } catch (error) {
                alert('Нет такой питсы')
                console.log(`Error: ${error}`);
                navigate(ROUTES.HOME)
            }
        }

        fetchSinglePizza()
    }, [paramdId, navigate])



    if (!singlePizzaData) {
        return (
            <Link to={ROUTES.HOME}>
                <h1>нЕТ ТАКОЙ ПИТСЫ</h1>
                <button type='button'>Go Back</button>
            </Link>
        )
    }
    console.log(singlePizzaData);
    

    return (
        <div>
            <img alt='pizza' src={singlePizzaData.imageUrl} />
            <h1>{singlePizzaData.title}</h1>
            <h2>${singlePizzaData.price}</h2>
            <Link to={ROUTES.HOME}>
                <button type='button'>Go Back</button>
            </Link>
        </div>
    )

}

export default SinglePizza