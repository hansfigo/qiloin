import { get } from "svelte/store";
import { cookieData } from "../../../store/test";
import { redirect } from "@sveltejs/kit";


export async function load({cookies}) {

    cookieData.set('')
    cookies.set('session', '')

    throw redirect(303, '/')    
}