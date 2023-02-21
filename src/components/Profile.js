import SocialMedia from "./SocialMedia";
import data from "../data/socialmedia.json";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <img
          src="./assets/img/profile-img.jpg"
          alt="profile-pic"
          className="img-fluid rounded-circle"
        />
        <h1 className="text-light">
          <a href="index.html">Rajesh Nangar</a>
        </h1>
        <div className="social-links mt-3 text-center">
          <SocialMedia elements={data} />
        </div>
      </div>
    </>
  );
}
