/** @type {import('./$types').PageLoad} */
import { BASE_URL } from '$env/static/private';

export async function load({ fetch }) {
  const res = await fetch(BASE_URL + `/users`);
  const item = await res.json();
 
  return { item };
}  