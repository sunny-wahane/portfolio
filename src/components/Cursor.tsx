import { useEffect, useState } from "react"

export default function Cursor() {

    const [x, setX] = useState(10)
    const [y, setY] = useState(10)



    const logMousePosition = (e: MouseEvent)=> {
        setX(e.pageX);
        setY(e.pageY); 
      };

      useEffect(() => {
    
        return () => { document.addEventListener("mousemove", logMousePosition)
        document.addEventListener("wheel", logMousePosition)
    }; }, []);
    
    return (
        <div className="pointer-events-none">
        <div className=" w-8 border border-black h-8 rounded-full absolute duration-100" style={{'translate': `${x-12}` + 'px '+`${y-12}` + 'px'}} >
        </div>
        <div className="w-3 border border-black bg-black h-3 rounded-full absolute" style={{'translate': `${x}` + 'px '+`${y}` + 'px'}}>
        </div>
        </div>
        
    )
}