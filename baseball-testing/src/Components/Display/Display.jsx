import React from "react"

const Display = (props) =>
{
    const { atBat } = props
    return (
        <div>
            <h3>Hits:</h3>
            <h3 data-testid="hits">{atBat.hits}</h3>
            <h3>Balls:</h3>
            <h3 data-testid="balls">{atBat.balls}</h3>
            <h3>Strikes:</h3>
            <h3 data-testid="strikes">{atBat.strikes}</h3>
            <h3>Fouls:</h3>
            <h3 data-testid="fouls">{atBat.fouls}</h3>
        </div>
    )
}

export default Display