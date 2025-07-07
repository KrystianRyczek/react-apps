import { useContext, useEffect, useRef, useState } from "react"
import { FoodOrderAppContext } from "../store/FoodOrederAppContext"
import { currencyformater } from "../helpers/formatig-price"
import { userInputDataSchema } from "../helpers/user-input-data-schema"
import { Formik, Form } from 'formik';
import Input from './Input'


export default function Checkout({closeBtnClickHandler}){
    const timer = useRef()
    const {cart, checkoutHandler} = useContext(FoodOrderAppContext)

    const [submitingState, setSubmitingState] = useState({
        isSubmiting:false,
        isError:null,
        errorMsg:undefined,
    })
    const submitBtnClickHandler = async(values, actions)=>{

        setSubmitingState(
            (prevState)=>{
                return{...prevState, isSubmiting:true}
            })
        const customerData = {
            email: values.email, 
            name: values.name, 
            street:values.street, 
            'postal-code':values.code, 
            city:values.city
        }
        
        try{
            const response = await fetch('http://localhost:3000/orders', {
                method:'POST',
                "use_safe_mode": 1,
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order:{
                        items:cart,
                        customer: customerData
                    }
                })
            })
            const data = await response.json()

            if(!response.ok){

                setSubmitingState(
                    (prevState)=>{
                        return{...prevState, 
                               isSubmiting:false, 
                               isError:true, 
                               errorMsg:(response.status + ' ' + data.message)}
                    })

                throw new Error( data.message? (response.status + data.message): "Submiting order failed!");
            }

            setSubmitingState(
                (prevState)=>{
                    return{...prevState, isSubmiting:false}
                })

            actions.resetForm()
            checkoutHandler()
            closeBtnClickHandler()

        }catch(e){

            setSubmitingState((prevState)=>{
                return{...prevState, isError:true}
            })
        }
    }

    const totalPrice = cart.reduceRight((acc, meal)=>{
        return acc = acc + meal.price*meal.count
    },0)

    useEffect(()=>{

        if(submitingState.isError){
            timer.current =  setTimeout(()=>{
                console.log("timeout")
                closeBtnClickHandler()
            },5000)
        }

        return(
            clearTimeout(timer.current)
        )
    },[submitingState, timer, closeBtnClickHandler])


    if(submitingState.isError){

        return(
            <div className="error-box">
            <div className="error">
                <h2>Error!</h2>
                <p>{submitingState.errorMsg?submitingState.errorMsg:'Something went wrong!'}</p>
 
            </div>
            <button type="button" onClick={closeBtnClickHandler} className='text-button'>close</button>
            </div>


        )
    }

    return(

            <Formik
                name="submitOrder"
                validationSchema={userInputDataSchema}
                initialValues={{email:"", name:"" , street:"", code:"", city:""}} 
                onSubmit={(values, actions) =>{submitBtnClickHandler(values, actions)}}
                >
                <Form name="submitOrder" className="control">
                    <h2>Checkout</h2>
                    <p> Totoal amount: {currencyformater(totalPrice)}</p>
                    <Input label='name' placeholder='Full Name' type='text'/>
                    <Input label='email' placeholder='Email' type='email'/>
                    <Input label='street' placeholder='Street' type='text'/>

                    <div className="control-row">
                        <Input label='code' placeholder='Postal Code' type='text'/>
                        <Input label='city' placeholder='City' type='text'/>
                    </div>
                    <p className="modal-actions">
                        <button type="button" onClick={closeBtnClickHandler} className='text-button'>Close</button>
                        <button type="submit" className='button' disabled={submitingState.isSubmiting}>{submitingState.isSubmiting?'Submiting order...':'Submit'} </button>
                    </p>
                </Form>
            </Formik>

    )
}