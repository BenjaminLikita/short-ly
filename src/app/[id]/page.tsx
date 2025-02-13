import { getUrl } from "@/utils/server"
import { redirect } from "next/navigation"

const RedirectToUrl = async ({ params }:{ params: {id: string} }) => {
  const url = await getUrl(params.id)
  if(!url || !url.data) throw new Error("Page Not Found")
  else redirect(url.data.longUrl)
}

export default RedirectToUrl