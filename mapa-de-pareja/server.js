import express from 'express'
import multer from 'multer'
import exifr from 'exifr'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const env = process.env.NODE_ENV || 'dev'
const photosDir = path.join(__dirname, 'photos', env)
const dataFile = path.join(photosDir, 'data.json')
const PORT = 3000

console.log(`Environment: ${env}`)
console.log(`Photos dir:  ${photosDir}`)
console.log(`Data file:   photos/${env}/data.json`)

const app = express()
app.use(express.json())

// Serve static frontend files
app.use(express.static(__dirname, { index: 'index.html' }))

// Serve photos from the active environment's directory
app.use('/photos', express.static(path.join(__dirname, 'photos')))

// Configure multer — save uploads to the active environment's photos directory
const storage = multer.diskStorage({
  destination: photosDir,
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, `${Date.now()}${ext}`)
  }
})
const upload = multer({ storage })

// --- Helpers ---

async function readData() {
  try {
    const raw = await fs.readFile(dataFile, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeData(data) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
}

// --- Routes ---

// GET /api/photos — return all photos
app.get('/api/photos', async (_req, res) => {
  const data = await readData()
  res.json(data)
})

// POST /api/photos — upload a photo, extract EXIF GPS, save entry
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  const { caption } = req.body
  const filename = req.file.filename
  const filepath = path.join(photosDir, filename)

  let lat = null
  let lng = null

  try {
    const gps = await exifr.gps(filepath)
    if (gps) {
      lat = gps.latitude
      lng = gps.longitude
    }
  } catch {
    // No EXIF GPS data — lat/lng remain null
  }

  const entry = {
    id: String(Date.now()),
    filename,
    caption: caption || '',
    lat,
    lng,
    date: new Date().toISOString().slice(0, 10)
  }

  const data = await readData()
  data.push(entry)
  await writeData(data)

  res.status(201).json(entry)
})

// PUT /api/photos/:id — update lat, lng and/or caption
app.put('/api/photos/:id', async (req, res) => {
  const { id } = req.params
  const { lat, lng, caption } = req.body

  const data = await readData()
  const index = data.findIndex(e => e.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'Photo not found' })
  }

  if (lat !== undefined) data[index].lat = lat
  if (lng !== undefined) data[index].lng = lng
  if (caption !== undefined) data[index].caption = caption

  await writeData(data)
  res.json(data[index])
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
