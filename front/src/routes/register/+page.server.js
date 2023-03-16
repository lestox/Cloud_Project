/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ request }) => {
        const data = await request.formData();
        const fullname = data.get('fullName');
        const email = data.get('email');
        const password = data.get('password');
        
        const body = JSON.stringify({"fullname" : fullname, "email" : email, "password" : password})
        console.log(body)
        const res = await fetch('http://localhost:8004/register', {
          method: 'POST',
          body: body})
        console.log(res);
    },
  };

