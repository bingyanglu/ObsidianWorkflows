# ObsidianWorkflows

[ObsidianWorkflows](https://obsidianworkflows.com/) is a comprehensive platform for discovering and sharing the best Obsidian plugins, themes, and workflows. Built with Next.js and Tailwind CSS, it provides a curated collection of knowledge management tools and resources.

![ObsidianWorkflows](https://toimg.xyz/file/obsidianworkflows-banner.png)

## Features

- **Curated Plugin Library**: Hand-picked quality Obsidian plugins with detailed reviews and ratings
- **Comprehensive Reviews**: In-depth analysis and user reviews for each plugin
- **Workflow Guides**: Step-by-step tutorials for building effective knowledge management systems
- **Community Driven**: User-contributed content and community insights
- **Responsive Design**: Fully responsive design optimized for all devices
- **SEO Optimized**: Search engine friendly with dynamic metadata
- **Easy Navigation**: Intuitive interface for discovering new tools and workflows

## Prerequisites

- Node.js (version 16 or later)
- npm or yarn
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/obsidian-workflows.git
   cd obsidian-workflows
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Visit `http://localhost:3000` to see ObsidianWorkflows running locally.

## Project Structure

```
obsidian-workflows/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Next.js pages
│   ├── config/             # Configuration files
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── data/
│   ├── json/
│   │   └── resources.json  # Plugin data
│   └── md/
│       └── en/             # Article content
└── types/
    └── common.d.ts         # TypeScript definitions
```

## Adding Content

### Adding New Plugins

Edit `data/json/resources.json` and add a new plugin object:

```json
{
  "id": "plugin-id",
  "name": "Plugin Name",
  "description": "Plugin description...",
  "url": "https://obsidian.md/plugins?id=plugin-id",
  "githubUrl": "https://github.com/author/repo",
  "author": "Author Name",
  "category": "category-type",
  "rating": 4.5,
  "downloads": 500000,
  "version": "1.0.0",
  "lastUpdated": "2024-01-20",
  "tags": ["tag1", "tag2"],
  "features": ["Feature 1", "Feature 2"],
  "review": "Detailed review...",
  "reviewRating": 4
}
```

### Adding New Articles

Create a new `.md` file in `data/md/en/`:

```markdown
---
title: "Article Title"
description: "Article description"
date: "2024-01-20"
---

# Article Content

Your article content here...
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## Contributing

We welcome contributions to ObsidianWorkflows! Please read our contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ObsidianWorkflows is open-source software licensed under the [MIT license](LICENSE).

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## Acknowledgements

ObsidianWorkflows is built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Obsidian](https://obsidian.md/)

We are grateful to the Obsidian community and all plugin developers who make this ecosystem possible.
