import React from "react";

function Filter({filterdata,category,setCategory}){
    function filterhandler(title){
        setCategory(title)
    }
       return(
        <div className="filter">
          {
            filterdata.map((item)=>(
                <button 
               onClick={()=>filterhandler(item.title)} className={`${category === item.title?'filterBtnSelected':'filterBtn'}`} key={item.id}>{item.title}</button>
            ))
          }
        </div>
    )
}

export default Filter