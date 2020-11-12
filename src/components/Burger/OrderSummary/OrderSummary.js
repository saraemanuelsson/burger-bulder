import React from "react"
import Aux from "../../../hoc/aux"
import Button from "../../UI/Button/Button"

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    return <li key={ingredientKey}><span style={{textTransform: "capitalize"}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="danger" clicked={props.purchaseCancelled} >CANCEL</Button>
            <Button btnType="success" clicked={props.purchaseContinued} >CONTINUE</Button>
        </Aux>
    )

}

export default OrderSummary