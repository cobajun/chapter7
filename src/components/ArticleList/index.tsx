import styles from './ArticleList.module.css';
import { ArticleMeta } from '../ArticleMeta';
import { Link } from 'react-router-dom';
import type { Post } from '../../types/posts';

type Props = {
  post: Post;
}

export const ArticleList = ({ post }: Props) => {
  return (
    <article>
      <Link to={`/posts/${post.id}`} className={styles.link}>
        <div className={styles.thumb}><img src={post.thumbnailUrl} alt="" /></div>
        <div className={styles.body}>
            <ArticleMeta createdAt={post.createdAt} categories={post.categories} />
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.excerpt} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </Link>
    </article>
  );
}