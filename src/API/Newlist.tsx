import instance from './instance';

export const Postslist = () => {
    const url = `/news`;
    return instance.get(url)
}
export const addPosts = (Posts: any) => {
    const url = `/Posts`;
    return instance.post(url,Posts);
}
export const removePosts = (id: any) => {
    const url = `/Posts/${id}`;
    return instance.delete(url);
}
export const readPosts = (id: any) => {
    const url = `/Posts/${id}`;
    return instance.get(url);
}
export const updatePosts = (Posts: any) => {
    const url = `/Posts/${Posts.id}`;
    return instance.put(url, Posts);
}