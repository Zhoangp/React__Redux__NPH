import React, { Component } from 'react';
import {connect} from 'react-redux'
import Item from './Item';
class ListItem extends Component {
    
    renderItem = () => {
        return this.props.cart.map((item) => {
            return <div className="col-3">
                        <Item item={item}></Item>
             </div>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                {this.renderItem()}

                </div>
            </div>
        );
    }
}

/* export default ListItem; */
const mapStateToProps = (state) => {
    return {
        cart: state.CartReducer.cart,
        selectedDetail: state.CartReducer.selectedDetail,
        cartSelected: state.CartSelected.cartSelected,
    }


}
export default connect(mapStateToProps, null)(ListItem)