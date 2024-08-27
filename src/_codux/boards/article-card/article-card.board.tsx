import { createBoard } from '@wixc3/react-board';
import { ArticleCard } from '../../../components/article-card/article-card';

export default createBoard({
    name: 'ArticleCard',
    Board: () => <ArticleCard />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 406,
        windowBackgroundColor: '#fbf9f9',
    },
});
