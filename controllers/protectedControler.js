export const saludar = async (req, res) => {
  try {
    const mensaje = 'Hola eres administrador'
    res.status(200).json({ autenticate: true, message: mensaje })
  } catch (err) {
    res.status(400).json({ autenticate: false, error: err.message })
  }
}
