import sanityClient from "./../client";
export default async function fetchProjects() {
  const response = await sanityClient.fetch(
    `*[_type == "project"]{
        _id,
        title,
        description,
        slug,
        link,
        source,
        img{
          asset->{
            _id,
            url
          }
        }
      }
      `
  );
  return response;
}
