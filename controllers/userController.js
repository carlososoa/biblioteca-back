import { User } from '../models/user.js'
import 'dotenv/config'

export async function createUser (req, res) {
  try {
    const username = await User.findUserByUsername(req.body)
    const email = await User.findUserByEmail(req.body)
    if (username.length > 0) {
      res.status(400).json({ message: 'Usuario ya existe' })
    } else if (email.length > 0) {
      res.status(400).json({ message: 'Ya hay un usuario registrado con este email' })
    } else if (req.body.password.length < 8) {
      res.status(400).json({ message: 'Contraseña muy corta' })
    } else if (req.body.password.localeCompare(req.body.passwordConfirmacion) !== 0) {
      res.status(400).json({ message: 'Error! las contraseñas no concuerdan' })
    } else {
      await User.create(req.body)
      res.status(200).json({ message: 'User created successfully' })
    }
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const getUser = async (req, res) => {
  try {
    const usuario = await User.findUserById(req.params)
    res.status(200).json(usuario)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const getUserByUsername = async (req, res) => {
  try {
    const usuario = await User.findUserByUsernameNoPass(req.params)
    res.status(200).json(usuario)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const actualizarById = async (req, res) => {
  try {
    const userId = req.params.user_id
    const body = req.body
    console.log(userId, body)
    // eslint-disable-next-line no-unused-vars
    const usuario = await User.updateById(userId, body)
    res.status(200).json({ message: 'Usuario actualizado' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
