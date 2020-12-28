import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { sortByDesk, sortByAsc } from '../../redux/reducer'

const Sorting = () => {
    let search = window.location.search

    const [url, setUrl] = useState(search)

    const dispatch = useDispatch()

    const onSortAsc = () => {
        if (url === "?_sort=id&_order=desk") {
            setUrl(`?_sort=id&_order=asc`)
            dispatch(sortByAsc('id'))
        }
        if (url === "?_sort=name&_order=desk") {
            setUrl(`?_sort=name&_order=asc`)
            dispatch(sortByAsc('name'))
        }
        if (url === "?_sort=age&_order=desk") {

            setUrl(`?_sort=age&_order=asc`)
            dispatch(sortByAsc('age'))
        }
    }

    const onSortDesk = () => {
        if (url === "?_sort=id&_order=asc") {
            setUrl(`?_sort=id&_order=desk`)
            dispatch(sortByDesk('id'))

        }
        if (url === "?_sort=name&_order=asc") {
            setUrl(`?_sort=name&_order=desk`)
            dispatch(sortByDesk('name'))

        }
        if (url === "?_sort=age&_order=asc") {
            setUrl(`?_sort=age&_order=desk`)
            dispatch(sortByDesk('age'))
        }
    }

    const onSortById = (e) => {
        setUrl(`?_sort=id&_order=asc`)
        dispatch(sortByAsc('id'))
    }
    const onSortByName = (e) => {
        setUrl(`?_sort=name&_order=asc`)
        dispatch(sortByAsc('name'))
    }
    const onSortByAge = (e) => {
        setUrl(`?_sort=age&_order=asc`)
        dispatch(sortByAsc('age'))
    }

    return <div className="sorting">
        <div className='sortType'>
            <span className={search === '?_sort=id&_order=asc' ? 'active' : null}>
                <Link onClick={onSortById} to="?_sort=id&_order=asc" > ID</Link>
            </span>
            <span className={search === "?_sort=name&_order=asc" ? 'active' : null}>
                <Link onClick={onSortByName} to="?_sort=name&_order=asc" > ИМЯ</Link>
            </span>
            <span className={search === "?_sort=age&_order=asc" ? 'active' : null}>
                <Link onClick={onSortByAge} to="?_sort=age&_order=asc" > Возраст</Link>
            </span>
        </div>
        <div className='sortDirection'>
            <Link onClick={onSortAsc} to={url}> По возрастанию</Link>
            <Link onClick={onSortDesk} to={url}> По убыванию</Link>
        </div>
    </div>
}

export default Sorting