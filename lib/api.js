import client from './sanity'

const blogFields = `
    title, 
    subtitle,
    'slug': slug.current
`

export async function getAllBlogs() {
   const results =  await client
    .fetch(`*[_type == "blog"]{ ${ blogFields } }`); // go to sanity cms schema file, the name of the document object goes here
    return results;
}