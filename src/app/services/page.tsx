import Image from "next/image";

export const metadata = {
  title: "Creastik Corner - Services",
  description:
    "Microsoft Office admin, research survey, creative logo design, and premium sticker printing.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Layanan Kami
        </h1>
        <p className="mt-3 text-black">
          Pilih layanan yang sesuai kebutuhan Anda. Harga fleksibel sesuai
          tingkat kesulitan & permintaan.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 - Office Admin */}
        <div className="rounded-lg border bg-card shadow-sm hover:shadow-md transition overflow-hidden">
          <Image
            src="/MsOffice.png"
            alt="Microsoft Office Administration"
            width={400}
            height={250}
            className="w-full h-70 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">Microsoft Office</h3>
            <p className="mt-2 text-sm text-black">
              Bantuan pengerjaan Word, Excel, PowerPoint dengan hasil rapi dan
              profesional.
            </p>
            <p className="mt-3 font-semibold text-primary"> Harga mulai dari Rp 50.000</p>
          </div>
        </div>

        {/* Card 2 - Survey */}
        <div className="rounded-lg border bg-card shadow-sm hover:shadow-md transition overflow-hidden">
          <Image
            src="/survei.png"
            alt="Survey Form Filling"
            width={400}
            height={250}
            className="w-full h-70 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">Formulir Survei</h3>
            <p className="mt-2 text-sm text-black">
              Jasa pengisian formulir survei untuk penelitian maupun riset
              akademik anda.
            </p>
            <p className="mt-3 font-semibold text-primary"> Harga mulai dari Rp 1.000 / responden</p>
          </div>
        </div>

        {/* Card 3 - Logo */}
        <div className="rounded-lg border bg-card shadow-sm hover:shadow-md transition overflow-hidden">
          <Image
            src="/design.png"
            alt="Logo Design"
            width={400}
            height={250}
            className="w-full h-70 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">Design Ilustrasi</h3>
            <p className="mt-2 text-sm text-black">
              Menyediakan jasa design ilustrasi, Logo custom dengan konsep unik, relevan, dan sesuai identitas
              brand Anda.
            </p>
            <p className="mt-3 font-semibold text-primary">Harga mulai dari Rp 50.000</p>
          </div>
        </div>

        {/* Card 4 - Sticker */}
        <div className="rounded-lg border bg-card shadow-sm hover:shadow-md transition overflow-hidden">
          <Image
            src="/sticker.png"
            alt="Sticker Printing"
            width={400}
            height={250}
            className="w-full h-70 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">Cetak Stiker</h3>
            <p className="mt-2 text-sm text-black">
              Digital printing, Cetak stiker custom dengan kualitas terbaik untuk bisnis maupun
              personal.
            </p>
            <p className="mt-3 font-semibold text-primary">
              Rp 15.000 + cutting, kertas gloosy, ukuran kertas (A3+)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
