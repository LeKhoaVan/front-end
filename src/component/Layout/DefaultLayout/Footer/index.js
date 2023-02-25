import classNames from "classnames/bind";

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return ( 
        <div className={cx('wrapper')}>
            <span> 
                Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh <br/>
                Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng <br/>
                Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022 <br/>
                © 2022 - Bản quyền của Công ty TNHH Ti Ki
            </span>
        </div>
     );
}

export default Footer;