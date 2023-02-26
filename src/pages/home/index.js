import classNames from "classnames/bind";
import SaleItem from "../../component/SaleItem";

import styles from './home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('fruit')} >
                <h2>rau xanh</h2>
                <SaleItem /> <SaleItem /> <SaleItem />
            </div>

            <div className={cx('vegetable')} >
                <h2>Trai cay</h2>
                <SaleItem /> <SaleItem /> <SaleItem />
            </div>

            <div className={cx('carrot')} >
                <h2>Cac loai cu</h2>
                <SaleItem /> <SaleItem /> <SaleItem />
            </div>

        </div>
     );
}

export default Home;