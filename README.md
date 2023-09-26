<h1 align="center"> PixelVerse </h1>

<p align="center">

<img src ="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src ="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src ="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white">
<img src ="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">

</p>

<p align="center"><b>Powered by <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer">Hugging Face 🤗</a></b></p>

![GithubBanner](./src/app/opengraph-image.png)

## Project Structure

```
$PROJECT_ROOT
├── public/                         # Static Files
│   └── images/                     # Images
├── src/
│   ├── app/                        # App Folder
│   │   ├── examples/
│   │   │   └── page.tsx            # Examples Page
│   │   ├── layout.tsx              # Layout Provider
│   │   ├── page.tsx                # Main Page
│   │   └── ...
│   ├── components/                 # Reusable Components
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   |   └── ...
│   │   ├── image-generation.tsx    # Image Generation API
│   │   ├── theme-provider.tsx      # Theme Provider
│   │   └── ...
│   └── lib/                        # Utils
│   |   └── utils.ts
└──────────────────────────────────── END
```

## Getting Started

To run the project locally, you need to have [Node.js](https://nodejs.org/en/) installed.

```bash
# Clone the repository
git clone https://github.com/lakshaybhushan/pixelverse
```

```bash
# Install dependencies
pnpm install
```

```bash
# Run the development server
pnpm dev
```

## Features

- High Quality AI Powered Image Generation for `Free`
- Runs on Latest `Stable Diffusion XL` Model
- Download Images with One Click `(No Sign Up Required)`
- Generates Images in `1024 x 1024` Resolution
- Dark Mode Support
- Easy to Use UI
- Responsive Design
- Examples Page for Inspiration and Ideas

## Caveats

- Image Generation is Slow and can take upto `45 Seconds` or more.
- Runs on Inference API, which is not meant for Production.
- No Support for Custom Filters & Negative Prompts.
- No Support for Image Editing.
- Sometimes, the Image Generation may fail due to `Timeouts`. In that case, please try again.

## Contributing

Contributions are always welcome! Feel free to open any issues or pull requests.

## Resources

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Stable Diffusion XL](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
