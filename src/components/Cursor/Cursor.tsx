import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export const Cursor = () => {
    const [top, setTop] = useState<number>(0)
    const [left, setLeft] = useState<number>(0)

    useEffect(() => {
        const onMouseMove = (event: MouseEvent) => {
            setTop(event.pageY); 
            setLeft(event.pageX); 
        }
        document.addEventListener('mousemove', onMouseMove)
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return <div 
    className='cursor'  style={{ top: top-15 + "px", left: left-15 + "px"}}>
    </div>
}