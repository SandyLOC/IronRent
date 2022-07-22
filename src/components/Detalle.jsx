import React from 'react';
import { useParams } from 'react-router-dom';

function Detalle() {

const {id} = useParams()

  return (
    <div>Detalle {id}</div>
  )
}

export default Detalle