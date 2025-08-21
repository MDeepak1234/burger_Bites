import React from 'react'
import '../Styles/order.css';
function Order() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center"
      }
    }
    >
      <h1 style={{ paddingTop: "1rem" }}>START YOUR ORDER</h1>
      <hr style={{ width: "60%", margin: "1rem 0" }} />
      <h4>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</h4>
      <button><p style={{"paddingTop":"0.5rem"}}>Delivery</p></button>
      <button><p style={{"paddingTop":"0.5rem"}}>Pick Up</p></button>
      <button><p style={{"paddingTop":"0.5rem"}}>Dine In</p></button>
    </div>
  )
}

export default Order
