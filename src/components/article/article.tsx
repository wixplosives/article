import classNames from 'classnames';
import styles from './article.module.scss';
import { ArticleCard } from '../article-card/article-card';

export interface ArticleProps {
    className?: string;
}

/**
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Article = ({ className }: ArticleProps) => {
    return (
        <div className={classNames(className, styles.main)}>
            <div className={styles.root}>
                <div>
                    <ArticleCard
                        title="You really like this, don’t you?"
                        button="Read More"
                        paragraph="Why should user researchers avoid questions like “Do you like it?” Why does                         this question or one of its close siblings keep on making an appearance?                         What are the biases to be aware of during user research? Why are open-ended                         questions better? Let’s talk about it."
                        image="https://images.unsplash.com/photo-1720293315574-911411515624?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
                <div>
                    <ArticleCard
                        title="You really like this, don’t you?"
                        button="Read More"
                        paragraph="Why should user researchers avoid questions like “Do you like it?” Why does                         this question or one of its close siblings keep on making an appearance?                         What are the biases to be aware of during user research? Why are open-ended                         questions better? Let’s talk about it."
                        image="https://images.unsplash.com/photo-1720293080711-b89d093111dc?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
                <div>
                    <ArticleCard
                        title="You really like this, don’t you?"
                        button="Read More"
                        paragraph="Why should user researchers avoid questions like “Do you like it?” Why does                         this question or one of its close siblings keep on making an appearance?                         What are the biases to be aware of during user research? Why are open-ended                         questions better? Let’s talk about it."
                        image="https://images.unsplash.com/photo-1662652610624-4c12ff68385b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
                <div>
                    <ArticleCard
                        title="You really like this, don’t you?"
                        button="Read More"
                        paragraph="Why should user researchers avoid questions like “Do you like it?” Why does                         this question or one of its close siblings keep on making an appearance?                         What are the biases to be aware of during user research? Why are open-ended                         questions better? Let’s talk about it."
                        image="https://images.unsplash.com/photo-1662652610624-4c12ff68385b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
            </div>
        </div>
    );
};
