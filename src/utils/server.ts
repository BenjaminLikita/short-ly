'use server'

import { nanoid } from "nanoid"
import { db } from "./db"

const baseUrl = process.env.BASE_URL

function isValidURL(url: string) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const shortenUrl = async (url: string) => {
  const trimmed = url.trim()
  const isValid = isValidURL(trimmed)
  if(!isValid) return "Invalid URL"
  const shortUrl = nanoid(6)

  const urlExists = await db.url.findUnique({
    where: {
      longUrl: trimmed
    }
  })

  if(urlExists) return `${baseUrl}/${urlExists.shortUrl}`
  const createdUrl = await db.url.create({
    data: {
      shortUrl,
      longUrl: trimmed
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

  return { success: true, data: urlExists }
}