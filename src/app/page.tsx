'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Digital Product & Design</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Menyediakan layanan Jasa administrasi Microsoft Office (Merapikan laporan anda, dll), Pengisian formulir survei, Design ilustrasi logo kreatif, dan Percetakan stiker premium — disesuaikan dengan kebutuhan anda dengan harga
              yang fleksibel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Lihat Layanan
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Harga bergantung pada tingkat kompleksitas dan waktu pengerjaan, Layanan cepat tersedia.</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border bg-card">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop" alt="Laptop dengan dokumen dan aset desain" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Apa yang kami kerjakan</h2>
        <p className="mt-2 text-black max-w-2xl">Menyediakan jasa yg akan membantu pekerjaan anda menjadi lebih mudah dan efisien</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {/* Card Item */}
          {[
            {
              icon: '📊',
              title: 'Administrasi Microsoft Office',
              desc: 'Butuh bantuan mengerjakan tugas dengan Word atau Excel? Kami siap membantu dengan hasil rapi, cepat, dan sesuai kebutuhan Anda',
              delay: 0,
            },
            {
              icon: '📝',
              title: 'Pengisian Formulir Survei',
              desc: 'Kesulitan mencari responden? 📊 Kami menyediakan jasa pengisian formulir survei untuk mendukung penelitian skripsi maupun riset Anda',
              delay: 0.1,
            },
            {
              icon: '🎨',
              title: 'Desain Logo & Brand',
              desc: 'Menyediakan Jasa design Logo custom dengan konsep yang disesuaikan keinginan pelanggan, bantu bisnis anda tampil beda dengan logo yang unik, relevan, dan berkelas.',
              delay: 0.2,
            },
            {
              icon: '🏷️',
              title: 'Percetakan Stiker',
              desc: 'Menyediakan print sticker produk UMKM, Cetak stiker custom dengan kualitas terbaik untuk kebutuhan personal maupun bisnis Anda',
              delay: 0.3,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.07,
                boxShadow: '0px 8px 25px rgba(0,0,0,0.15)',
                background: 'linear-gradient(135deg, rgba(255,99,132,0.9), rgba(54,162,235,0.9), rgba(22, 151, 158, 0.9))',
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: item.delay }}
              viewport={{ once: true }}
              className="rounded-lg border p-6 bg-card cursor-pointer transition-colors duration-300 text-black hover:text-white"
            >
              <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                <span className="text-lg">{item.icon}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA band */}

    </main>
  );
}
