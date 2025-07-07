import logoImg from '../assets/logo.jpg'
import Modal from "./Modal";
import Cart from './Cart';
import { useCallback, useContext, useRef, useState } from 'react'
import { FoodOrderAppContext } from '../store/FoodOrederAppContext'
import Checkout from './Checkout';



export default function Header(){
    
    const [modalContent, setModalConten] =useState('cart')
    const {cart}= useContext(FoodOrderAppContext)
    const modal =useRef()
    
    const mealCount =cart.reduce((acc, meal)=>{
        return acc = acc + meal.count
    },0)
    
    const cartClickHandler = ()=>{
        modal.current.open()
    }

    const checkoutClickHandler = ()=>{
        setModalConten('checkout')
    }

    const closeBtnClickHandler = useCallback(()=>{
            modal.current.close()
            setModalConten('cart')
        }
    ,[])

    return(
            <>
                <header id='main-header'>
                    <div id='title'>
                        <img src={logoImg} alt='App logo'/>
                        <h1>ReactFood</h1>
                    </div>
                    <button className='text-button' onClick={cartClickHandler}>
                        <p>
                            <span>Card </span>
                            <span>({mealCount})</span>
                        </p>
                    </button>
                </header>
                <Modal ref={modal} closeBtnClickHandler={closeBtnClickHandler}>
                    {modalContent==='cart'&&<Cart checkoutClickHandler={checkoutClickHandler} closeBtnClickHandler={closeBtnClickHandler}/>}
                    {modalContent==='checkout'&&<Checkout closeBtnClickHandler={closeBtnClickHandler}/>}
                </Modal>
            </>
    )
}