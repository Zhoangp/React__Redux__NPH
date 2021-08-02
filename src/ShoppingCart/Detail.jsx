import React, { Component } from 'react';
import {connect} from 'react-redux';
class Detail extends Component {
    showDetail = (item) => {
            return <div className="container mt-5">
            <div className="row">
              <div className="col-4">
                <h4>{item.name}</h4>
                <img src={item.img} alt="product" className="w-100" />
              </div>
              <div className="col-8">
                <h4>Thông số kĩ thuật</h4>
                <table className="table">
                  <tr>
                    <td>Màn hình</td>
                    <td>{item.screen}</td>
                  </tr>
                  <tr>
                    <td>Camera Trước</td>
                    <td>{item.frontCamera}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{item.backCamera}</td>
                  </tr>
                  <tr>
                    <td>Mô tả</td>
                    <td>{item.desc}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        }
    render() {
        return (
            <div>
              {this.props.selectedDetail ? this.showDetail(this.props.selectedDetail) : null}
            </div>
        );
    }
}

/* export default Detail; */
const mapStateToProps = (state) => {
    return {
        cart: state.CartReducer.cart,
      selectedDetail: state.CartReducer.selectedDetail,

    }
}
export default connect(mapStateToProps, null)(Detail)