export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "PixelVerse",
  description: "Generate high quality images using Stable Diffusion AI",
  url: "https://pixelverse.lakshb.me",
  ogImage: "",
  links: {
    twitter: "https://twitter.com/bhushanlakshay",
    github: "https://github.com/lakshaybhushan/pixelverse",
  },
};
