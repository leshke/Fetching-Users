import React from 'react'
import sheep from '../images/sheep.svg'
import cat from '../images/cat.svg'
import dog from '../images/dog.svg'
import fox from '../images/fox.svg'
import koala from '../images/koala.svg'
import lion from '../images/lion.svg'
import owl from '../images/owl.svg'
import pig from '../images/pig.svg'
import raccoon from '../images/raccoon.svg'
import react from '../images/react.svg'
import penguin from '../images/penguin.svg'

const Avatar = ({ img }) => {
    const imgUrl = (image) => {
        if (image === 'sheep') return sheep
        else if (image === 'cat') return cat
        else if (image === 'dog') return dog
        else if (image === 'fox') return fox
        else if (image === 'koala') return koala
        else if (image === 'lion') return lion
        else if (image === 'owl') return owl
        else if (image === 'pig') return pig
        else if (image === 'raccoon') return raccoon
        else if (image === 'react') return react
        else if (image === 'penguin') return penguin
        else return null
    }
    return <img src={imgUrl(img)} alt="avatar" />
}

export default Avatar