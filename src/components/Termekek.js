import React, { useContext } from 'react'
import Termek from './Termek'
import { ApiContext } from '../contexts/ApiContext'

function Termekek() {

    const {tLista} = useContext(ApiContext)

  return (
    <div className='row'>
        <Termek />
        <Termek />
        <Termek />
        <Termek />
        <Termek />
        <Termek />
        <Termek />
    </div>
  )
}

export default Termekek