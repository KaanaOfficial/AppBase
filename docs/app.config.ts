export default defineAppConfig({
  docus: {
    title: "Kaana App Base documentation",
    description: "Documentation for creating a Kaana App",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      twitter: "KaanaOfficial",
      github: "KaanaOfficial",
    },
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      iconLinks: [
        {
          href: "https://about.kaana.io",
          icon: "IconNuxtLabs",
        },
      ],
    },
  },
});
