# GitHub Pages Deployment Guide

This guide will help you deploy your Dubai Zenith Visions project to GitHub Pages.

## Prerequisites

1. A GitHub repository for your project
2. GitHub account with Pages enabled

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Repository Configuration

The project is already configured with:

- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Vite configuration for GitHub Pages base path
- ✅ Build scripts in `package.json`

### 3. Deploy Your Site

#### Automatic Deployment (Recommended)

1. Push your code to the `main` branch:

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. The GitHub Action will automatically:
   - Build your project
   - Deploy it to GitHub Pages
   - Make it available at `https://yourusername.github.io/dubai-zenith-visions/`

#### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### 4. Access Your Site

Once deployed, your site will be available at:

- **GitHub Pages URL**: `https://yourusername.github.io/dubai-zenith-visions/`
- Replace `yourusername` with your actual GitHub username

## Configuration Details

### Base Path Configuration

The project is configured to work with GitHub Pages subdirectory structure:

- **Base path**: `/dubai-zenith-visions/`
- **Vite config**: Automatically sets the correct base path
- **Environment variable**: `VITE_BASE_PATH` can override the default

### Build Process

The GitHub Action workflow:

1. Checks out your code
2. Sets up Node.js 18
3. Installs dependencies with `npm ci`
4. Builds the project with `npm run build`
5. Deploys to GitHub Pages

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

### Common Issues

1. **404 Error**: Ensure the base path is correctly set in `vite.config.ts`
2. **Build Fails**: Check that all dependencies are in `package.json`
3. **Assets Not Loading**: Verify the base path matches your repository name

### Local Testing

To test the GitHub Pages build locally:

```bash
npm run build
npm run preview
```

This will serve the built files locally to test the production build.

## Environment Variables

The following environment variables are used:

- `VITE_BASE_PATH`: Sets the base path for the application (default: `/dubai-zenith-visions/`)

## Support

If you encounter any issues:

1. Check the GitHub Actions logs in your repository
2. Verify your repository settings
3. Ensure all files are committed and pushed

---

**Note**: The first deployment may take a few minutes. Subsequent deployments will be faster as GitHub caches the build environment.
