import { redirect } from "@sveltejs/kit";
import { cookieData, getUserdata } from "../../../store/test";
import { get } from "svelte/store";

export async function load() {

    const data = await getUserdata()

    if (!data.data.Address) {
        throw redirect(303, '/address');
    }

    return
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {


        const data = await getUserdata()
        const cookie = get(cookieData)

        const response = await fetch('http://127.0.0.1:8080/v1/order', {
            method: 'POST',
            body: JSON.stringify(data.data),
            headers: {
                'content-type': 'application/json',
                'Authorization': cookie
            }
        }
        );



        const res = await response.json()

        console.log("INI ", res);

        if (response.status != 200) {
        }


        throw redirect(303, '/home');

    }
};
