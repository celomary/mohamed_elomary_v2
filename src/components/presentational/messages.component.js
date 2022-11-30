import { Message } from './message.component';
import { PureComponent } from 'react';
import styles from './messages.module.css';

export class Messages extends PureComponent {
    render() {
        return (
            <div className={styles.messages__container}>
                {this.props.messages.map((message) => {
                    const { id, ...rest } = message;
                    return <Message key={message.id} {...rest} />;
                })}
            </div>
        );
    }
}
