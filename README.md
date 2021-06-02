[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">dockerhub-proxy</h1>

> 🐙 Microservice API endpoint to validate Docker image URLs.
> https://dockerhub-proxy.oceanprotocol.com

[![Build Status](https://github.com/oceanprotocol/dockerhub-proxy/workflows/ci/badge.svg)](https://github.com/oceanprotocol/dockerhub-proxy/actions)
[![Vercel deployment](https://flat.badgen.net/badge/vercel/auto-deployment/21c4dd?icon=vercel)](https://vercel.com/oceanprotocol/dockerhub-proxy)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)

**Table of Contents**

- [🏄 Usage](#-usage)
  - [Endpoint](#endpoint)
  - [`[POST] /`](#post-)
- [⬆️ Deployment](#️-deployment)
- [🏛 License](#-license)

## 🏄 Usage

...

### Endpoint

```text
https://dockerhub-proxy.oceanprotocol.com
```

### `[POST] /`

**_Parameters_**

```json
{
  "url": "..."
}
```

**_Response_**

_Success_

```json
{
  "status": "success"
}
```

_Error_

```json
{
  "status": "error",
  "message": "Something went wrong."
}
```

## ⬆️ Deployment

Every branch or Pull Request is automatically deployed by [Vercel](https://vercel.com) with their GitHub integration. A link to a deployment will appear under each Pull Request.

## 🏛 License

```text
Copyright 2021 Ocean Protocol Foundation Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
