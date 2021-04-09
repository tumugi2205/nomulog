import React, {useMemo} from 'react'
import { useDrop, DropTarget } from 'react-dnd'


export default function DropZone({ areaName, formData, updateFormItem, sortUmaIcon, racePoint }) {
    const [_, dropRef] = useDrop(() => ({
      accept: "UmaItem",
      drop: (item) => {
      updateFormItem(areaName, item.id, racePoint)
        if(areaName == "ME"){
          sortUmaIcon(item.id)
        }
      }
    }))

    const umaName = useMemo(() => {
      return formData[areaName]
    }, [formData, areaName])

    return (
      <div
        ref={dropRef}
        className={areaName}
      >
        <img 
          className="uma_image" 
          id={umaName} 
          src={`./images/${umaName}.png`} 
          value={umaName} 
          draggable="true" 
          key={umaName}
        />
      </div>
    )
  }
