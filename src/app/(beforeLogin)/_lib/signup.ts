"use server";

import { redirect } from "next/navigation";

export default async function submit(formData: FormData) {
  if (!formData.get("id")) {
    return { message: "no_id" };
  }
  if (!formData.get("name")) {
    return { message: "no_name" };
  }
  if (!formData.get("password")) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: "already_exist" };
    }
    console.log(await response.json());
    shouldRedirect = true;
  } catch (e) {
    console.error(e);
    return;
  }

  if (shouldRedirect) {
    redirect("/home");
  }
}
