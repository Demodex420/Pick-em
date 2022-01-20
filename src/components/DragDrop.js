import axios from 'axios'
import {useState, useEffect} from 'react'
import Item from './Item'
import {useDrop} from 'react-dnd'

    
const DragDrop = () => {


  const URL = 'https://api.mockaroo.com/api/6bc95e10?count=30&key=0f908e40'
  const [loading, setLoading] = useState(false)    
  const [grocery, setGrocery] = useState([])

    
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get(URL)
      .then((res) =>
          setGrocery(res.data),
          setLoading(true))
      .catch((err) => console.error(err))
  }
    console.log(grocery)

    const [board, setBoard] = useState([])
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "grocery",
        drop: (grocery) => addImageToBoard(grocery.id),
         collect: (monitor) => ({
            isOver: !!monitor.isOver(),
      }),
 }))

            const addImageToBoard = () => {
                console.log(grocery.id)
            }

    return(

    <>
            <div className="items" >
            {loading ? 
                grocery.map((item, index) => (
                  <Item key={index} item={item}/>
            )) : <p>Load Items...</p>}
            </div>
            <div className="board" ref={drop}>
    
                {board.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
    </>
    )
}

export default DragDrop