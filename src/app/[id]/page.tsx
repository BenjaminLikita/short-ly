import { getUrl } from "@/utils/server"
import { notFound, redirect } from "next/navigation"

const RedirectToUrl = async ({ params }:{ params: Promise<{id: string}> }) => {
  const id = (await params).id
  const url = await getUrl(id)
  if(!url?.data) notFound()
  else redirect(url.data.longUrl)
}

export default RedirectToUrl