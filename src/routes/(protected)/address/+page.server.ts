
import { redirect, type Actions } from "@sveltejs/kit";
import { get } from "svelte/store";
import { cookieData } from "../../../store/test";

/** @type {import('./$types').Actions} */
export const actions : Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const address = data.get('address');
        const city = data.get('city');


        console.log({ address: address, city: city });
        
        const cookie = get(cookieData)
        const response = await fetch('http://127.0.0.1:8080/v1/change_address', {
            method: 'POST',
            body: JSON.stringify({ "address": address, "city": city }),
            headers: {
                'content-type': 'application/json',
                'Authorization': cookie
            }
        }
        );

        console.log(await response.json());
        

        if (response.status != 200) {
            console.log(response.status);
            throw redirect(303, '/address');

        }

        throw redirect(303, '/address');

    }
};
