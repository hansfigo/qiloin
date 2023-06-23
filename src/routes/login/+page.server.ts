import { redirect } from "@sveltejs/kit";
import { cookieData } from "../../store/test.js";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        console.log(email, password);


        const response = await fetch('http://127.0.0.1:8080/v1/sign-in', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                'content-type': 'application/json'
            }
        }
        );

        if (response.status != 200) {
            throw redirect(303, '/login');

        }

        const res = await response.json()

        cookieData.set(res.data)

        cookies.set('session', res.data)

        throw redirect(303, '/home');

    }
};
