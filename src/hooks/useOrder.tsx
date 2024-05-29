import { useState } from "react"
import { MenuItem, OrderItem } from "../types/dataSchema"

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        const existingItem = order.find((orderItem) => orderItem.id === item.id)

        if(existingItem){
            //Evaluate duplicate item and increment quantity
            const updatedOrder = order.map((orderItem) => orderItem.id === item.id ?
                   {...orderItem, quantity: orderItem.quantity + 1} : orderItem
            )
            setOrder(updatedOrder);

        }else{
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
      const orderListWithRemovedItems = order.filter((orderItem) => orderItem.id !== id);
      setOrder(orderListWithRemovedItems);  
    }

    const storeOrder = () => {
      setOrder([]);
      setTip(0);
      // TODO add logic to write order to database
      console.log("placed order")
    }


  return {
    order,
    tip, 
    setTip,
    addItem,
    removeItem,
    storeOrder
  }
}
