import api from "./api";

export const getPublicPosts = async (params = {}) => {
  const response = await api.get("/posts/public/cards", { params });
  return response.data;
};

export const getPostDetail = async (slug: string) => {
  const response = await api.get(`/posts/public/${slug}`);
  return response.data;
};