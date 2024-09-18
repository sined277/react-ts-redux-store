import React, { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../feautures/slices/filterSlice'
import debounce from 'lodash.debounce'

const Search: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onDoubleClickClear = () => {
        dispatch(setSearchValue(''))
        setValue('')
        inputRef?.current?.focus()

    }



    
    const dispatch = useDispatch()

    const [value, setValue] = useState("")

    const updateSearchValue = useCallback(
        debounce((value: string) => {
            dispatch(setSearchValue(value));
        }, 1000),
        [] // You need to add setSearchValue as a dependency if it's a function you've imported
    );

    const handleChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }



    return (
        <div>
            <input ref={inputRef} value={value} onChange={(event) => handleChangeSearchValue(event)} type='text' placeholder='Search for pizza...' />
            <span onClick={onDoubleClickClear}>CLEAR</span>
        </div>
    )
}

export default Search