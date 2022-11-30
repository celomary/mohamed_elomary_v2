import { PureComponent } from 'react';
import { Messages } from '../presentational/messages.component';
import { connect } from 'react-redux';

class CMessages extends PureComponent {
    render() {
        return <Messages messages={this.props.messages} />;
    }
}

export const MessagesContainer = connect(
    (state) => ({
        messages: state.messages
    }),
    null
)(CMessages);
