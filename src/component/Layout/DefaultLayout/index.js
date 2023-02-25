import Header from "./Header";
import Sibar from "./Sibar";
import styles from './DefaultLayout.module.scss';
import Footer from "./Footer";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function DefaulLayout({children}) {
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

export default DefaulLayout;