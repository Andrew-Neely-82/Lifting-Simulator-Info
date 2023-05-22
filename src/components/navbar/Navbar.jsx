import { links } from './index.js';
import './style.scss';

const Navbar = () => {
  return (
    <>
      <div className="Navbar_">
        <div className="Navbar_title">Lifting Simulator Info</div>
        <div className="Navbar_links-container">
          <ul>
            {links.map((links, key) => {
              return (
                <li key={key}>
                  <a href={links.href}>{links.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="Navbar_under"></div>
    </>
  );
};

export default Navbar;
