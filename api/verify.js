export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  let body = {}
  try {
    const raw = req.body
    if (typeof raw === 'string') {
      body = JSON.parse(raw)
    } else if (Buffer.isBuffer(raw)) {
      body = JSON.parse(raw.toString('utf8'))
    } else if (raw && typeof raw === 'object') {
      body = raw
    }
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'bad_request', detail: String(req.body).slice(0, 200) })
  }

  const password = String(body.password || '')
  const expected = process.env.DARK_NARRATIVE_PASSWORD || ''

  if (expected && password === expected) {
    return res.status(200).json({ ok: true })
  }

  return res.status(401).json({ ok: false, error: 'invalid_password' })
}
