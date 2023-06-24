import { get } from "svelte/store";
import { cookieData, getUserdata } from "../../../store/test";


/** @type {import('./$types').PageLoad} */
export async function load() {

  const data = await getUserdata()

  return data
}