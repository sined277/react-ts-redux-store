import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
import { setCurrentPage } from '../feautures/slices/filterSlice'
import { useDispatch } from 'react-redux'

type PaginationProps = {
    currentPage: number
}



const Pagination:React.FC<PaginationProps> = ({currentPage}) => {
    const dispatch = useDispatch()
    return (
        <ReactPaginate
        className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
            pageRangeDisplayed={5}
            pageCount={4}
            previousLabel="<"
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination