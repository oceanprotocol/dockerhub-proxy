import { VercelRequest, VercelResponse } from '@vercel/node'
import axios, { AxiosResponse, Method } from 'axios'

const API_SERVICE_URL = 'https://hub.docker.com/v2/repositories'

export interface ResponseResult {
  name?: string
  lastUpdated?: string
  tagStatus?: boolean
}

export interface DockerHubResponse {
  status: string
  message?: string
  result?: ResponseResult
}

async function CheckDockerContainer(
  image: string,
  tag: string
): Promise<DockerHubResponse> {
  try {
    let imageName = image.includes('/') ? image : `library/${image}`
    const response = await axios.get(
      `${API_SERVICE_URL}/${imageName}/tags/${tag}`
    )
    if (!response || response.status !== 200 || !response.data) {
      return { status: 'error', message: 'Container Not Found' }
    } else {
      const dockerHubResponse: ResponseResult = {
        name: response.data.name,
        lastUpdated: response.data.last_updated,
        tagStatus: response.data.tag_status
      }
      return {
        status: 'success',
        result: dockerHubResponse
      }
    }
  } catch (error) {
    return { status: 'error', message: error.message }
  }
}

export default async (req: VercelRequest, res: VercelResponse) => {
  switch (req.method) {
    case 'POST':
      res
        .status(200)
        .json(await CheckDockerContainer(req.body.image, req.body.tag))
      break
    default:
      res.status(200).send(`<strong><code>
      🐙 <br />
      Ocean Protocol DockerHub Image API<br />
      <a href="https://github.com/oceanprotocol/dockerhub-proxy" style="text-decoration:none;color:#f6388a">github.com/oceanprotocol/dockerhub-proxy</a>
  </code></strong>`)
  }
}
