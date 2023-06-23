import { redirect } from "@sveltejs/kit";
import { isLogin } from "../../store/test";
import { get } from "svelte/store";

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


        const res = await response.json()

        console.log(res);
        
        // console.log(email, password);

        // const { id } = await createSession(email, password);
        // console.log(id);

        // cookies.set('session_id', id, {
        //     path: '/',
        //     httpOnly: true,
        //     sameSite: 'strict',
        //     secure: !dev,
        //     maxAge: 60 * 60 * 24 * 7 // one week
        // });
        throw redirect(303, '/login');

        // return { success: true };
    }
};
