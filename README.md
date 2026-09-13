# AI Creative Frontend

Next.js frontend for the AI Creative Director portfolio and Kubernetes/Argo CD lab.

## Local run

```bash
npm install
npm run dev
```

Environment:
- `NEXT_PUBLIC_API_URL` defaults to `http://localhost:8080`

## Editorial luxury redesign

The redesign branch uses real portfolio photography and AI film assets under `public/media`.

Expected files:

```text
public/media/
  hero.webp
  about.webp
  automotive.webp
  editorial.webp
  fantasy.webp
  automotive.mp4
  editorial.mp4
  fantasy.mp4
```

On Windows, extract the prepared media pack and run:

```powershell
.\scripts\import-media.ps1 -Source "C:\path\to\ai-creative-media-pack"
```

The script checks out `feat/editorial-luxury-redesign`, copies the assets, commits them and pushes the branch.

The portfolio includes backend API integration, container build, CI, Helm deployment, GHCR publishing and Argo CD delivery through the `k8s-kind` repository.
