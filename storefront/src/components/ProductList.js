import React from 'react';
import dummyProducts from '../api/dummyProducts';
import './ProductList.css';

const apiKey = process.env.REACT_APP_API_KEY;

class ProductList extends React.Component{
    state = { products: [] };
    listAllProducts = async () => {
        const response = await dummyProducts.get(`/api/v1/products/?apikey=${apiKey}`);
        this.setState({ products: response.data.data });
        console.log(this.state.products);
    }
    render(){
        const productList = this.state.products.map(({ product_name, _id, product_image_sm, product_price }) => {
            return (
                <div className="ui card product-card" key={_id}>
                    <div className="image">
                        <img src={product_image_sm} />
                    </div>
                    <div className="content">
                        <div className="header">
                            {product_name}
                        </div>
                        <div className="extra content">
                            {product_price}
                        </div>
                    </div>                
                </div>
            );
        });
        return(
            <div>
                
                <div className="product-list-view">
                    <h1>All products</h1>
                    <button onClick={this.listAllProducts}>Click here to get products</button>
                    <div className="product-card-list">{productList}</div>
                </div>
            </div>
            
            
        );
    }
}

export default ProductList;