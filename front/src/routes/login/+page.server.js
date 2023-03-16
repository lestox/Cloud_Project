/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        // TODO
        const response = await fetch(this.action, {
            method: 'POST',
            body: data
          });
    }
  };

