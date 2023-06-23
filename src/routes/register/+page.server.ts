import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData()

        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');
        const phone = data.get('phone');

        const response = await fetch('http://127.0.0.1:8080/v1/sign-up', {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password, phone: phone }),
            headers: {
                'content-type': 'application/json'
            }
        }
        );

        const res = await response.json()

        console.log(res);
        
    }
}