import PropTypes from 'prop-types';

import s from './Container.module.css';

function Container({ title, children }) {
  return (
    <div className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}

Container.defaultProps = {
  title: ' ',
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Container;
