import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequirAuth from "./Pages/Authentication/RequirAuth";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import MyItems from "./Pages/MyItems/MyItems";
import Footer from "./Pages/Sheared/Footer/Footer";
import Header from "./Pages/Sheared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/inventory"
          element={
            <RequirAuth>
              <ManageInventory />
            </RequirAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequirAuth>
              <Inventory />
            </RequirAuth>
          }
        />
        <Route
          path="/add_items"
          element={
            <RequirAuth>
              <AddItems />
            </RequirAuth>
          }
        />
        <Route
          path="/my_items"
          element={
            <RequirAuth>
              <MyItems />
            </RequirAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
