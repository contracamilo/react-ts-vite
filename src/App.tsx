import { Header, Container, MenuItemBox, Order } from "./components";
import { menuItems } from "./api/db";
import { useOrder } from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem } = useOrder();
  const MenuList = menuItems.map((item) => (
      <MenuItemBox key={item.id} item={item} onOrderClick={addItem}/>
  ));

  const OrderContent = () => {
    return <Order order={order} removeItemFromOrder={removeItem}/>
  }; 

  return (
    <>
      <Header />
      <Container MenuList={MenuList} OrderContent={OrderContent} />
    </>
  );
}

export default App;
