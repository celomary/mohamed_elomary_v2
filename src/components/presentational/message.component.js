import { PureComponent } from 'react';
import styles from './message.module.css';
import { success, info } from '../../assets';
export class Message extends PureComponent {
    static INFO = 'info';
    render() {
        const { type, text, title } = this.props;
        return (
            <div
                className={`${styles.message__container} ${
                    type === Message.INFO
                        ? styles.message__info
                        : styles.message__success
                }`}
            >
                <div className={styles.message__container__left}>
                    <div className={styles.message__vertical__line}></div>
                    <img
                        src={type === Message.INFO ? info : success}
                        alt="message__icon"
                    />
                </div>
                <div className={styles.message__container__right}>
                    <h2>{title}</h2>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
        );
    }
}
