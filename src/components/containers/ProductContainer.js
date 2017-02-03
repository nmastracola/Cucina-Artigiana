import React, {Component,} from 'react'
import {Motion, spring} from 'react-motion'
// import axios from 'axios'

class Product extends Component {
    constructor(props){
        super(props);
        // this.addToBag = this.addToBag.bind(this);
        this.state = {
            rotate: 0
        }
    }

    // addToBag(){
    //     axios.post('http://localhost:3001/bag', {bagId:this.props.bagId, productId: this.props.productId,quantity:1})
    //         .then(result => {
    //             this.props.update(result.data[0].bagid);
    //         })
    // }

    render(){
        const {rotate} = this.state;
        return(
            <Motion style={{y: spring(rotate)}}>
                {({y}) =>
                    <div
                        className="item"
                        style={{transform: `rotateY(${y}deg)`}}
                        onClick={() => this.setState({rotate: rotate + 180})}
                        onRest={() => {
                            if (this.state.rotate > 360) {
                                this.setState({rotate: 0})
                            }
                        }}
                    >
                        <div className="front">
                            <div className="img-container"><img className="image" src={"../../media/" + this.props.image} alt="product"/>
                            </div>
                            <div className="text-container">
                                <div className="name">{this.props.item}</div>
                                <div className="desc">{this.props.description}</div>
                                <div className="cost">{this.props.cost}</div>
                            </div>
                        </div>
                        <div className="item back">
                            <div className="button-container">
                            <button className="bag-button" onClick={this.addToBag}>Add To Bag?</button>
                            </div>
                        </div>
                    </div>
                }
            </Motion>
        )
    }
}

export default Product;