// ROUTE HANDLERS
// feature not used in this project , just for learning purpose
// https://localhost:3000/api - base url to get data from this API.
// export functions - GET , POST , PUT , PATCH , DELETE

export function GET(request) {
    console.log(request);
    // return Response.json();
    return new Response('Hello AB!');
}

// export function POST(request){}

// Refer to official docs for more details.

// In this scenario, https://localhost:3000/api will return Hello AB!

// USE CASE: 
// Using this , we can make our application accept request from another UI/mobile and serve them with JSON response.