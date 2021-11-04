import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Haligali')
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button text = 'Add' onClick={onClick}/>
        </header>
    )
}
Header.defaultProps = {
    title:"Task Title",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
