import React, { Component } from 'react';
import ListItem from './ListItem';
import Cart from './Cart';
import Detail from './Detail';
class Home extends Component {
    
        render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <h3  data-toggle="modal" data-target="#modelId" className="text-center">Cart</h3>            
                <Cart></Cart>
                <ListItem></ListItem>
                <Detail></Detail>
            </div>
        );
    }
}

export default Home;