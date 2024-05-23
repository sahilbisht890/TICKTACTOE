import React, { useState } from 'react'

export default function Grid(props) {
    const matrix=props.matrix;
    return <>
        <div className="container p-2">
            <div className="tictoeDesign d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-2 display-2 fw-bolder">TIC TAC TOE GAME </h1>
                <div className='d-flex gap-4 mb-3'>
                <h4 className='d-flex'>Player1 :<p className='text-danger'>&#10060;</p></h4> 
                <h4 className='d-flex'>Player2 : <p className='text-primary'>&#9711;</p></h4>
                </div>
            

                {
                    matrix.map((row,indexRow) => {
                        return <div className='d-flex' key={indexRow}>
                            {
                                row.map((value, index) => {
                                    return <div key={index} id={indexRow+''+index} onClick={props.playerPlayed} className="boxes d-flex bg-light">
                                      <span className='display-3 fw-bolder'>
                                      {value === -1 ? '' : value === 0 ? <p className='text-primary'>&#9711;</p> :<p className='text-danger'>&#10060;</p>}
                                        </span>  
                                        </div>;
                                })
                            }
                        </div>

                    })
                }

{
    props.winner=='none' && props.total < 9 ? <h2 className={`mt-3 text-${props.player==='player1' ? 'danger' : 'primary'}`}> {props.player.toUpperCase()} CHANCE</h2>
      :
      <>
            <h2 className='text-success mt-3'>{props.winner!=='none'? `WINNER : ${props.winner.toUpperCase()}`:`TIE`}</h2>
            <button className='btn rounded border border-3 bg-warning fw-bolder' onClick={props.restartGame}>Restart</button>
      </>

}
 
            </div>
        </div>
    </>

}