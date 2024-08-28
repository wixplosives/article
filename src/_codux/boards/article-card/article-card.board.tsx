import { createBoard } from '@wixc3/react-board';
import { ArticleCard } from '../../../components/article-card/article-card';

export default createBoard({
    name: 'ArticleCard',
    Board: () => (
        <ArticleCard
            title="You really like this, don’t you?"
            button="Read More"
            paragraph="Why should user researchers avoid questions like “Do you like it?” Why does                         this question or one of its close siblings keep on making an appearance?                         What are the biases to be aware of during user research? Why are open-ended                         questions better? Let’s talk about it."
            image="https://images.unsplash.com/photo-1723347130196-8d31b6ac01fd?q=80&amp;amp;amp;w=3432&amp;amp;amp;auto=format&amp;amp;amp;fit=crop&amp;amp;amp;ixlib=rb-4.0.3&amp;amp;amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 786,
        windowBackgroundColor: '#fbf9f9',
    },
});
