import { get } from "svelte/store";
import { cookieData } from "../../../store/test";


/** @type {import('./$types').PageLoad} */
export async function load() {

    let cookies = ' '

    cookieData.subscribe((e) => {
        cookies = e
    })

    console.log("ini COOKIES : ",cookies);

    const req = await fetch('http://127.0.0.1:8080/v1/user', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `${cookies}`
        }
      });
      

    const data = await req.json();

    console.log(data);
    
    return data
}