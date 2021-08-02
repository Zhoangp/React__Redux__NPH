const stateCartSelected = {
    cartSelected: []
}
export const CartSelected = (state = stateCartSelected, action) => {
    switch(action.type) {
    case "add_cart":
        console.log(124);
            console.log(action.payload)
            const cloneCart = [...state.cartSelected];
    
            const foundIndex = cloneCart.findIndex((item) => {
                return item.product.id === action.payload.id
            });
            if(foundIndex === -1) {
                const cartItem = {product: action.payload, quantity: 1}
                cloneCart.push(cartItem);
            }
            else  {
                cloneCart[foundIndex].quantity++;
            }
            state.cartSelected = cloneCart
        /* state.cartSelected = action.payload */
        return {
            ...state, 
        };
    case "increase":
        console.log(122);
        const cloneCart2 = [...state.cartSelected];
        const foundIndex2 = cloneCart2.findIndex((item) => {
            return item.product.id === action.payload;
        });
        if(foundIndex2 === -1) return;
        else {
            cloneCart2[foundIndex2].quantity++;
        }
        state.cartSelected = cloneCart2;
        return {
            ...state
        };
    case "reduce":
        console.log(111)
        const cloneCart3 = [...state.cartSelected];
        const foundIndex3 = cloneCart3.findIndex((item) => {
            return item.product.id === action.payload;
        })
        if(foundIndex3 === -1) return;
        else {
            if(cloneCart3[foundIndex3].quantity === 1) {
                cloneCart3.splice(foundIndex3, 1)
            }
            else {
            cloneCart3[foundIndex3].quantity--;
            }
        }
        state.cartSelected = cloneCart3;
        return {
            ...state
        }
        case "delete":
            const cloneCart4 = [...state.cartSelected];
            const foundIndex4 = cloneCart4.findIndex((item) => {
                return item.product.id === action.payload;
            })
            if(foundIndex4 === -1) return;
            else {
                cloneCart4.splice(foundIndex4, 1)
            }
            state.cartSelected = cloneCart4;
            return {
                ...state
            }
    default:
        return state;

    }

}