import React,{useEffect} from 'react'



const Badges = ({ localBadgeCount, products }) => {
    
   
   

    return (
      <section className="skillheader" id="badges">
                    <h1 className='Badge-h1'>My Badges</h1>
                    <section className="flex-badges-container">
                {localBadgeCount.map((item,index)=>(
                  
                       <figure  style={{padding:"1%"}}>
                            <div><img src={products[index].img} width="200" height="200"/></div>
                            <h3>{products[index].title} x {item} </h3>
                       </figure>
                    ))}
                    </section>
            </section>
    )
}

export default Badges
