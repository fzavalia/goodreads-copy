import React, { useEffect, useRef } from "react";
import styles from "./menu.module.sass";

type MenuProps = {
  show: boolean;
  button: React.MutableRefObject<HTMLDivElement>;
  items: string[];
  onClose: () => void;
};

const Menu = ({ show, button, items, onClose }: MenuProps) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handle = (event: any) => {
      if (
        show &&
        !ref.current.contains(event.target) &&
        !button.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, [show, onClose]);

  return (
    show && (
      <div ref={ref} className={styles.menu}>
        {items.map((i) => (
          <a key={i}>{i}</a>
        ))}
      </div>
    )
  );
};

export default Menu;
