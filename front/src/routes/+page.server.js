import { posts } from './loadData.svelte';

export function load() {
  return {
    posts
    /*summaries: posts.map((post) => ({
        slug: post.slug,
        title: post.title
    }))*/
  };

// export const load = async() => {
//   const getPosts = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//     posts = data
//   return posts
// }

//   return {
//     posts: getPosts(),
//   }
// }
}