import { PureComponent } from 'react';

export class MinusIcon extends PureComponent {
    render() {
        const { color, width, height } = this.props;
        return (
            <svg
                width={width}
                height={height}
                viewBox="0 0 9 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.666667"
                    width="8"
                    height="0.666667"
                    rx="0.333333"
                    fill={color}
                />
            </svg>
        );
    }
}
