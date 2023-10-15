import '../App.css'
import payload from './payload';
import { additem, removeitem } from '../Slices/cartslice';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
export default function Card() {
    const dispatch = useDispatch()
    const [placeholder, setPlaceholder] = useState('Add to Cart')
    const[cart,addCart]= useState([])

    function handleClick(i){
        if (!cart.find((e)=>e==i.id)) {
            dispatch(additem(i.price))
            addCart([...cart,i.id])
        }
        else if (cart.find((e)=>e==i.id)) {
             dispatch(removeitem(i.price))
            cart.splice(cart.indexOf(i.id),1)
            addCart([...cart])
        }
    }
    
    return (
        <div className='cardParent'>
            {payload.map((i) => {
                return (<div className='card'>
                    <img key={i.id} src={i.img}></img>
                    <h3>{i.description}</h3>
                    <h4>{i.price}</h4>
                    <button onClick={()=>handleClick(i)}>{cart.find((e)=>e==i.id)?'Remove from cart':'Add to Cart'}</button>
                </div>)


            })}
        </div>
    )


}