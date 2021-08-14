import clsx from "clsx";
import { FunctionComponent, useContext } from "react";
import BoxType from "../../types/BoxType";
import Styles from "./Box.module.css";

interface BoxProps {
  box: BoxType;
}

const BoxComponent: FunctionComponent<BoxProps> = ({
  box,
}) => {
  return (
    <div className={clsx(
      Styles.box,
      "noSelectUI",
    )}>
      <div
        className={Styles.text}
      >
        {box.letter}
      </div>
    </div>
  );
};

export default BoxComponent;
