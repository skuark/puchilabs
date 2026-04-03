# Mapa de pareja

Mapa interactivo con fotos geolocalizadas de momentos de pareja. Las coordenadas se extraen automáticamente de los metadatos EXIF de cada foto; si no existen, se pueden introducir a mano o pinchando en el mapa.

## Setup

### 1. Install dependencies

```bash
cd mapa-de-pareja
npm install
```

### 2. Create the iCloud folders

Create the following folders inside your iCloud Drive (Puchito will help with this step):

```
<icloud-drive>/puchilabs/mapa-de-pareja/dev/
<icloud-drive>/puchilabs/mapa-de-pareja/prod/
```

### 3. Create the symlinks

The `photos/` directory is not included in the repository. Create it and link each environment to its iCloud folder:

```bash
mkdir photos
ln -s <icloud-drive>/puchilabs/mapa-de-pareja/dev photos/dev
ln -s <icloud-drive>/puchilabs/mapa-de-pareja/prod photos/prod
```

Photos and data files (`data.json`) are stored inside each iCloud folder, so everything syncs automatically across devices.

### 4. Run the server

```bash
npm run dev    # development environment — http://localhost:3000
npm run prod   # production environment  — http://localhost:3000
```

---

## Stack

- **Frontend:** HTML, CSS, JavaScript vanilla, [Leaflet.js](https://leafletjs.com)
- **Backend:** Node.js + Express
- **EXIF:** [exifr](https://github.com/MikeKovarik/exifr)
- **Uploads:** multer
- **Storage:** local directory symlinked to iCloud

## Structure

```
mapa-de-pareja/
├── index.html        — main interface (Puchita)
├── app.js            — frontend logic (Puchita)
├── style.css         — styles (Puchita)
├── server.js         — REST API (Puchito)
├── package.json      — dependencies and scripts
└── photos/           — not in git, created manually
    ├── dev/          — symlink to <icloud-drive>/.../dev/
    │   └── data.json — photo entries for the dev environment
    └── prod/         — symlink to <icloud-drive>/.../prod/
        └── data.json — photo entries for the production environment
```

## Environments

The project has two independent environments with separate data and photos:

| Environment | Command | Purpose |
|-------------|---------|---------|
| Development | `npm run dev` | Testing during development |
| Production | `npm run prod` | Final photos and data |

## API

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/photos` | Returns all photos for the active environment |
| POST | `/api/photos` | Upload a photo (multipart: `photo` + `caption`) |
| PUT | `/api/photos/:id` | Update `lat`, `lng` and/or `caption` |
| GET | `/photos/dev/:filename` | Serve a dev photo file |
| GET | `/photos/prod/:filename` | Serve a prod photo file |

## Data format

```json
{
  "id": "1720956600000",
  "filename": "1720956600000.jpg",
  "caption": "Nuestra primera vez en el mar",
  "lat": 36.52,
  "lng": -6.29,
  "date": "2025-07-14"
}
```

`lat` and `lng` are `null` if the photo has no GPS metadata.
