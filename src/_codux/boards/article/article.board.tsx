import { createBoard } from '@wixc3/react-board';
import { Article } from '../../../components/article/article';

export default createBoard({
    name: 'Article',
    Board: () => <Article />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 2396,
        windowHeight: 1080,
    },
});
