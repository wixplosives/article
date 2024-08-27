import classNames from 'classnames';
import styles from './article-card.module.scss';
import themeStyles from '../../styles/theme.module.scss';

export interface ArticleCardProps {
    className?: string;
    image: string;
    title: string;
    paragraph: string;
    button: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ArticleCard = ({ className, image, title, paragraph, button }: ArticleCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={image} alt="" className={styles.image} />
            <div className={styles.contentSection}>
                <div>
                    <h4 className={themeStyles.cardTitle}>{title}</h4>
                    <p className={styles.paragraph}>{paragraph}</p>
                </div>
                <button className={themeStyles.button}>{button}</button>
            </div>
        </div>
    );
};
