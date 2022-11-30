import { PureComponent } from 'react';
import styles from './home.module.css';
import globalStyles from '../../style/global.module.css';
import { ItemCard } from '../../components';

export class Home extends PureComponent {
    render() {
        return (
            <div
                className={`${styles.home__container} ${globalStyles.adjustWidth_86}`}
            >
                <h2 className={styles.categoryName}>
                    {this.props.category.name}
                </h2>
                <div className={styles.items__container}>
                    {this.props.category.products.map((item) => {
                        return <ItemCard key={item.id} item={item} />;
                    })}
                </div>
            </div>
        );
    }
}
