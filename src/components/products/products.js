import React, { Component,} from 'react';
import axios from 'axios';
import Product from '../containers/ProductContainer'

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/products/')
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
            <div className="products-view">
                {this.renderProducts()}
            </div>
        );
    }
}

export default Products;
