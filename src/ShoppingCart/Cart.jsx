import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createAction } from '../Store/index';
class Cart extends Component {
    selected = (type, id) => () =>  {
        this.props.dispatch(createAction(type, id));
    }
    renderCart = () => {
        const cartHTML = this.props.cartSelected.map((item) => {
          const { id, name, img, price } = item.product;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <img style={{ width: 100 }} src={img} alt="product" />
              </td>
              <td>
                <button className="btn btn-info"  onClick={this.selected("reduce", id)}>-</button>
                <span>{item.quantity}</span>
                <button
                  onClick={this.selected("increase", id)}
                  className="btn btn-info"
                >
                  +
                </button>
              </td>
              <td>{price}</td>
              <td>{price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={this.selected("delete", id)}
                >
                  Xoá
                </button>
              </td>
            </tr>
          );
        });
        return cartHTML;           
      };
    render() {
        return (
            <div>
                  <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                     <tbody>{this.renderCart()}
                     </tbody> 
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        cartSelected: state.CartSelected.cartSelected
    }
}
export default connect(mapStatetoProps, null)(Cart)
/* export default Cart; */