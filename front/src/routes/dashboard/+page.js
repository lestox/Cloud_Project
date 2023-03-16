/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch(`http://localhost:8004/users`);
  const item = await res.json();
 
  return { item };
}