import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Button, Flex } from 'theme-ui';
import { useShoppingCart } from 'use-shopping-cart';

function ShoppingCartIcon() {
  const { cartCount, handleCartClick } = useShoppingCart();
  const [count, setCount] = useState();
  useEffect(() => {
    setCount(cartCount);
  });

  const countDescription =
    count === 1
      ? 'There is 1 item in your cart'
      : `There are ${count} items in your cart`;

  return (
    <Button
      variant='header'
      onClick={handleCartClick}
      aria-label='Checkout'
      aria-describedby='cart-count-description'
      sx={{
        display: 'flex',
        transition: 'all .2s ease',
        background: 'transparent',
        padding: 0,
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}>
      <FaShoppingCart size={30} />
      {count === 0 ? null : (
        <Flex
          as='span'
          sx={{
            flexDirection: 'column',
            position: 'relative',
            bottom: '16px',
            right: '8px',
            backgroundColor: 'teal',
            borderRadius: '50%',
            height: '32px',
            width: '32px',
            justifyContent: 'center',
            backgroundColor: 'gray',
          }}>
          {count}
        </Flex>
      )}
      <span id='cart-count-description' className='visually-hidden'>
        {countDescription}
      </span>
    </Button>
  );
}

export default ShoppingCartIcon;
