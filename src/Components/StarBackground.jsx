import { useEffect, useState } from 'react'
// each star will have id,size ,x,y,opacity,animation duration
const StarBackground = () => {
    const [stars,setStars]=useState([]);
    const [meteors,setMeteors]=useState([]);

    const getStars=()=>{
        const numberOfStars=Math.floor((window.innerWidth*window.innerHeight)/10000)-20;
        const newStars=[];
        for(let i=0;i<numberOfStars;i++){
            newStars.push({
                id:i,
                size:Math.random()*3+1,
                x:Math.random()*100,
                y:Math.random()*100,
                opacity:Math.random()*0.5+0.5,
                animationDuration:Math.random()*4+2

            })
        }
        setStars(newStars);

    }
    const getMeteors=()=>{
        const numberOfMeteors=5;
        const newMeteors=[];
        for(let i=0;i<numberOfMeteors;i++){
            newMeteors.push({
                id:i,
                size:Math.random()*2+1,
                x:Math.random()*100,
                y:Math.random()*100,
                delay:0.1+"s",
                animationDuration:Math.random()*3+3,

            })
        }
        setMeteors(newMeteors);

    }

    useEffect(()=>{
        getStars();
        getMeteors();
        const handleResize =()=>{
            getMeteors();
            getStars();
        }
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])

  return (
    <div className='fixed overflow-hidden inset-0 z-0 pointer-events-none'>
        {stars.map((star)=>(
            <div key={star.id}
            className='star animate-pulse-subtle'
            style={{
                width:star.size+"px",
                height:star.size+"px",
                left:star.x+"%",
                top:star.y+"%",
                opacity:star.opacity,
                animationDuration:star.animationDuration+"s"
            }}/>
        ))}

        {/* For meteors */}


            {meteors.map((meteor)=>(
            <div key={meteor.id}
            className='meteor animate-meteor'
            style={{
                width:meteor.size*50+"px",
                height:meteor.size*2+"px",
                left:meteor.x+"%",
                top:meteor.y+"%",
                animationDelay: meteor.delay + "s",
                animationDuration:meteor.animationDuration+"s"
            }}/>
        ))}
      
    </div>
  )
}

export default StarBackground
