import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Bagian Logo + Deskripsi */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png" // letakkan file logo di folder public/logo.png
              alt="Creastik Corner Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-semibold tracking-tight">Creastik Corner</span>
          </div>
          <p className="mt-3 text-sm text-white">
            Menyediakan jasa sesuai kebutuhan anda
          </p>
        </div>

        {/* Bagian Pelayanan */}
        <div>
          <h3 className="text-sm font-semibold">Pelayanan</h3>
          <ul className="mt-3 space-y-2 text-sm text-white">
            <li>Microsoft Office</li>
            <li>Pengisian Form Survei</li>
            <li>Design Logo & Ilustrasi Digital</li>
            <li>Print Sticker Custom</li>
          </ul>
        </div>

        {/* Bagian Kontak */}
        <div>
          <h3 className="text-sm font-semibold">Kontak</h3>
          <ul className="mt-3 space-y-2 text-sm text-white">
            <li>Email: creastikcorner@gmail.com</li>
            <li>Hours: 24 jam</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs text-white">
          <p>© {new Date().getFullYear()} Creastik Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
