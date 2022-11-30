import { PureComponent } from 'react';
import styles from './attribute.module.css';

export class Attribute extends PureComponent {
    constructor(props) {
        super(props);
        this.style = this.props.size === 'small' ? style.small : style.large;
    }

    renderSwatchAttribute({ id, value, selected }) {
        const { onAttributeValueChange } = this.props;

        return (
            <div
                onClick={() =>
                    onAttributeValueChange &&
                    onAttributeValueChange(this.props.title, value)
                }
                key={id}
                className={`${styles.swatchAttribute} ${
                    selected ? styles.swatchAttribute__selected : null
                } ${
                    onAttributeValueChange
                        ? styles.swatchAttribute__clickable
                        : null
                }`}
                style={this.style.attributeSwatchValue}
            >
                <div
                    style={{
                        ...this.style.attributeSwatchNested,
                        backgroundColor: value
                    }}
                ></div>
            </div>
        );
    }

    renderTextAttribute({ id, value, selected }) {
        const { onAttributeValueChange } = this.props;

        return (
            <div
                onClick={() =>
                    onAttributeValueChange &&
                    onAttributeValueChange(this.props.title, value)
                }
                key={id}
                className={`${styles.textAttribute} ${
                    selected ? styles.textAttribute__selected : null
                } ${
                    onAttributeValueChange
                        ? styles.textAttribute__clickable
                        : null
                }`}
                style={this.style.attributeTextValue}
            >
                <p>{value}</p>
            </div>
        );
    }

    render() {
        const { title, type, values } = this.props;
        return (
            <div className={styles.attributeContainer}>
                <p
                    className={styles.attributeName}
                    style={this.style.attributeType}
                >
                    {title}:
                </p>
                <div className={styles.attributeValues}>
                    {values.map((value) => {
                        return type === 'swatch'
                            ? this.renderSwatchAttribute(value)
                            : this.renderTextAttribute(value);
                    })}
                </div>
            </div>
        );
    }
}

const style = {
    small: {
        attributeType: {
            fontFamily: 'var(--raleway)',
            fontSize: '14px',
            fontWeight: '400'
        },
        attributeTextValue: {
            minWidth: '24px',
            minHeight: '24px',
            fontSize: '14px'
        },
        attributeSwatchValue: {
            width: '20px',
            height: '20px'
        },
        attributeSwatchNested: {
            width: '16px',
            height: '16px'
        }
    },
    large: {
        attributeType: {
            fontFamily: 'var(--roboto-condensed)',
            fontSize: '18px',
            fontWeight: '700',
            textTransform: 'uppercase'
        },
        attributeTextValue: {
            minWidth: '63px',
            minHeight: '45px',
            fontSize: '16px'
        },
        attributeSwatchValue: {
            width: '36px',
            height: '36px'
        },
        attributeSwatchNested: {
            width: '32px',
            height: '32px'
        }
    }
};
