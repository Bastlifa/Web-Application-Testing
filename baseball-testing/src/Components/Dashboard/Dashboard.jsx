import React from "react"

const Dashboard = (props) =>
{
    const { setAtBat, atBat } = props
    const clickHandle = (e) =>
    {
        if(e.target.name === "strike")
        {
            atBat.strikes < 2 ? setAtBat({...atBat, strikes: atBat.strikes+1}) : 
            setAtBat({...atBat, strikes: 0, balls: 0, fouls: 0})
        }
        else if(e.target.name === "foul")
        {
            if(atBat.fouls < 3)
            {
                atBat.strikes < 2 ? setAtBat({...atBat, strikes: atBat.strikes+1, fouls: atBat.fouls+1}) : 
                setAtBat({...atBat, fouls: atBat.fouls + 1})
            }
            else setAtBat({...atBat, strikes: 0, balls: 0, fouls: 0})
        }
        else if(e.target.name === "ball")
        {
            atBat.balls < 3 ? setAtBat({...atBat, balls: atBat.balls+1,}) : 
            setAtBat({...atBat, strikes: 0, balls: 0, fouls: 0, hits: atBat.hits + 1})
        }
        else if(e.target.name === "hit")
        {
            setAtBat({...atBat, strikes: 0, balls: 0, fouls: 0, hits: atBat.hits + 1})
        }
    }
    return (
        <div>
            <button onClick={clickHandle} name="strike">Strike</button>
            <button onClick={clickHandle} name="ball">Ball</button>
            <button onClick={clickHandle} name="foul">Foul</button>
            <button onClick={clickHandle} name="hit">Hit</button>
        </div>
    )
}

export default Dashboard