"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  contacts: z.array(
    z.object({
      type: z.string(),
      phone: z.string(),
      active: z.boolean(),
    }),
  ),
});

type FormValues = z.infer<typeof schema>;

export const ArrayDemo = () => {
  const form = useForm({
    defaultValues: {
      contacts: [
        {
          type: "personal",
          phone: "",
          active: true,
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
          contacts: {
            section: "Daftar Kontak",
            layout: { colSpan: 12 },
            array: {
              itemLabel: (_, index) => `Kontak #${index + 1}`,
              addLabel: "+ Tambah Kontak Baru",
              removeLabel: "Hapus Kontak",
            },
            type: {
              label: () => "Tipe Kontak",
              options: [
                { label: "Personal", value: "personal" },
                { label: "Perusahaan", value: "company" },
              ],
            },
            phone: {
              label: "Nomor Telepon",
              placeholder: "0812xxxxxxxx",
            },
          },
        }}
        sectionConfig={{
          contacts: {
            title: "Daftar Kontak",
          },
        }}
      />
      <button type="submit" className="demo-button mt-4">Simpan</button>
    </form>
  );
};
