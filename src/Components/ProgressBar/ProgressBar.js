import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressBarComponent = ({ complete }) => {

    return (
        <ProgressBar animated now={complete} />
    )
}

export default ProgressBarComponent


