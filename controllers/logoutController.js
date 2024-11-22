const url_backend = process.env.URL_BACKEND
const SameSite = process.env.SAME_SITE
const Secure = process.env.SECURE

export const logout = async (req, res) => {
  res.cookie('access_token', 'eliminado', {
    domain: `${url_backend}`,
    path: '/',
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    sameSite: `${SameSite}`,
    secure: `${Secure}`
  })
    .set('Access-Control-Allow-Credentials', 'true')
    .status(200).send('Logout exitoso')
}
