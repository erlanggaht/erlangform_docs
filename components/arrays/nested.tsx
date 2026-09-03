"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  companies: z.array(
    z.object({
      name: z.string().min(2, "Nama perusahaan minimal 2 karakter"),
      contacts: z.array(
        z.object({
          type: z.string(),
          phone: z.string(),
          companyName: z.string(),
          active: z.boolean(),
        }),
      ),
    }),
  ),
});

type FormValues = z.infer<typeof schema>;

export const NestedArrayDemo = () => {
  const form = useForm({
    defaultValues: {
      companies: [
        {
          name: "ErlanggaTech",
          contacts: [
            {
              type: "",
              phone: "",
              companyName: "",
              active: false,
            },
          ],
        },
      ],
    },
    validators: { onChange: schema },
    onSubmit: ({ value }) => alert(JSON.stringify(value, null, 2)),
  });

  return (
    <form
      className="demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
    >
      <ErlForm<FormValues>
        form={form}
        schema={schema}
        fieldConfig={{
          companies: {
            section: "Daftar Perusahaan",
            array: {
              itemLabel: (item, index) =>
                item.name ? item.name : `Perusahaan #${index + 1}`,
              addLabel: "+ Tambah Perusahaan",
              removeLabel: "Hapus Perusahaan",
            },
            name: {
              label: "Nama Perusahaan",
              placeholder: "PT Nama Perusahaan",
            },
            contacts: {
              array: {
                itemLabel: (_, index) => `Kontak perusahaan #${index + 1}`,
                addLabel: "+ Tambah Kontak Perusahaan",
                removeLabel: "Hapus Kontak",
              },
              type: {
                label: "Tipe Kontak",
                options: [
                  { label: "Personal", value: "personal" },
                  { label: "Perusahaan", value: "company" },
                ],
              },
              phone: {
                label: "Nomor Telepon",
                placeholder: "0812xxxxxxxx",
              },
              companyName: {
                label: "Nama PT/CV",
                placeholder: "PT Nama Kontak",
                showIf: (contact) => contact.type === "company",
                requiredIf: (contact) => contact.type === "company",
                clearOnHide: true,
              },
              active: {
                label: "Status Aktif",
              },
            },
          }
        }}
      />
      <button type="submit" className="demo-button mt-4">Simpan</button>
    </form>
  );
};
