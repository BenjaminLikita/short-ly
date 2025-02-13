import { getUrl } from "@/utils/server"
import { redirect } from "next/navigation"

const RedirectToUrl = async ({ params }:{ params: Promise<{id: string}> }) => {
  const id = (await params).id
  const url = await getUrl(id)
  if(!url || !url.data) throw new Error("Page Not Found")
  else redirect(url.data.longUrl)
}

export default RedirectToUrl