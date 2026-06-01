# Metalværk

Handcrafted jewelry from Copenhagen.

## Development

Serve the `public/` folder with any static file server:

```sh
python3 -m http.server 5500 --directory public
```

Then open `http://localhost:5500`.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`.

To change the deployment domain, update `public/CNAME`.
