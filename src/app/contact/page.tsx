'use client';

import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const details = formData.get('details') as string;

    const message = `*=== PESANAN BARU - Creastik Corner ===*\n\n*NAMA:* ${name}\n*EMAIL:* ${email}\n\n*LAYANAN:* ${service}\n\n*PESAN:* ${details}\n\n---\n__Dikirim melalui website CreastikCorner_`;

    const phoneNumber = '6282364442709'; 
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = waUrl;
    setStatus('idle');
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Order</h1>
      <p className="mt-3 text-black">
        Hubungi kontak dibawah untuk memesan layanan kami
      </p>

      {/* Card wrapper biar ada border */}
      <div className="mt-8 rounded-lg border border-gray-300 bg-white shadow-sm p-6">
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium">Nama</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Layanan</label>
            <select
              name="service"
              required
              className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="Microsoft Office">Microsoft Office</option>
              <option value="Pengisian Form Survei">Pengisian Form Survei</option>
              <option value="Logo & Brand Design">Design Logo & Ilustrasi Digital</option>
              <option value="Sticker Printing">Print Sticker Custom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Pesan</label>
            <textarea
              name="details"
              required
              rows={5}
              className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
            >
              {status === 'loading' ? 'Mengirim...' : 'Kirim'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
