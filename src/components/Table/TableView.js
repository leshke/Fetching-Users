import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import UserTable from './UserTable'

const TableView = ({ t }) => {
    const users = useSelector(state => state.usersPage.users, shallowEqual)

    return <div>
        {users.map(item => <UserTable t={t} key={item.id} {...item} />)}
    </div>
}

export default TableView

