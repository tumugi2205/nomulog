import React from 'react'
import { useDrop, DropTarget } from 'react-dnd'


export default function DropZone({ areaName, update_form_item, setFormData, formData }) {
    const [{ getItem }, drop] = useDrop(() => ({
      accept: "UmaItem",
      drop: () => update_and_compute(),
      collect: monitor => ({
        getItem: monitor,
      }),
    }))

    function update_and_compute(){
        const data = update_form_item(areaName, getItem.getItem())
    }

    let umaname = ""
    if(getItem.getItem() != null){
        umaname = getItem.getItem().id
    }

    return (
      <div
        ref={drop}
        className={areaName}
      >

    <img 
      className="uma_image" 
      id={umaname} 
      src={`./images/${formData[areaName]}.png`} 
      value={umaname} 
      draggable="true" 
      key={umaname}/>
      </div>
    )
  }
