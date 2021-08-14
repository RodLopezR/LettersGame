import Styles from './Footer.module.css';

const FooterComponent = () => {
  return (
    <div className={Styles.container}>
      <div>
        Developed by{' '}
        <a href="https://rodlopezr.github.io/" target="_blank" rel="noreferrer">
          Rodrigo Lopez
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
