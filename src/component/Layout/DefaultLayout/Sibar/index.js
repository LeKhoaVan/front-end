import { faCarrot, faCircleQuestion, faFileLines, faListCheck, faTruck, faTruckFast, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Sibar.module.scss';

const cx = classNames.bind(styles);
const sibarSales = [
    {
        icon : <FontAwesomeIcon icon={faTruckFast} />,
        title : "Miễn phí vận chuyển",
        onclick : () => {
            console.log("Miễn phí vận chuyển")
        } 
    },
    {
        icon : <FontAwesomeIcon icon={faCarrot} />,
        title : "Nông sản tươi",
        onclick : () => {
            console.log("Nông sản tươi")
        } 
    },
    {
        icon : <FontAwesomeIcon icon={faCircleQuestion} />,
        title : "Hỗ trợ",
        onclick : () => {
            console.log("Hỗ trợ")
        } 
    }
];



function Sibar() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('sales')} >
                <h2>Nổi bật</h2>
                {sibarSales.map((sale, index) => {

                    return (
                        <button key={index} onClick={sale.onclick}>
                            {sale.icon} {sale.title}
                        </button>
                    )
                })}
            </div>
           
        </div>    
     );
}

export default Sibar;