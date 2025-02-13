'use client'

import { shortenUrl } from '@/utils/server'
import { Copy, CopyCheck, Link, Scissors } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Card = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [submitting, setSubmitting] = useState(false)


  const onCopy = () => {
    if(!shortUrl) return
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)

  const onSubmit = async () => {
    setSubmitting(true)
    const responseUrl = await shortenUrl(url)
    setShortUrl(responseUrl)
    setSubmitting(false)
  }
  return (
    <div className="border border-gray-100 border-b-0 border-r-0 border-l-0 bg-whit rounded-2xl shadow-lg p-10 z-[1000] w-[100%] flex-[0] md:flex-[1] space-y-3 mt-5 md:mt-0 backdrop-blur-md">
      <div className="space-y-3">
        <label htmlFor="url" className="font-medium flex items-center gap-1"><Link />Enter your long Url URL here</label>
        <input value={url} className='border border-gray-100 rounded-xl p-3 w-full focus:border-none active:border-none' onChange={onInputChange} alt="url-input" />
      </div>
      <div className='border border-gray-100 rounded-xl flex truncate items-center justify-between'>
        <p className='p-3 text-gray-500/50 text-sm md:text-base flex-[3] truncate'>{shortUrl || "Generate your short url"}</p>
        <button className='bg-[#0099ff] text-white py-2 px-3 rounded-lg flex-[1] md:flex-[0] font-light text-sm flex items-center gap-2 mr-2' onClick={onCopy}>{copied ? <><CopyCheck />Copied</> : <><Copy />Copy</>}</button>
      </div>

      <button className={`bg-[#0099ff] border border-[#1443632a] w-full text-white py-2 px-3 rounded-lg flex justify-center items-center gap-2 ${submitting && 'opacity-65'}`} onClick={onSubmit} disabled={submitting}>{submitting ? <ClipLoader size={20} color='#fff' /> : <><Scissors /> Shorten</>}</button>
    </div>
  )
}

export default Card