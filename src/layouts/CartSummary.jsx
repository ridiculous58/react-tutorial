import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown,Label  } from 'semantic-ui-react';
import { cartItems } from '../store/initialValues/cartItems';

export default function CartSummary() {

    const {cart} = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItems) => (
                            <Dropdown.Item>
                                {cartItems.product.productName} &nbsp;
                                <Label>{cartItems.quantity}</Label>
                            </Dropdown.Item>
                        ))
                    }
                    
                    
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
