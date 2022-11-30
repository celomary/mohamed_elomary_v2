import { PureComponent } from 'react';
import styles from './loader.module.css';

export class Loader extends PureComponent {
    render() {
        return (
            <div className={styles.lds__container}>
                <div className={styles.lds}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}
