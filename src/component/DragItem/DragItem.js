import React from 'react'
import './DragItem.css'
import { useDrag, DragPreviewImage} from 'react-dnd'

export default function DragItem({umaname}) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'UmaItem',
    item: {id:umaname},
    end: item => ({id:umaname}),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  
  return (
    <>
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
      </>
      )
}