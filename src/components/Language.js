import { useState } from "react";

export const Language = ({ i18n }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const btns = [{ id: 1, name: 'EN' }, { id: 2, name: 'RU' }];

    const onClickBtn = (language, index) => {
        i18n.changeLanguage(language);
        setActiveIndex(index)
    };

    return <> <div className="translation">
        {btns.map((item, index) => {
            return <button key={item.id} className={activeIndex === index ? "btn active" : "btn"}
                onClick={() => onClickBtn(item.name, index)}>{item.name}
            </button>
        })}
    </div>
        <hr />
    </>
}