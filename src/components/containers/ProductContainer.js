import React, {Component,} from 'react'
// import axios from 'axios'

class Product extends Component {
    // constructor(props){
    //     super(props)
    //     this.addToBag = this.addToBag.bind(this)
    // }

    // addToBag(){
    //     axios.post('/bag', {bagId:this.props.bagId, productId: this.props.productId,quantity:1})
    //         .then(result => {
    //             this.props.update(result.data[0].bagid);
    //         })
    // }

    render(){
        return(
            <div className="product">
                <div className="name">{this.props.item}</div>
                <div className="desc">{this.props.description}</div>
                <div className="cost">${this.props.cost}</div>
                {/*<button className="bag-button" onClick={this.addToBag}>Add To Bag</button>*/}
            </div>
        )
    }
}

export default Product;