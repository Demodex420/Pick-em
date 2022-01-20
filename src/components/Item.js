
import {useDrag} from 'react-dnd'

const Item = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "grocery",
    item: {id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    }))
  console.log(item)



  return (
    <>
     { !item ?
      <p>Items loading...</p>
      :
        <a href={drag} style={{border: isDragging ? "5px solid pink" : "0px"}}>
            <li>
             <img className="item-icon" src={item.image} alt=""/>
            <p className="item-name">{item.name}</p>
            
          </li>
        </a>
    }
    
    
    
    </>
    
      
    
  

  );
};

export default Item;
