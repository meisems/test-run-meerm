# Metro Events Admin — Command Center v2.3

Professional administrative dashboard for Metro Events — built with React, Vite, and Lucide icons.

**Features:**
- ✅ Dual-factor authentication (password + access code)
- ✅ 8 admin modules: Dashboard, CRM, Checklist, Crew, Warehouse, Supplier, Quotation, Audit
- ✅ Role-based access control (RBAC) — admin, coordinator, designer, warehouse
- ✅ Inline editing across modules
- ✅ Task photo attachments with lightbox preview
- ✅ Mobile-responsive design (desktop, tablet, phone)
- ✅ Self-service password & username reset (admin can change login username)

---

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

### Demo Credentials

| Role | Username | Password | Access Code |
|------|----------|----------|-------------|
| Admin | `admin` | `Admin@2025` | `admin123` |
| Coordinator | `mdelacruz` | `Coord@2025` | `coord123` |
| Designer | `jreyes` | `Design@2025` | `design123` |
| Warehouse | `asantos` | `Ware@2025` | `ware123` |

### Build for Production

```bash
npm run build
npm run preview
```

---

## What's New in v2.3

1. **Photo Upload Fixed** — File picker now works in all environments (sandboxed iframes, Render, etc.) using native `<label htmlFor>` binding instead of JS `.click()`
2. **Admin Username Change** — Admins can now change their login username via the "Change Credentials" modal
3. **Mobile Improvements** — Better responsive wrapping for checklist controls, task rows, and modals on narrow screens

---

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — Fast build tool
- **Lucide React** — Icon library
- **Inline Styles + CSS** — Styling (no external CSS libraries)

---

## File Structure

```
metro-events-admin/
├── src/
│   ├── main.jsx                      # React entry point
│   └── MetroEventsAdmin_v23.jsx      # Main app (all-in-one)
├── index.html                        # HTML template
├── package.json                      # Dependencies
├── vite.config.js                    # Vite config
└── README.md                         # This file
```

---

## Deployment

### Render.com (Recommended)

1. Push code to GitHub
2. Go to **render.com** → **New → Static Site**
3. Connect your GitHub repo
4. Set build command: `npm install && npm run build`
5. Set publish directory: `dist`
6. Deploy

Your site will be live at `https://your-app.onrender.com`

### Other Platforms

Works on Vercel, Netlify, GitHub Pages, or any static host.

---

## Development Notes

- All state is in-memory (no backend required for demo)
- Styles are inline + global CSS in `STYLES` constant
- Responsive CSS media queries for mobile (tested at 640px, 900px breakpoints)
- No external authentication — all usernames/passwords in code (for demo only)

---

## License

MIT
