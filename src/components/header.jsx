import { pushRotate as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { motion } from "framer-motion";
import Dropstyles from "./dropstyles";
import Comparison from "../components/comparison";

const Header = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:h-40">
      <div className="lg:hidden">
        <Menu>
          <div className="grid grid-rows-5">
            <div>
              <AnchorLink href="#">Accueil</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#">Styles</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#">Comparison Pages</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#">blabla</AnchorLink>
            </div>
          </div>
        </Menu>
      </div>
      <motion.div className="lg:col-start-2 lg:flex hidden lg:items-center lg:justify-center">
        <nav className="text-white">
          <ul className="lg:flex">
            <li>
              <AnchorLink
                href="#home"
                className="hover:scale-125 hover:ease-in"
              >
                Accueil
              </AnchorLink>
            </li>
            <li>
              <Dropstyles />
            </li>
            <li>
              <Comparison />
            </li>
            <li className="lg:pl-5">
              <AnchorLink
                href="#contact"
                className="hover:scale-125 hover:ease-in"
              >
                blabla
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default Header;
