import { Link } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-between bg-dark text-white px-2">
        <div>
          <p className="Navtext text-white bg-dark ">
            Call us:{" "}
            <a href="tel:+919998198011" className="text-white text-decoration-none">
              +91 99981 98011
            </a>
            ,{" "}
            <a href="tel:+917433955222" className="text-white text-decoration-none">
              +91 74339 55222
            </a>
          </p>
        </div>
        <div className="flex-container">
          <div>
            <Link to='https://twitter.com/PratikAgro'><i className="bi bi-twitter text-light"></i></Link>
          </div>
          <div>
            <Link to='https://instagram.com/pratik.agro.exports?igshid=MmU2YjMzNjRlOQ=='><i className="bi bi-instagram text-light"></i></Link>
          </div>
          <div>
            <Link to='https://www.linkedin.com/company/pratik-agro-exports/'><i className="bi bi-linkedin text-light"></i></Link>
          </div>
          <div>
            <Link to='https://www.facebook.com/pratikagroexports'><i className="bi bi-facebook text-light "></i></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
