# react-file-upload-progress

> File upload component for React!

[![NPM](https://img.shields.io/npm/v/cappys-react-file-upload-progress.svg)](https://www.npmjs.com/package/cappys-react-file-upload-progress)
[![NPM Downloads](https://img.shields.io/npm/dt/cappys-react-file-upload-progress.svg)](https://npmcharts.com/compare/cappys-react-file-upload-progress?interval=1)

## Example

![Example](example/2020-08-23_19-12-45.gif)

## Install

```bash
npm install --save react-file-upload-progress
```

## Usage

```jsx
import React, { useEffect, useState } from 'react'

import { UploadProgress } from 'react-file-upload-progress'
import 'react-file-upload-progress/dist/index.css'

const App = () => {
  const [item1Completed, setItem1Completed] = useState(0)
  const [item1Seconds, setItem1Seconds] = useState(100)
  const [item2Completed, setItem2Completed] = useState(0)
  const [item2Seconds, setItem2Seconds] = useState(100)

  useEffect(() => {
    if (item1Completed < 100) {
      setTimeout(() => {
        setItem1Completed(item1Completed + 10)
      }, 1000)
    }
    if (item1Seconds > 0) {
      setTimeout(() => {
        setItem1Seconds(item1Seconds - 10)
      }, 1000)
    }
    if (item1Completed < 100) {
      setTimeout(() => {
        setItem2Completed(item2Completed + 10)
      }, 1000)
    }
    if (item1Seconds > 0) {
      setTimeout(() => {
        setItem2Seconds(item2Seconds - 10)
      }, 1000)
    }
  })

  const items = [
    {
      id: 1,
      fileName: 'this_is_some_file.jpg',
      size: '1234567',
      completedPercentage: item1Completed,
      secLeft: item1Seconds
    },
    {
      id: 2,
      fileName: 'this_is_another_file.jpg',
      size: '7654321',
      completedPercentage: item2Completed,
      secLeft: item2Seconds
    }
  ]
  return <UploadProgress items={items} />
}

export default App
```

## Roadmap

- [ ] Add completed event
- [ ] Make transitions smoother
- [ ] Write unit test
- [ ] Add coverage

## License

MIT © [cappydh](https://github.com/cappydh)
