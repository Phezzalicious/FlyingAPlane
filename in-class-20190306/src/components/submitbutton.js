import React from 'react'

const Button = ({ children, onClick, className, ...props}) => {
    return (
        <button className={className} onClick={onClick}>
        {children}
        </button>
    )
}
export default Button