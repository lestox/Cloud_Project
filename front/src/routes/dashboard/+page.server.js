/** @type {import('./$types').PageLoad} */
import { BASE_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
let USER_ID = import.meta.env.VITE_USER_ID;

export async function load({ fetch }) {
  const url = import.meta.env.VITE_BASE_URL;
  const res = await fetch(BASE_URL + '/user_websites/?user_id=' + USER_ID);
  const item = await res.json();
  const result = await fetch(BASE_URL + '/users');
  const data = await fetch(BASE_URL + '/storage');
  const dataInfo = data.json();
  const user = await result.json();
 
  return { item, user, dataInfo };
}

export const actions = {
  add: async ({ request }) => {
      const data = await request.formData();
      const projectName = data.get('project-name');

      const res = await fetch(BASE_URL + 
        '/user_websites?name=' 
        + projectName 
        + '&user_name=valentino', {
        method: 'POST'})
      
      if (res.status == 200){
          throw redirect(302, '/dashboard');
      }
  }
};
