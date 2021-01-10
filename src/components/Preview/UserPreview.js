import React from 'react'
import style from './Preview.module.css'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../../redux/reducer'
import Avatar from '../Avatar'
import video1 from '../../videos/boy.mp4'
import video2 from '../../videos/shoe.mp4'

const UserPreview = ({ id, favourite, name, age, phone, image, phrase, video, t }) => {
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

    return <div id={id} className={video ? style.itemWithVideo : style.item}>
        <div className={style.infoContainer}>
            <div className={style.headerItem}>
                <Avatar img={image} />
                <span>{name}</span>
                <span onClick={() => dispatch(toggleFavorite(id))} className={style.favourite}>
                    {
                        favourite ?
                            <span className={style.active}>&#9733;</span> :
                            <span>&#9733;</span>
                    }
                </span>
            </div>
            <p>{age} {pluralYears(age)}</p>
            <p>{phone}</p>
            <p>{phrase}</p>
        </div>
        {
            video ?
                <video width="50%" height="100%" controls autoPlay muted>
                    <source src={video === 'shoe' ? video2 : video1} />
                </video>
                : null
        }
    </div>
}

export default UserPreview