import { PureComponent } from 'react';

export class PlusIcon extends PureComponent {
    render() {
        const { color, width, height } = this.props;
        return (
            <svg
                width={width}
                height={height}
                viewBox="0 0 9 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="3.66667"
                    width="8"
                    height="0.666667"
                    rx="0.333333"
                    fill={color}
                />
                <rect
                    x="4.83333"
                    width="8"
                    height="0.666667"
                    rx="0.333333"
                    transform="rotate(90 4.83333 0)"
                    fill={color}
                />
            </svg>
        );
    }
}
