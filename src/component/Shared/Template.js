import React from 'react'
import { Stack } from 'react-bootstrap'

const Template = ({children,title,para,className}) => {
    return (
        <Stack className={`rounded-5 text-center mt-5 ${className}`}>
            <h3>{title}</h3>
            <p>{para}</p>
            {children}
        </Stack>
    )
}

export default Template