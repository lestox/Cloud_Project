/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';


export const actions = {
    register: async ({ request }) => {
        const data = await request.formData();
        const fullname = data.get('fullName');
        const email = data.get('email');
        const password = data.get('password');
        
      
        const res = await fetch(BASE_URL + '/register', {
          method: 'POST',
          headers: { 'Content-Type': `application/json` },
          body: JSON.stringify({
            "fullname" : fullname, 
            "email" : email, 
            "password" : password})})
        
        if (res.status == 201){
          throw redirect(302, '/dashboard');
        }
    },
  };

