import React from 'react'
import { shallowEqual,useSelector } from 'react-redux'
import UserTable from './UserTable'
import { AnimatedList } from 'react-animated-list';

const TableView = () => {
    const users = useSelector(state => state.usersPage.users, shallowEqual)

    return <ul>
        <AnimatedList animation="grow" initialAnimationDuration={60000}>
            {users.map(item => <UserTable key={item.id} {...item} />)}
        </AnimatedList>
    </ul>
}

export default TableView

