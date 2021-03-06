// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "project",
      type: "document",
      title: "projectPost",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Project Name",
        },
        {
          name: "description",
          title: "Project Description",
          type: "string",
        },
        {
          type: "image",
          name: "img",
          title: "Image",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
        {
          name: "source",
          title: "Source",
          type: "string",
        },
      ],
    },
  ]),
});
