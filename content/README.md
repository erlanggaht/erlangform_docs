# Struktur dokumentasi

```text
content/
├── README.md
└── docs/
    ├── meta.json
    ├── introduction.mdx
    ├── index.mdx                 # Quick Start (/docs)
    ├── basic/
    │   ├── meta.json
    │   ├── text.mdx
    │   ├── number.mdx
    │   ├── password.mdx
    │   ├── textarea.mdx
    │   ├── checkbox.mdx
    │   └── select.mdx
    ├── configuration/
    │   ├── meta.json
    │   ├── field-config.mdx
    │   └── field-section.mdx
    ├── community/
    │   ├── meta.json
    │   ├── report-a-bug.mdx
    │   └── contributing.mdx
    └── advanced/
        ├── meta.json
        ├── object.mdx
        └── arrays/
            ├── meta.json
            ├── index.mdx         # Basic Array
            └── nested.mdx
```

## Memilih lokasi halaman

- `docs/`: pengenalan dan Quick Start.
- `docs/basic/`: field tunggal seperti Text, Password, dan Select.
- `docs/configuration/`: pengaturan lintas field seperti `fieldConfig` dan section. Demo masing-masing berada di `components/configuration/`.
- `docs/advanced/`: struktur data bersarang dan konfigurasi lanjutan.
- `docs/community/`: laporan bug dan alur kontribusi ke library atau dokumentasi.
- Buat subfolder ketika satu fitur membutuhkan beberapa halaman, seperti `advanced/arrays/`.

## Menambah halaman

1. Buat file MDX di kelompok yang sesuai. Gunakan nama file huruf kecil dengan tanda hubung jika perlu.
2. Isi `title` dan `description` pada frontmatter.
3. Tambahkan nama file tanpa `.mdx` ke array `pages` di `meta.json` folder tersebut. Urutan array menentukan urutan sidebar. Untuk folder baru, tambahkan nama folder ke `pages` milik parent.
4. Ikuti pola halaman yang ada: import, preview component, penjelasan, lalu bagian Penggunaan dengan tab `form.tsx` dan `schema.ts`.
5. Gunakan import `@/components/...` untuk demo. Sediakan baris kosong setelah frontmatter dan setelah import agar MDX terbaca dengan benar.

`title` di `meta.json` menentukan judul kelompok menu; `defaultOpen` mengatur apakah kelompok terbuka saat pertama tampil. `index.mdx` mewakili URL foldernya, tanpa akhiran `/index`.

Contoh: `docs/basic/text.mdx` tersedia di `/docs/basic/text`, sedangkan `docs/advanced/arrays/index.mdx` tersedia di `/docs/advanced/arrays`.

Ketika memindahkan halaman, perbarui tautan internal dan tambahkan redirect di `next.config.mjs` agar URL lama tetap bekerja. Jalankan `npm run build` untuk memeriksa hasilnya.

File panduan ini berada di luar `docs/`, sehingga tidak tampil sebagai halaman dokumentasi publik.
