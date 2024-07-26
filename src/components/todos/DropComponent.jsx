import React, {useEffect} from "react";
import { Droppable } from 'react-beautiful-dnd'


export const DropComponent = ({droppableId, children}) => {

    const [ enabled, setEnabled ] = React.useState(false);
  
    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));
  
      return () => {
         cancelAnimationFrame(animation);
         setEnabled(false);
      };
    }, []);
  
    if (!enabled) {
        return null;
    }
  
    return (
      <Droppable droppableId={droppableId}>
         {children}
      </Droppable>
    );
  }