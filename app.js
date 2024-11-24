/* eslint-disable camelcase */
import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import protectedRoutes from './routes/protectedRoutes.js'
import { createRequire } from 'module'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import logoutRoutes from './routes/logoutRoutes.js'
import bookRouter from './routes/bookRoutes.js'
import generoRoutes from './routes/generoRoutes.js'
import authorRoutes from './routes/authorRoutes.js'
import editorialRoutes from './routes/editorialRoutes.js'
const require = createRequire(import.meta.url)

const cors = require('cors')
const app = express()
const port = process.env.PORT ?? 4000
const url_front = process.env.URL_FRONT

// implementamo cors, a través del middleware
const corsOptions = {
  origin: `${url_front}`, // Reemplaza con el dominio de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Esto permite el envío de cookies
  allowedHeaders: ['Content-Type', 'Authorization'] // Incluye los headers que necesitas
}

app.use(cors(corsOptions))
app.use(morgan('dev'))

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('APP BIBLIOTECA')
})

app.use('/api', userRoutes)
app.use('/login', loginRoutes)
app.use('/protegida', protectedRoutes)
app.use('/logout', logoutRoutes)
app.use('/libro', bookRouter)
app.use('/genero', generoRoutes)
app.use('/autor', authorRoutes)
app.use('/editorial', editorialRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
