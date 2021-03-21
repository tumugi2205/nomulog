import React from 'react'
import { useDrag } from 'react-dnd'

export default function DragItem({umaname}) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'UmaItem',
    item: {id:umaname},
    end: item => ({id:umaname})
  }))
  return (
    <img 
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move'
    }}
    className="uma_image" 
    id={umaname} 
    src={`./images/${umaname}.png`} 
    value={umaname} 
    draggable="true" 
    key={umaname}/>
  )
}