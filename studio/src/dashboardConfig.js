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
                    "6129c83d35727bb4d27c5f0f",
                  title: "Sanity Studio",
                  name: "xela-journey-studio",
                  apiId: "59f8d376-d858-40d6-8c05-1487178a94a2",
                },
                {
                  buildHookId: "6129c83e35727bb4d27c5f10",
                  title: "Blog Website",
                  name: "xela-journey-web",
                  apiId: "f7b91b0d-11e7-4f9c-a8e1-cac07904b8d4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/alexrodriguez2498/xela-journey",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://xela-journey-web.netlify.app",
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
