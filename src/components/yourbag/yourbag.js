import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
let userId = 1;
import './yourbag.css'

class BagItem extends Component {
    Clicked = (e) => {
        // let cost = this.props.cost;
        console.log(e.target.value, 'this is the target value');
        this.props.increaseQty(this.props.itemId, e.target.value);
    };

    handleDelete = () =>{
        this.props.delete(this.props.itemId)
    };

    render(){
        return(
                <div className="bagitem">
                    <div>
                    <img className="bagimage" src={"../../media/" + this.props.image}  alt="product"/>
                    </div>
                    <div className="name">{this.props.item}</div>
                    <div className="productInfo">
                        <div className="productPrice">${this.props.subtotal}</div>
                        <div className="number-wrapper">
                            <input type="number" id='qty' className="inputQty" value={this.props.qty} onChange={this.Clicked}/>
                        </div>
                        <button className="delete" onClick={this.handleDelete}>Remove</button>
                    </div>
                </div>
        )
    }
}

class YourBag extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            total: 0,
            subtotal: 0,
            num: 1
        }
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
        this.getData()
    }

    updateSubtotal() {
        let total = this.state.items.reduce((a,item)=>{
            item.subTotal = item.num * item.cost;
            return a+item.subTotal;
        },0)
        this.setState({
            total
        })
    }

    increaseNum = (id, num) => {
        axios({
            method: 'PUT',
            url: 'http://localhost:3001/bag/' + id,
            data: {id: id, num:Number(num)}
        }).then(r => {
            console.log(r);
            this.getData()
        })
    };

    clickedDelete = (id) =>{
        axios({
            method: 'DELETE',
            url: 'http://localhost:3001/bag/' + id
        }).then(r =>{
            this.getData();
        })
    };
    renderBagItem(){
        if(this.state.items.length){
            return this.state.items.map((val, index)=>{
                return(<BagItem
                    key={index}
                    itemId={val.id}
                    image={val.imgurl}
                    item={val.item}
                    price={val.cost}
                    qty={val.num}
                    subtotal={val.subTotal}
                    increaseQty={this.increaseNum}
                    delete={this.clickedDelete}/>)
            })
        }
    }

    render(){
        return(
            <div className="bag-page">
                <div className="title-wrapper">
                <div className="in-the-bag">What's in your bag?</div>
                </div>
            <div className='bag-container'>
                {this.renderBagItem()}
                <div className="subtotal">
                    <h6>Subtotal</h6>
                    <div className="subtotalAmount">${Number((this.state.total).toFixed(2))}</div>
                </div>
                <br/>
                <Link to="/" className="shopping-link">
                    Continue Shopping?
                </Link>
                <Link to='checkout' className="checkout-link">
                    Go to Checkout?
                </Link>
            </div>
            </div>
        )
    }
}

export default YourBag;
