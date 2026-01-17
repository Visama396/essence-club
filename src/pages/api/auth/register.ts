// With `output: 'static'` configured:
export const prerender = false;

import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  /*console.log(request.headers.get("content-type"))
  const contentType = request.headers.get("content-type") || ""

  let email: string | null = null
  let password: string | null = null

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const body = await request.text()
    const params = new URLSearchParams(body)
    email = params.get("email")
    password = params.get("password")
  } else {
    return new Response("Unsupported Content-Type", { status: 415 })
  }*/

  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/signin");
};
