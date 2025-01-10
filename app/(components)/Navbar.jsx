
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gr dark:bg-gray-800 border-b-2 border px-10">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">HYPES</span>
      </Link>
      <div className="hidden md:flex gap-4">
        <Link href="/auth/login" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          LOGIN
        </Link>
        <Link href="/auth/signup" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          SIGNUP
        </Link>
        {/* <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Portfolio
        </Link>
        <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link> */}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            <SheetTitle>

            <Link href="/auth/login" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              LOGIN
            </Link>
            </SheetTitle>
            <SheetTitle>

            <Link href="/auth/signup" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              SIGNUP
            </Link>
            </SheetTitle>
            {/* <SheetTitle>
              
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Services
            </Link>
              </SheetTitle> */}
             
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


