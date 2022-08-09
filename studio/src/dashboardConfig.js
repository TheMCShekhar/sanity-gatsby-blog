export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62f1d1c8be1e78585aeb2c32",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-vz7jindd",
                  apiId: "e73d95d3-24d1-42bd-b2d8-5e479803cd33",
                },
                {
                  buildHookId: "62f1d1c964e2214dd66a4b63",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-dtro4um8",
                  apiId: "9130d6e2-e098-4d18-8414-0515cc15fe59",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/TheMCShekhar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-dtro4um8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
