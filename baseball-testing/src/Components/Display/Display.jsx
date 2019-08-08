import React from "react"

const Display = (props) =>
{
    const { balls, strikes } = props
    return (
        <div>
            <h3>Balls</h3>
            <h3 data-testid="balls">{balls}</h3>
        </div>
    )
}

export default Display