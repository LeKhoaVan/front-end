import Footer from "../DefaultLayout/Footer";
import Header from "../DefaultLayout/Header";
import styles from "../AdminLayout/AdminLayout.module.scss"
import classNames from "classnames/bind";
import Sibar from "../AdminLayout/Sibar";

const cx = classNames.bind(styles);

function AdminLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')} >
                <Sibar />
                <div className={cx('content')} >
                    {children}
                </div>
            </div>
        <Footer />
        </div>
     );
}

export default AdminLayout;