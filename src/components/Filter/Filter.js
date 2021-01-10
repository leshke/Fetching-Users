import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import style from './Filter.module.css' 

const Filter = ({ t }) => {
    const [value, setValue] = useState('')
    const users = useSelector(state => state.usersPage.users, shallowEqual)

    const location = useLocation()

    const history = useHistory()

    const onClickFilter = (name) => (e) => {
        e.preventDefault()
        if (name.length) return history.push(`${location.pathname}?name=${name}`)
    }

    const onChangeInput = (e) => {
        setValue(e.target.value)
    }

    return <div className={style.filter}>
        <form>
            <input value={value} onChange={onChangeInput} placeholder={t('filter.placeholder')}></input>
            <button type='submit' onClick={onClickFilter(value)}>{t('filter.find')}</button>
        </form>
        <h2>{users.length === 0 ? t('filter.result') : null}</h2>
    </div>
}

export default Filter