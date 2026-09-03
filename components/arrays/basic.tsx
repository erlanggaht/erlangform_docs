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
      <ErlForm
        form={form}
        schema={schema}
        fieldConfig={{
          contacts: {
            label: "Daftar Kontak",
            array: {
              itemLabel: (_: any, index: number) => `Contact ${index + 1}`,
              addLabel: "Tambah contact",
              removeLabel: "Hapus contact",
            },
          },
        }}
      />
      <button type="submit" className="demo-button">Simpan</button>
    </form>
  );
};

