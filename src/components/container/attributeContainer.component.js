import { PureComponent } from 'react';
import { Attribute } from '../presentational/attribute.component';

export class AttributeContainer extends PureComponent {
    handleAttributeValueChange() {
        if (this.props.handleAttributeValueChange) {
            return (title, value) => {
                this.props.handleAttributeValueChange(title, value);
            };
        }
        return null;
    }

    render() {
        return (
            <Attribute
                size={this.props.size}
                title={this.props.title}
                type={this.props.type}
                values={this.props.values}
                onAttributeValueChange={this.handleAttributeValueChange()}
            />
        );
    }
}
