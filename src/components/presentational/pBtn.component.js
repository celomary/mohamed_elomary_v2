import { PureComponent } from 'react';
import styles from './pBtn.module.css';

export class PBtn extends PureComponent {
    render() {
        return (
            <button
                className={`${styles.pBtn__container} ${
                    this.props.size === 'small'
                        ? styles.pBtn__small
                        : styles.pBtn__large
                } ${this.props.disabled ? styles.disabled : null}`}
                onClick={() => {
                    this.props.handleClick();
                }}
                style={{
                    width: this.props.width
                }}
                disabled={this.props.disabled}
            >
                {this.props.text}
            </button>
        );
    }
}
