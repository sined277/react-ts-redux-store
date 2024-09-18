import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../feautures/store';



import PizzaBlock from '../components/Pizza/PizzaBlock';
import PizzaSkeleton from '../components/Pizza/PizzaSkeleton';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Pagination from '../Pagination/Pagination';
import { fetchPizzas, selectIsLoading, selectPizzaData } from '../feautures/slices/PizzasSlice';
import { selectCategoryIndex, selectSortPropertyType, selectSearchValue, selectCurrentPage } from '../feautures/slices/filterSlice';





const Home:React.FC = () => {
    const dispatch = useAppDispatch()

    // CATEGORY ACTIVE INDEX 
    const selectCategoryIndexActive = useSelector(selectCategoryIndex)
    const catygoryFilter = selectCategoryIndexActive ? selectCategoryIndexActive : ""

    // ACTIVE SORT_PROPERTY
    const selectSortProperty = useSelector(selectSortPropertyType)
    const sortFilter = selectSortProperty ? selectSortProperty.sortProperty : ""

    // SEARCH VALUE 
    const searchValue = useSelector(selectSearchValue)
    const search = searchValue ? searchValue : ""

    const currentPage = useSelector(selectCurrentPage)
    const isLoading = useSelector(selectIsLoading)




    // LOGIC TO FETCH PIZZAS DATA
    const pizzaData = useSelector(selectPizzaData)
    const Pizzas = pizzaData.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
    const Skeletons = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)

    useEffect(() => {

        dispatch(fetchPizzas(`https://64d35f4567b2662bf3dc1a22.mockapi.io/pizzas?limit=3&page=${currentPage}&category=${catygoryFilter}&sortBy=${sortFilter}&search=${search}`))

    }, [catygoryFilter, sortFilter, search, currentPage, dispatch]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories selectCategoryIndexActive={selectCategoryIndexActive} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы:</h2>
            <div className="content__items">
                {isLoading === "loading" ? Skeletons : Pizzas}
            </div>
            <Pagination currentPage={currentPage} />
        </div>
    )
}

export default Home