const IMAGE_PATH = '/images/'
const IMAGE_EXTENSION = '.png'

export const createPublicImagePath = (fileName: string) => {
  return `${IMAGE_PATH}${fileName}${IMAGE_EXTENSION}`
}

type IMAGE_ITEM = {
  id: number
}

export const IMAGE_LIST:IMAGE_ITEM[] = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
  {
    id: 9
  },
  {
    id: 10
  },
]