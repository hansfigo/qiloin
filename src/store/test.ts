import { writable } from "svelte/store";


export const isLogin = writable(false)

export const cookieData = writable('')

export const pageLoc = writable('Home')

export const setLoc = (loc : string) =>{
    pageLoc.set(loc)
}

export const userdata = writable({
    name: '',
    email: '',
    phone: '',
    adress: '',
    city: ''
})


let cookies = ' '

cookieData.subscribe((e) => {
    cookies = e
})

export async function getUserdata() {

    const req = await fetch('http://127.0.0.1:8080/v1/user', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Authorization': `${cookies}`
        }
    });

    return await req.json()

}
