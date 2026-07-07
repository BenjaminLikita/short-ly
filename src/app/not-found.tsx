import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-5">
      <h1 className="text-3xl font-geist text-black">Page Not Found</h1>
      <p className="text-lg text-gray-600">The page you are looking for does not exist</p>
      <Link href="/" className="bg-[#0099ff] border border-[#1443632a] text-white py-2 px-3 rounded-lg flex justify-center items-center gap-2">
        <ArrowLeft /> Go Home
      </Link>
    </div>
  )
}

export default NotFound
