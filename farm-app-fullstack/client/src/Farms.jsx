import React from 'react'
import Farm from './Farm.jsx'

const Farms = (props) => {
  const farms = props.farms.map((f) => {
    return <Farm f={f} key={f.name}/>
  });
  return (<div>{farms}</div>);
}

export default Farms;