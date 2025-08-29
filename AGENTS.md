# Agents Configuration for rekalogika-docs

This repository contains the documentation website for Rekalogika, built with Docusaurus 2. This file provides AI agents and coding assistants with essential information about the project structure and development workflow.

## Project Overview

**Repository**: `rekalogika/rekalogika-docs`  
**Technology Stack**: Docusaurus 2, React, MDX  
**Purpose**: Documentation website for Rekalogika's open-source PHP libraries  
**Website**: https://rekalogika.dev

## Project Structure

- **docs/** - Documentation content (MDX files)
- **src/** - Custom React components and themes
  - **components/** - Reusable React components
  - **css/** - Custom CSS styles
  - **pages/** - Custom pages
- **static/** - Static assets
- **static-src/** - Source files for static assets
  - **diagrams/** - Legacy PlantUML diagram sources
- **build/** - Generated static site (auto-generated)
- **docusaurus.config.js** - Docusaurus configuration
- **sidebars.js** - Sidebar configuration
- **package.json** - Dependencies and scripts

## Development Workflow

### Prerequisites
- Node.js and npm
- Docker (for PlantUML diagram generation)

### Common Tasks

1. **Local Development**:
   ```bash
   npm install
   npm start
   ```

2. **Build Site**:
   ```bash
   npm run build
   ```

3. **Generate Diagrams**:
   ```bash
   make  # Generates SVG diagrams from PlantUML sources
   ```

### Adding Documentation

1. **New Package Documentation**:
   - Create folder in `docs/[package-name]/`
   - Add `index.md` as the main entry point
   - Update `sidebars.js` to include in navigation
   - Follow existing structure with numbered files (01-, 02-, etc.)

2. **Documentation Structure**:
   - Use MDX format for enhanced React component support
   - Include frontmatter with `title` and other metadata
   - Use `DocCardList` component for section overviews
   - Add diagrams to `static-src/diagrams/` and reference generated SVGs

3. **Diagrams**:
   - Source files in `static-src/diagrams/[package]/`
   - Use PlantUML format (.puml files)
   - Run `make` to generate both light and dark theme SVGs
   - Reference in docs: `![Diagram](./diagrams/diagram-name.svg)`

## Key Files for AI Agents

- **Configuration**: `docusaurus.config.js` - Site configuration, plugins, themes
- **Navigation**: `sidebars.js` - Sidebar structure and organization
- **Styling**: `src/css/custom.css` - Custom CSS variables and styles
- **Components**: `src/components/` - Reusable documentation components
- **Content**: `docs/` - All documentation content in MDX format

## Documentation Standards

1. **File Naming**: Use descriptive names with number prefixes for ordering
2. **Frontmatter**: Include title and relevant metadata
3. **Cross-references**: Use relative links between docs
4. **Code Examples**: Use appropriate language tags for syntax highlighting
5. **Diagrams**: Provide both light and dark theme versions
6. **Images**: Store in `static/img/` and reference with absolute paths

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The built site is served from the `gh-pages` branch.

## Content Guidelines

- Focus on PHP/Symfony developers as the target audience
- Provide practical examples and use cases
- Include installation and quick start sections
- Document common patterns and best practices
- Link to relevant GitHub repositories for each package
- Maintain consistent tone and structure across packages

## AI Agent Instructions

When working with this repository:

1. **Documentation Changes**: Always update both content and navigation (sidebars.js)
2. **New Packages**: Follow existing patterns in structure and naming
3. **Diagrams**: Update both .puml source and run make to regenerate SVGs
4. **Testing**: Use `npm start` to preview changes locally
5. **Assets**: Place images in appropriate static directories
6. **Links**: Verify internal links work correctly after changes
7. **Metadata**: Ensure frontmatter is complete and accurate

This is a documentation-focused project, so prioritize clarity, accuracy, and maintainability in all changes.
