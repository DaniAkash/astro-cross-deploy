import type { APIRoute } from "astro";

export const get: APIRoute = async () => {

    const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await todosResponse.json()

    return new Response(JSON.stringify(todos), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
}