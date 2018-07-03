import React from 'react'

const Welcome =  (props) => {
  return (
    <div className="jumbotron">
        <center>
            <h4>Halo, {props.hasilnama}</h4>
        </center>
    </div>
  )
}
export default Welcome;
