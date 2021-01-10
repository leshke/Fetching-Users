import React from 'react'
import { NavLink } from 'react-router-dom';

const ToggleView = ({ t }) => {
    return <div className="toggleView">
        <NavLink to="/users/preview"> {t("view.preview")} </NavLink>
        <NavLink to="/users/table"> {t("view.table")} </NavLink>
    </div>
}

export default ToggleView;