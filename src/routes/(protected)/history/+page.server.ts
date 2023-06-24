import { get } from "svelte/store";
import { cookieData, getUserdata } from "../../../store/test";

/** @type {import('./$types').PageLoad} */
export async function load() {

  // const data = await getUserdata()

  // const cookie = get(cookieData)

  // const response = await fetch('http://127.0.0.1:8080/v1/orders', {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //         'Authorization' : cookie
  //     }
  // }
  // );
  // const orders = await response.json()

  // console.log(orders);

  // return orders
}