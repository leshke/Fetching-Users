import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../../redux/reducer'
import Avatar from '../Avatar'
import style from './Table.module.css'

const UserTable = ({ id, favourite, name, age, phone, image, t }) => {
    const dispatch = useDispatch()

    const pluralYears = (age) => {
        let remainder10 = (age % 10);
        let remainder100 = (age % 100);

        if (remainder100 > 10 && remainder100 < 20) {
            return t("years.plural1")
        } else if (remainder10 === 1) {
            return t("years.plural2")
        } else if (remainder10 > 1 && remainder10 < 5) {
            return t("years.plural3")
        }
        return t("years.plural1")
    }

    return <div id={id} className={style.item}>
        <Avatar img={image} />
        <span>{name}</span>
        <span>{age} {pluralYears(age)}</span>
        <span>{phone}</span>
        <span onClick={() => dispatch(toggleFavorite(id))} className={style.favourite}>
            {
                favourite ?
                    <span className={style.active}>&#9733;</span> :
                    <span>&#9733;</span>
            }
        </span>
    </div>
}

export default UserTable
