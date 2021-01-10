import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import UserPreview from './UserPreview'
import style from './Preview.module.css'

const Preview = ({t}) => {
    const users = useSelector(state => state.usersPage.users, shallowEqual)

    return <>
        <div className={style.itemWrapper}>
            {users.map(item => <UserPreview t={t} key={item.id} {...item} />)}
        </div>
    </>
}

export default Preview

