import Profile from "./Profile";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <Profile />
          <Navbar/>
        </div>
      </header>
    </>
  );
}
