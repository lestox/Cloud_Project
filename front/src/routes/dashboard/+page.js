/*  import { projects } from './data.js';

export function load() {
  return {
	summaries: projects.map((project) => ({
		slug: project.slug,
		title: project.title,
    created: project.created,
    updated: project.updated
	}))
  };
} */

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon`);
  const item = await res.json();
 
  return { item };
}