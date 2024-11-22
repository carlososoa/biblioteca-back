export const logout = async (req, res) => {
  res.cookie('access_token', 'eliminado', {
    domain: 'localhost',
    path: '/',
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    sameSite: 'lax',
    secure: false
  })
    .set('Access-Control-Allow-Credentials', 'true')
    .status(200).send('Logout exitoso')
}
