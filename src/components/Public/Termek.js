import React from 'react'

function Termek(props) {
  return (
    <div className='col-sm-4' style={{marginTop: "2rem"}}>
        <div className='card' >
            <img src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.termek.title}</h5>
                <p className="card-text">{props.termek.description}</p>
                <div className='row' style={{textAlign:"center"}}>
                  <p className="card-text">{props.termek.price}$</p>
                  <a href="#" className="btn btn-primary">Buy</a>       
                  
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Termek