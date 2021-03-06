import React, { Component,} from 'react';
import axios from 'axios';
import Product from '../containers/ProductContainer'
import './bread.css'

class Bread extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/bread')
            .then(response => {
                console.log(response.data);
                this.setState({
                    products: response.data
                })
            })
    }

    renderProducts(){
        if(this.state.products){
            return this.state.products.map((product) => {
                return (<Product key={product.id}
                                 image={product.imgurl}
                                 item={product.item}
                                 description={product.description}
                                 cost={product.cost}
                                 productId={product.id}/>)
            });
        }
    }
    render() {
        return (
            <div className="page-wrapper">
                <div className="title-wrapper">
                    <h1 className="title"> The Bread </h1>
                </div>
                <div className="products-view">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default Bread;