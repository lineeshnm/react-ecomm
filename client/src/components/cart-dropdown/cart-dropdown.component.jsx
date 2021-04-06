import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { CartDropdownContainer, CartItemContainer, EmptyMessageSpan, CustomButtonContainer } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemContainer>
            {
                cartItems.length ? (
                cartItems.map(cartItem => 
                    <CartItem 
                        key={cartItem.id} 
                        item={cartItem} 
                    />
                    )
                ) : 
                <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
            }
        </CartItemContainer>
        <CustomButtonContainer 
            onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }
        }> GO TO CHECKOUT </CustomButtonContainer>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));