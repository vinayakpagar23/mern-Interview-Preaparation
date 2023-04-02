import React from 'react'

const Products = ({state,dispatch}) => {
    const {products,cart} =state;
  return (
    <div style={{
        display:"flex",
        flexWrap:'wrap',
        justifyContent:"space-evenly",
        width:"80%",
        margin:"auto"
    }}>
        {
          products.map((ele)=>(
            <div style={{
                display:"flex",
                flexDirection:"column",
                padding:10,
                border:"1px solid grey",
                width:"30%",
                marginTop:10,
                gap:10
            }}>
               <img src={ele.thumbnail} alt={ele.title} />
               <span>{ele.title}</span>
               <span>{ele.price}</span>
               {
                cart.some(p)
               }
               <button>AddToCart</button>
               <button>removecart</button>
            </div>
          ))
        }
    </div>
  )
}

export default Products