'use server'

import { nanoid } from "nanoid"
import { db } from "./db"

function isValidURL(url: string) {
  try {
    new URL(url)
    return true
  } catch (error) {
    error && false
  }
}
export const shortenUrl = async (url: string) => {
  const isValid = isValidURL(url)
  if(!isValid) return "Invalid URL"
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const shortUrl = nanoid(6)

  const urlExists = await db.url.findFirst({
    where: {
      longUrl: url
    }
  })

  if(urlExists) return `${baseUrl}/${urlExists.shortUrl}`
  const createdUrl = await db.url.create({
    data: {
      shortUrl,
      longUrl: url
    }
  })

  return `${baseUrl}/${createdUrl.shortUrl}`
}

export const getUrl = async (url: string) => {

  const urlExists = await db.url.findUnique({
    where: {
      shortUrl: url
    }
  })
  if(!urlExists) return { error: "Url not found", success: false, data: null }

  return { error: "Url not found", success: false, data: urlExists }
}