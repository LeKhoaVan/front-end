import classNames from "classnames/bind";

import styles from './SaleItem.module.scss';

const cx = classNames.bind(styles);
function SaleItem() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src="https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg" alt="rau" />
            </div>

            <div className={cx('title')}>
                <span>Cải Salad</span>
            </div>

            <div className={cx('price')}>
                <span>150.000đ</span>
            </div>
        </div>
     );
}

export default SaleItem;