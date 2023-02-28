import React, { useState } from 'react'
import Mail from '../Mail';
import './variant2.css'
const Variant2 = () => {
  const [count, setCount] = useState(0);
  const increment = async () =>{
    setCount(count+1);
  }
  const decrement = async () =>{
    if(count > 0){

      setCount(count-1);
    }else{
      setCount(0);
    }
  }
  return (
    <>
    <div class="section glassy">
    <h2 id='glassy' >Counter with Glassy Effect Button</h2>
    <div class="content">
        <button  onClick={decrement}   class="btn3" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
            -</button>
        <h1>{count}</h1>
        <button  onClick={increment}    class="btn3" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            +</button>
    </div>
    <a href="#pixel"> <div  style={{textAlign:"center","cursor":"pointer"}} className="scrollformore">
    <h5 style={{textAlign:"center"}} >Scroll for More</h5>
    <h1 style={{textAlign:"center"}} ><i class='bx bx-chevron-down'></i></h1>
    </div></a>
    <Mail/>
</div>
    </>
  )
}

export default Variant2