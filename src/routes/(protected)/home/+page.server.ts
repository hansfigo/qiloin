import { get } from "svelte/store";
import { cookieData, getUserdata } from "../../../store/test";
import { redirect, type Actions } from "@sveltejs/kit";


/** @type {import('./$types').PageLoad} */
export async function load() {

  const data = await getUserdata()

  return data
}


/** @type {import('./$types').Actions} */
export const actions : Actions = {
  order :async ({request}) => {
      
    const data = await getUserdata()

    if (data.data.Address) {
      throw redirect(303, '/address');
    }

    console.log(data.data);
    
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

    console.log(await response.json());
    
    if (response.status != 200) {
      console.log(response.json);
      
    }


    throw redirect(303, '/home');


      
  }
};
