import { VercelRequest, VercelResponse } from '@vercel/node'
import axios, { AxiosResponse, Method } from 'axios'

export default async (req: VercelRequest, res: VercelResponse) => {
  switch (req.method) {
    case 'POST':
      res.status(200).json(req.body.url)
      break
    default:
      res.status(200).send(`<strong><code>
      🐙 <br />
      Ocean Protocol DockerHub Image API<br />
      <a href="https://github.com/oceanprotocol/dockerhub-proxy" style="text-decoration:none;color:#f6388a">github.com/oceanprotocol/dockerhub-proxy</a>
  </code></strong>`)
  }
}
