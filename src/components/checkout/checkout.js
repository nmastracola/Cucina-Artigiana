import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
let userId = 1;

import './checkout.css'

class Item extends Component{
    render(){
        return (
                <div className="item-checkout">
                    <div className="">
                    <img className="image-checkout" src={"../../media/" + this.props.image} alt="product"/>
                    </div>
                    <div className="checkout-text">
                    <div className="checkout-name">{this.props.item}</div>
                    <div className="checkout-quantity">Quantity: {this.props.qty}</div>
                    <div className="checkPrice">${this.props.subtotal}</div>
                    </div>
                </div>
        )
    }

}

class Checkout extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            subtotal: 0,
            total: 0
        }
    }

    onToken = (token) => {
        console.log(token);
        axios.post('http://localhost:3001/send-token/', {data: token, amount: Math.round(this.state.total*100)}).then((data) => {
            console.log(data)
            alert(`We are in business, ${data.email}`);
        });
    }

    getData(){
        axios.get(`http://localhost:3001/bag/${userId}`)
            .then(response =>{
                let total = response.data.reduce((a,item)=>{
                    item.subTotal = item.num * item.cost;
                    return a+item.subTotal;
                },0);
                this.setState({
                    items: response.data,
                    total
                })
            })
    }

    componentDidMount(){
        this.getData();
    }


    renderCheckoutItem(){
        if(this.state.items.length){
            return this.state.items.map((bag, index)=>{
                return(<Item
                    key={index}
                    itemId={bag.id}
                    item={bag.item}
                    image={bag.imgurl}
                    cost={bag.cost}
                    subtotal={bag.subTotal}
                    qty={bag.num}
                    increaseQty={this.increaseQty}
                    delete={this.clickedDelete}/>)
            })
        }
    }

    render(){
        return (
            <div className="checkout-page">
                <div className="title-wrapper">
                    <div className="checkoutText">Checkout</div>
                </div>
                    <div className="checkout-container">
                    {this.renderCheckoutItem()}
                        <StripeCheckout
                            token={this.onToken}
                            stripeKey="pk_test_FmhAq6efDHv5vJPfqLpxzRhp"
                            amount={this.state.total * 100}
                            shippingAddress={false}
                        />
                    </div>
            </div>
        )
    }
};

export default Checkout;
export { Item }
