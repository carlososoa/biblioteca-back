import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import protectedRoutes from './routes/protectedRoutes.js'
import { createRequire } from 'module'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import logoutRoutes from './routes/logoutRoutes.js'
const require = createRequire(import.meta.url)

const cors = require('cors')
const app = express()
const port = process.env.PORT ?? 4000

// implementamo cors, a través del middleware
app.use(cors(
/*   {
    origin: 'https://biblioteca-front-psob.onrender.com', // Cambia esto a la URL de tu frontend
    credentials: true
  } */
))
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
