import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-hot-toast'
function Card({course,likedCourses,setLikedCourses}) {



  function likeHandler(){
    if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=>prev.filter((id)=>(id!==course.id)))
        toast.error("Remove from liked ones..")
    }
    else{
if(likedCourses.length===0){
    setLikedCourses([course.id])
}
else{
    setLikedCourses((prev)=>[...prev,course.id]);
}
        toast.success("Add to liked ones.")
    }
}



    console.log(course)
  return (
    <div className='card'>
        {/* img components  */}
      <div className='imgComp'>
        {/* img  */}
        <img style={{height:'180px'}} src={course.image.url} alt = ''/>
        {/* like button  */}
     

<button onClick={likeHandler} className='likedBtn'>
{
  likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
}
</button>
       


      </div>
      {/* paragraph  */}
      <div className='coursePara'>
        <p className='courseTitle'>{course.title}</p>
        <p className='courseDes'>{
          course.description.length > 100 ? (course.description.substr(0,100) + '...') : (course.description)
        }</p>
      </div>
    </div>
  )
}

export default Card
