/** @type {import('./$types').PageLoad} */
import { BASE_URL } from '$env/static/private';
let USER_ID = import.meta.env.VITE_USER_ID;

export async function load({ fetch }) {
  const url = import.meta.env.VITE_BASE_URL;
  const res = await fetch(BASE_URL + '/user_websites/?user_id=' + USER_ID);
  const item = await res.json();
  const result = await fetch(BASE_URL + '/users');
  const user = await result.json();
 
  return { item, user };
}
