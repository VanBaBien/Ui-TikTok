import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import style from './AccountsItem.module.scss';

const cx = classNames.bind(style);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avt')}
                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/395313516_1413778222540318_2008103729048368215_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1weyQ6b383sAX_KoMA9&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDy_rzHpz5xreACWDrBNlO6GxWFAGiJ7HPs5mPXvIZqqg&oe=65545BA3"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenVanA</span>
            </div>
        </div>
    );
}

export default AccountsItem;
