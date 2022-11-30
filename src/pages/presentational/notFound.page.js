import { PureComponent } from 'react';
import styles from './notFound.module.css';
import { notFoundIcon } from '../../assets';

export class NotFound extends PureComponent {
    render() {
        return (
            <div className={styles.container}>
                <img src={notFoundIcon} alt="not found" />
                <p className={styles.text}>OOPS | PAGE NOT FOUND</p>
            </div>
        );
    }
}
