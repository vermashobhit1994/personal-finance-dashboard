import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-black mb-2">
            AI Kharcha Hisab
          </h3>
          <p>
            Simple finance tracking for everyday clarity.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-medium text-black mb-3">
            Product
          </h4>
          <ul className="space-y-2">
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Updates</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-medium text-black mb-3">
            Legal
          </h4>
          <ul className="space-y-2">
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} AI Kharcha Hisab. All rights reserved.
      </div>
    </footer>
  )
}