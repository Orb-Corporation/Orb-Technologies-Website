# Orb Technologies website

The public-facing website for Orb Technologies, the product-development organisation within Orb Corporation.

## Local preview

This is a dependency-free static website. Open `index.html` directly, or run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Create a static-site service using this repository as the source. Leave the build command empty and set the publish directory to the repository root (`.`). No Node.js installation or package manager is required.

## Structure

- `index.html` — page content and navigation
- `site.css` — responsive visual system
- `site.js` — accessible mobile navigation and dynamic footer year
- `favicon.svg` — site icon

## Product status

The catalogue intentionally distinguishes active development, experimental work, prototypes and planned concepts. Project maturity is not implied to be production readiness. Follow the linked repositories or Orb Corporation project pages for current details.

## Organisation

Orb Technologies develops and maintains practical software, digital tools and services. Experimental work belongs to Orb Labs and may be handed over for product development when it is ready.
