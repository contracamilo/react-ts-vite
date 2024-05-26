import { Header, Container, MenuItemBox } from "./components";
import { menuItems } from "./api/db";

function App() {
  const MenuList = menuItems.map((item) => (
      <MenuItemBox key={item.id} item={item} />
  ));

  return (
    <>
      <Header />
      <Container MenuList={MenuList} CheckList={undefined} />
    </>
  );
}

export default App;
