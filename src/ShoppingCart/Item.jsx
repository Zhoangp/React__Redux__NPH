import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createAction } from "../Store/index";

class Item extends Component {
  /*    addToCart = (prod) => {
        console.log(prod)
        const cloneCart = [...this.props.cartSelected];

        const foundIndex = cloneCart.findIndex((item) => {
            return item.product.id === prod.id
        });
        if(foundIndex === -1) {
            console.log(foundIndex)
            const cartItem = {product: prod, quantity: 1}
            cloneCart.push(cartItem);

        }
        else  {
            console.log(foundIndex)
            cloneCart[foundIndex].quantity++;
        }
     

       return cloneCart;
    }; */
        selected = (type, notify) => () =>  {
            this.props.dispatch(createAction(notify,type));
        };
    render() {
        const {img, name} = this.props.item
        return (
            <div>
                    <div className="card p-3">
                    <img src={img} alt="img" style={{width: "100%", height: "250px"}} />
                    <h3 className="text-center">{name}</h3>
                    <div>
                    <button className="btn btn-info mr-2" onClick={this.selected(this.props.item, "set_id")}>Detail</button>
                    <button className="btn btn-danger" onClick={this.selected(this.props.item, "add_cart")}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

/* export default Item; */
const mapStateToProps = (state) => {
    return {
        cart: state.CartReducer.cart,
        cartSelected: state.CartSelected.cartSelected,
    }
  } 
  export default connect(mapStateToProps, null)(Item)