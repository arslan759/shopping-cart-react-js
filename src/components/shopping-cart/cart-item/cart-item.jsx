import React from 'react'
import './cart-item.css'
import Link from '../../link/link'
import OperatorBtn from '../../Button/operator-btn/operator'

function CartItem({item_pic , item_name , item_volume , item_price , item_total , add , minus}) {
  return (
    <div className='item'>
        <div className="item-pic">
            <div className='img'>
                <img src={item_pic} alt="item-image" />
            </div>
        </div>
        <div className="item-details">
            <div className='item-info'>
                <h3>{item_name}</h3>
                <p>{item_volume}ml</p>
                <div className='badge-main'><div className='badge'></div></div>
            </div>
            <div className='item-quantity'>
                <div>
                <OperatorBtn onClick={minus} className='operator-btn' operator={'-'}/>
                </div>
                <span>{item_total}</span>
                <div>
                <OperatorBtn onClick={add}className='operator-btn' operator={'+'}/>
                </div>
            </div>
            <div className='item-price'>
                <h3>${item_price}</h3>
                <Link clr={'blue'} href={'#'} text={'Save for later'} />
                <Link clr={'red'} href={'#'} text={'Remove'} />
            </div>
        </div>
    </div>
  )
}

export default CartItem