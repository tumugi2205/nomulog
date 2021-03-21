import React, { Component } from 'react';
import "./Test.css";
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function Board() {
  /* ... */
  return <DndProvider backend={HTML5Backend}>...</DndProvider>
}

function Box() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
      <div role="Handle" ref={drag}></div>
    </div>
  )
}

function Bucket() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  return (
    <div
      ref={drop}
      role={'Dustbin'}
    >
    </div>
  )
}

class Test extends Component {
  render() {
    return (
      <div className="App">
        <Box/>
        <div className="drag" ></div>
        <div className="drop_area"></div>
      </div>
    );
  }
}

export default Test;