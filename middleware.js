/**
 * middleware is RESERVED keyword
 * called before each and every request.
 * USE CASE - adding AUTHENTICATION , LOGGER, REDIRECTION of certain requests etc
 * requests to be monitored can be controlled using "config.matcher"
 * works similar to EXPRESS.js , but inbulit feature of NEXT.js
*/

import { NextResponse } from "next/server";

export function middleware(request) {
    console.log(request);
    return NextResponse.next();
}

export const config = {
    matcher: '/news' // ['/news' , '/archive']
}
