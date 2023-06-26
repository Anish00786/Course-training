import { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  const[courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  const[category,setcategory]=useState(filterData[0].title);
  async function fetchData()
{
  setLoading(true);

  try{
    let responce=await fetch(apiUrl).then(res=>res.json());
    setCourses(responce.data)
    setLoading(false);
  }catch(e){
    console.log(e)
  }
} 
useEffect(()=>{
  fetchData()
},[])

return (
    <div className="app">
      <div>
        <Navbar/>
      </div>
{/* courses  */}
      <div className="bottomsection">
      </div>

<div>
  <Filter filterdata={filterData}category={category}setCategory={setcategory}/>
</div>

      <div className="coursesCard">
{
  loading ?"Loading...":<Cards courses={courses} category={category}/>
}
      </div>
    </div>
  );
}

export default App;
