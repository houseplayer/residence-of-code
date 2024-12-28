import { Jimp } from "jimp"

export const resizeImage = async (buffer: Buffer, w = 480, h = 640) => {
  const image = await Jimp.read(buffer)

  image.contain({ w, h })

  return image.getBuffer("image/jpeg")
}
