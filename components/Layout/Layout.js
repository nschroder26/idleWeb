import MyNavbar from "../Navigation/MyNavbar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MyNavbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
