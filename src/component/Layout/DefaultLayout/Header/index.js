import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleXmark, faMagnifyingGlass, faPen, faSignOut, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import VegetableItem from '../../../VegetableItem';
import Popper from '../../../Popper';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('innerHeader')}>
                <div className={cx('logo')}>
                    <Link to={'/'} >
                        <img src='https://static.ybox.vn/2021/5/2/1621915879143-cua-hang-tuoi-ngon-store-avatar.png' alt='logo' />
                    </Link>
                </div>

                <Tippy
                    interactive
                    delay={[0,300]}
                    placement='bottom-end'
                    render={(attrs) => (
                        <div className={cx('rearch-result')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <VegetableItem />
                                <VegetableItem />
                                <VegetableItem />
                                <VegetableItem />
                                <VegetableItem />
                                <VegetableItem />
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type='text'
                            placeholder='Bạn cần tìm gì'
                        />
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('btn-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('btn-find')} >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Tippy
                        delay={[0,300]}
                        interactive
                        render={(attrs) => (
                            <div className={cx('connect')} >
                                <Popper>
                                    <div className={cx('information')}>
                                        <span>
                                            Tên: My Name <br/>
                                            Địa chỉ: 12 Nguyên Văn Bảo <br/>
                                            Số điện thoại: 012345678 <br/>
                                        </span>

                                    </div>

                                    <button className={cx('repair-info')}>
                                        <FontAwesomeIcon icon={faPen} /> Thay đổi Thông tin
                                    </button>

                                    <button className={cx('logout')}>
                                        <FontAwesomeIcon icon={faSignOut} /> Log out
                                    </button>
                                </Popper>
                            </div>
                        )}
                    >
                        <div className={cx('account')}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>My Name</span>
                        </div>
                    </Tippy>
                    <button className={cx('cart')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;