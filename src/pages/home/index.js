import classNames from "classnames/bind";
import SaleItem from "../../component/SaleItem";

import styles from './home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('fruit')} >
                <h2>Rau Xanh</h2>
                <div className={cx('fruit-item')}>
                    <SaleItem /> <SaleItem /> <SaleItem /> <SaleItem /> <SaleItem />
                </div>           
            </div>

            <div className={cx('vegetable')} >
                <h2>Trái Cây</h2>
                <div className={cx('vegetable-item')}>
                    <SaleItem /> <SaleItem /> <SaleItem /> <SaleItem /> <SaleItem />
                </div>   
            </div>

            <div className={cx('carrot')} >
                <h2>Gợi ý</h2>
                <div className={cx('carrot-item')}>
                    <SaleItem /> <SaleItem /> <SaleItem /> <SaleItem /> <SaleItem />
                </div>   
            </div>

        </div>
     );
}

export default Home;