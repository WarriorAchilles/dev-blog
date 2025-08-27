<!-- should add a banner here once I make a logo with my name and the koi fish -->

# About

This repo serves as the source for the dev blog and portfolio of Zion Emond.

Zion Emond is a software engineer at CQL, an agency specializing in creating custom eCommerce websites. In his spare time, he likes to build apps that will provide a technical challenge to create, pushing his skills farther, while also providing value to end users by solving a problem and improving something in their lives

When not professionally problem solving with code, Zion enjoys playing music, usually on the piano, though he has been known to dabble in other instruments. In addition to this, he enjoys playing online games with his friends, spending lots of time in Discord voice chats as well as constantly lurking in the text channels.

# Template

This site uses the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) repo as a starting point, with plenty of customizations.

# dev-blog (Zion Emond Portfolio)

A **Next.js-based development blog and portfolio site** for [Zion Emond](https://github.com/WarriorAchilles), derived from the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template and customized to support dynamic content, portfolio features, and creative experiments with animations, and AI, and whatever else sounds fun.

## 🚀 Features

- **Next.js 15** with App Router
- **Tailwind CSS 4** for modern, utility-first styling
- **MDX & Contentlayer** for blog content and metadata
- **Portfolio integration** for project showcases
- **3D & Animation** via Three.js, React Three Fiber, OGL, and GSAP
- **AI-powered** experiments with the OpenAI SDK
- **SEO & feeds** powered by Pliny (RSS, sitemap, structured metadata)
- **Markdown enhancements** (math, KaTeX, syntax highlighting, reading time)
- **Developer tooling**:
  - TypeScript
  - ESLint + Prettier (with Tailwind plugin)
  - Husky git hooks
  - Bundle analyzer

## 📂 Project Structure

- `.devcontainer/` -  Dev container configs
- `.github/` - GitHub workflows
- `.husky/` # Git hooks
- `.vscode/` # Editor settings
- `.yarn/releases/` # Yarn Berry release files

- `app/` # Next.js app router entry points
- `components/` # Reusable UI components
- `layouts/` # Blog and page layouts
- `faq/` # FAQ section
- `data/` # Site metadata & configs
- `scripts/` # Build & utility scripts
- `css/tailwind.css` # Tailwind entry file
- `public/static/` # Static assets (images, favicons, etc.)

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) v15.2.4  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.0.5  
- **Content**: [Contentlayer](https://www.contentlayer.dev/) v0.5.5  
- **3D/Animation**: [three](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei), [ogl](https://github.com/oframe/ogl), [GSAP](https://greensock.com/gsap/)  
- **Markdown/MDX**: Remark & Rehype ecosystem with KaTeX, math, syntax highlighting  
- **AI**: [OpenAI SDK](https://github.com/openai/openai-node) v5.0.1  
- **SEO & metadata**: [Pliny](https://github.com/timlrx/pliny) v0.4.1  
- **Tooling**: TypeScript v5.1.3, ESLint v9.14.0, Prettier v3.0.0  

---

## 📜 Scripts

From `package.json`:

```bash
npm run dev        # Start development server
npm run start      # Alias for next dev
npm run build      # Build production bundle
npm run serve      # Run production server
npm run analyze    # Build with bundle analyzer
npm run lint       # Run ESLint with auto-fix
npm run prepare    # Install Husky git hooks\
```
## ⚡ Getting Started
### 1. Clone the repo

```bash
git clone https://github.com/WarriorAchilles/dev-blog.git
cd dev-blog
```

### 2. Install dependencies

```bash
npm install
# or yarn install
```

### 3. Set up environment variables

- Copy `.env.example` → `.env.local`
- Add required API keys/configs

### 4 Run development server

```bash
npm run dev
```
Visit http://localhost:3000 🎉

## 📝 License
This project is open source under the MIT License.