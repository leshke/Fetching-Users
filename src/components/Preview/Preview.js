import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import UserPreview from './UserPreview'
import style from './Preview.module.css'

const Preview = () => {
    const users = useSelector(state => state.usersPage.users, shallowEqual)

    return <>
        <div className={style.itemWrapper}>
            {users.map(item => <UserPreview key={item.id} {...item} />)}
        </div>
    </>
}

export default Preview

