import classNames from 'classnames';
import styles from './article-card.module.scss';
import themeStyles from '../../styles/theme.module.scss';

export interface ArticleCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ArticleCard = ({ className }: ArticleCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageBox}>
                <img
                    src="https://images.unsplash.com/photo-1723347130196-8d31b6ac01fd?q=80&amp;w=3432&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className={styles.img1}
                />
            </div>
            <div className={styles.contentSection}>
                <div>
                    <h4 className={themeStyles.cardTitle}>Article Name</h4>
                    <p className={styles.paragraph}>
                        Why should user researchers avoid questions like “Do you like it?” Why does
                        this question or one of its close siblings keep on making an appearance?
                        What are the biases to be aware of during user research? Why are open-ended
                        questions better? Let’s talk about it.
                    </p>
                </div>
                <button className={themeStyles.button}>Button</button>
            </div>
        </div>
    );
};
