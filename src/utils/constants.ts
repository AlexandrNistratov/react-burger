import { getCookie } from "./cookie";

export const API_URL: string =  'https://norma.nomoreparties.space/api';

export const WS_URL: string = 'wss://norma.nomoreparties.space/orders';

export  const url = getCookie("accessToken")?.split("Bearer ").join("");