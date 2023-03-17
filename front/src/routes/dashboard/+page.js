/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const url = import.meta.env.VITE_BASE_URL;
  const res = await fetch(url + `/users`);
  const item = await res.json();
 
  return { item };
}