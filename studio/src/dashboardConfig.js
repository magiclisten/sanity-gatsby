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
                    "605d6a089e8919540b7b8ecb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-studio-bzy1zsh2",
                  apiId: "558ee931-c94f-4755-addc-fc9ce1935664",
                },
                {
                  buildHookId: "605d6a08f6be366546c58cb9",
                  title: "Blog Website",
                  name: "sanity-gatsby-web-bax5ebo8",
                  apiId: "5802d891-d603-4215-8079-a7994ecf8341",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/magiclisten/sanity-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-web-bax5ebo8.netlify.app",
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
