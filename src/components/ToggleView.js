import React from 'react'
import { NavLink } from 'react-router-dom';

const ToggleView = () => {
    return <div className="toggleView">
        <NavLink to="/users/preview"> Preview </NavLink>
        <NavLink to="/users/table"> Table </NavLink>
    </div>
}

export default ToggleView;