import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Sorting = ({ t }) => {
    const [urlParamsSort, setUrlParamsSort] = useState('id')
    const [urlParamsOrder, setUrlParamsOrder] = useState('asc')

    const location = useLocation()

    const history = useHistory()

    const onSortChange = (type) => (e) => {
        setUrlParamsSort(type)
        history.push(`${location.pathname}?_order=${urlParamsOrder}&_sort=${type}`)
    }

    const onOrderChange = (order) => (e) => {
        setUrlParamsOrder(order)
        history.push(`${location.pathname}?_order=${order}&_sort=${urlParamsSort}`)
    }

    return <div className="sorting">
        <div className='sortType' >
            <button className={location.search.includes('id') ? 'active' : ''}
                onClick={onSortChange('id')} >
                {t("sorting.id")}
            </button>

            <button className={location.search.includes('name') ? 'active' : ''}
                onClick={onSortChange('name')} >
                {t("sorting.name")}
            </button>

            <button className={location.search.includes('age') ? 'active' : ''}
                onClick={onSortChange('age')} >
                {t("sorting.age")}
            </button>

        </div>
        <div className='sortDirection'>
            <button className={location.search.includes('asc') ? 'active' : ''}
                onClick={onOrderChange('asc')} >
                {t("sorting.asc")}
            </button>

            <button className={location.search.includes('desc') ? 'active' : ''}
                onClick={onOrderChange('desc')} >
                {t("sorting.desk")}
            </button>
        </div>
    </div>
}

export default Sorting