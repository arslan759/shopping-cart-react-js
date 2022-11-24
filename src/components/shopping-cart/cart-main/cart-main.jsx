import { useState , useEffect } from 'react'
import './cart-main.css'
import CartItem from '../cart-item/cart-item'
import Link from '../../link/link'
import CheckoutBtn from '../../Button/checkout-btn/checkout'

function CartMain() {
    const itemData = [
    {
      id: 0,
      countt: 0,
      name: "Apple Juice",
      volume: 250,
      inStock: 20,
      quantity: true,
      price: 2.99,
      image:
        "https://media.naheed.pk/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/1/2/1219483-1.jpg",
    },
    {
      id: 1,
      countt: 0,
      name: "Grapes Juice",
      volume: 500,
      inStock: 10,
      quantity: false,
      price: 3.19,
      image:
        "https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1033730-1.jpg",
    },
  ];

  const [item, setItem] = useState(itemData);
  const [total, setTotal] = useState(0.00);

//   useEffect(() => {
//     let temp2 = total
//     temp2 = count[0]*item[0].price + count[1]*item[1].price
//     setTotal(temp2.toFixed('2'))
//   });

  function add(i) {
    let temp = [...item]
    let totall = total
    let j = 0
    i==0 ? j++ : j=0
    temp[i].countt < temp[i].inStock ? temp[i].countt++ : temp[i].countt=temp[i].inStock
    totall = temp[i].countt*temp[i].price + temp[j].countt*temp[j].price
    setItem(temp)
    setTotal(totall.toFixed('2'))
  }

  function minus(i) {
    let temp = [...item]
    let totall = total
    let j = 0
    i==0 ? j++ : j=0
    temp[i].countt >0 ? temp[i].countt-- : temp[i].countt= 0
    totall = temp[i].countt*temp[i].price + temp[j].countt*temp[j].price
    setItem(temp)
    setTotal(totall.toFixed('2'))
  }

  return (
    <div className='shopping-cart'>
        <div className='cart-header'>
            <h2>Shopping Cart</h2>
            <div>
                <Link text={'Remove all'} clr='red' href={'#'} />
            </div>
        </div>
        <div className='cart-items'>
        {item.map((item) => (
          <CartItem
            add={()=>add(item.id)}
            minus={()=>minus(item.id)}
            item_pic={item.image}
            item_name={item.name}
            item_price={item.price}
            item_volume={item.volume}
            item_stock={item.inStock}
            item_total={item.countt}
          />
        ))}
        </div>
        <div className='total-checkout'>
            <div className='sub-total'>
                <div className='total-items'>
                    <h3>Sub-Total</h3>
                    <p>{item.length} items</p>
                </div>
                <div className='total-price'>
                    <h1>${total}</h1>
                </div>
            </div>
            <div>
                <CheckoutBtn />
            </div>
        </div>
    </div>
  )
}

export default CartMain