import { content } from "$lib/data.js";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
  const data: any = content[params.slug as keyof typeof content];

  if (!data) {
    throw error(404, "Page not found");
  }

  const keys = Object.keys(content);
  const index = keys.indexOf(params.slug);
  let nextSlug = null;
  let nextTitle = null;

  if (index !== -1 && index < keys.length - 1) {
    nextSlug = keys[index + 1];
    nextTitle = content[nextSlug][0];
  }

  return {
    data,
    nextSlug,
    nextTitle,
  };
};
