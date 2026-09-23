import styles from './ArticleDetail.module.css';
import { ArticleMeta } from '../ArticleMeta';
import { useParams , Link } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import type { Post } from '../../types/posts';

export const ArticleDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [post, setPost] = useState<Post | null>(null);
  useEffect(() => {
      const getData = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
      const data = await res.json();
      setPost(data.post);
      setIsLoading(false);
    };
    getData();
  }, [id]);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Blog`;
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', '記事詳細ページです。');
  }, [post]);

  if (isLoading) {
    return <p>読み込み中...</p>
  }

  if (!post) {
    return (
      <>
        <p>記事が見つかりませんでした。</p>
        <div className={styles.back}>
          <Link to="/" className={styles.btn}>
            記事一覧へ戻る
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <article className={styles.detail}>
        <div className={styles.main}>
          <img src={post.thumbnailUrl} alt="" />
        </div>
        <ArticleMeta createdAt={post.createdAt} categories={post.categories} />
        <div className={styles.body}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <div className={styles.back}>
          <Link to="/" className={styles.btn}>
            記事一覧へ戻る
          </Link>
        </div>
      </article>
    </>
  );
};