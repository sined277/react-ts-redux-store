

import { useDispatch } from "react-redux"
import React from "react"
import { setCategoryIndex } from "../../feautures/slices/filterSlice"
import { CATEGORIES } from "../../utils/CATEGORIES"

type CategoriesProps = {
    selectCategoryIndexActive: number
}


const Categories: React.FC<CategoriesProps> = ({selectCategoryIndexActive}) => {
    console.log(selectCategoryIndexActive);
    

    
    const dispatch = useDispatch()
    const handleChangeActiveIndex = (indexActiveCategory: number) => {
        dispatch(setCategoryIndex(indexActiveCategory))
    }

    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((category, index) => {
                    return (
                        <li key={index} onClick={() => handleChangeActiveIndex(index)} className={selectCategoryIndexActive === index ? "active" : ""}>{category}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories
