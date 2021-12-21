import { motion } from "framer-motion";

const MobileMenu = ({ isOpen }) => {
  return (
    <motion.article
      className="mobile-menu"
      animate={{
        height: isOpen ? "auto" : "0rem",
        marginTop: isOpen ? "1em" : "0em",
      }}
      initial={{
        height: "0rem",
        marginTop: "0rem",
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        duration: 5,
      }}
    >
      <ul className="mobile-menu-list">
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>Add Food</h3>
        </li>
        <li>
          <h3>Food Diary</h3>
        </li>
        <li>
          <h3>Summary</h3>
        </li>
        <li>
          <h3>Setting</h3>
        </li>
        <li>
          <h3>Simulate</h3>
        </li>
      </ul>
    </motion.article>
  );
};
export default MobileMenu;
