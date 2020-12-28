import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../../redux/reducer'
import Avatar from '../Avatar'
import style from './Table.module.css'

const UserTable = ({ id, favourite, name, age, phone, image }) => {
    const dispatch = useDispatch()

    return <li id={id} className={style.item}>
        <Avatar img={image} />
        <span>{name}</span>
        <span>{age}</span>
        <span>{phone}</span>
        <span onClick={() => dispatch(toggleFavorite(id))} className={style.favourite}>
            {
                favourite ?
                    <span className={style.active}>&#9733;</span> :
                    <span>&#9733;</span>
            }
        </span>
    </li>
}

export default UserTable

