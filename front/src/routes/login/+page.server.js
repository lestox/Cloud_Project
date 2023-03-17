/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        const res = await fetch(BASE_URL + '/login', {
          method: 'POST',
          headers: { 'Content-Type': `application/json` },
          body: JSON.stringify({
            "email" : email, 
            "password" : password})})
        
        if (res.status == 200){
            throw redirect(302, '/dashboard');
        }
    }
};

