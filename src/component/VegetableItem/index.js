import classNames from "classnames/bind";

import styles from './VegetableItem.module.scss';

const cx = classNames.bind(styles);
function  VegetableItem() {
    return ( 
        <div className={cx('vegetable-result')}>
            <img src="http://bizweb.dktcdn.net/thumb/grande/100/390/808/products/sup-lo.png?v=1592640869563" alt="vegetable" />
            <span className={cx('vegetable-name')}>Bông Cải Xanh</span>
        </div>
     );
}

export default VegetableItem ;