//import react from 'react'
import '../App.css';
import {useSelector} from 'react-redux'
export default function Navbar(){
    const cart= useSelector(state=> state)
    var arr= cart.cart
    var sum=0;
    for (var i=0; i<arr.length;i++){
        sum= sum+arr[i]
    }
    return(
        <div className='nav'>
            <h1>Items in cart: {arr.length}</h1>
            <h1>Order total: {sum}</h1>
        </div>
    )
}