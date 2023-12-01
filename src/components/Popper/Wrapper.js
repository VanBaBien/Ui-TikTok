import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Popper.module.scss';

const cx = classNames.bind(style);

function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default wrapper;
