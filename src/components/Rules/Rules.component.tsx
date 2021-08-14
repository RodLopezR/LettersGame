import Styles from './Rules.module.css';
import StylesBox from '../Box/Box.module.css';
import clsx from 'clsx';

const RulesComponent = () => {
  return (
    <div className={clsx(Styles.container, 'noSelectUI')}>
      <strong>Box description:</strong>
      <div className={Styles.containerBoxes}>
        <div className={Styles.item}>
          Available
          <div className={clsx(StylesBox.box, Styles.box)}>
            <div className={clsx(StylesBox.text, Styles.text)}>A</div>
          </div>
        </div>
        <div className={Styles.item}>
          Selected
          <div className={clsx(StylesBox.box, StylesBox.selected, Styles.box)}>
            <div className={clsx(StylesBox.text, Styles.text)}>A</div>
          </div>
        </div>
        <div className={Styles.item}>
          Neighbor
          <div className={clsx(StylesBox.box, StylesBox.clickeable, Styles.box)}>
            <div className={clsx(StylesBox.text, Styles.text)}>A</div>
          </div>
        </div>
      </div>
      <strong>Rules:</strong>
      <div className={Styles.containerRules}>
        <div style={{ width: "100%", maxWidth: "450px", textAlign: "left" }}>
          <ul>
            <li>You must to click / tap into the letter boxes ☝️🅰️.</li>
            <li>When selecting the first frame, you will only be able to click on the neighboring frames of the frame that was clicked.</li>
            <li>You will win when you make a correct word with letters selected 🥳🥳.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RulesComponent;
