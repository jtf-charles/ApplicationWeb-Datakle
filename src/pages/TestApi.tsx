import { useEffect, useState } from "react";
import { getPublicPosts } from "../api/postsApi";

type Post = {
  post_id: number;
  post_title: string;
  post_excerpt: string;
  cover_image_url: string;
  post_slug: string;
  likes_count: number;
  comments_count: number;
  average_rating: number;
  category?: {
    category_name: string;
  };
};

export default function TestApi() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPublicPosts();
      setPosts(result.data);
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Test API Blog</h1>

      {posts.map((post) => (
        <div key={post.post_id} style={{ marginBottom: "30px" }}>
          <img
            src={post.cover_image_url}
            alt={post.post_title}
            style={{ width: "300px", borderRadius: "12px" }}
          />

          <p>{post.category?.category_name}</p>
          <h2>{post.post_title}</h2>
          <p>{post.post_excerpt}</p>

          <small>
            ❤️ {post.likes_count} | 💬 {post.comments_count} | ⭐{" "}
            {post.average_rating}
          </small>
        </div>
      ))}
    </div>
  );
}