import { PureComponent } from 'react';
import { PBtn } from '../presentational/pBtn.component';

export class PBtnContainer extends PureComponent {
    handleClick() {
        if (this.props.onClick) this.props.onClick();
        else if (!this.props.disabled) {
            throw new Error(
                'PBtn: onClick prop is required for non disabled primary btn component'
            );
        }
    }

    render() {
        return (
            <PBtn
                text={this.props.text}
                size={this.props.size}
                width={this.props.width}
                disabled={this.props.disabled}
                handleClick={this.handleClick.bind(this)}
            />
        );
    }
}
