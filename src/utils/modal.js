import { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const modalRoute = document.getElementById('modal-root');

export class Modal extends PureComponent {
    constructor(props) {
        super(props);
        this.modal = document.createElement('div');
    }

    componentDidMount() {
        modalRoute.appendChild(this.modal);
    }

    componentWillUnmount() {
        modalRoute.removeChild(this.modal);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.modal);
    }
}
