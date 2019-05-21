import React, {Component} from 'react';
import {render} from "react-dom";
import styles from  './index.scss';
type Props = {};


class Home extends Component<Props> {
    /**
     * lifecycle
     */

    render() {
        return <div>
            <a href={'#'} className={styles.btn}>Home</a>
            <a className={styles.btn2}>
                wave
            </a>
        </div>;
    }

    /**
     *properties
     */
    mounted: boolean;
    /**
     *method
     */
}

export default Home;


render(<Home />,document.getElementById('container'));