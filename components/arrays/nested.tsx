"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  companies: z.array(
    z.object({
      name: z.string(),
      contacts: z.array(
        z.object({
          type: z.string(),
          phone: z.string(),
        }),
      ),
    }),
  ),
});

export const NestedArrayDemo = () => {
  const form = useForm({
    defaultValues: {
      companies: [
        {
          name: "",
          contacts: [{ type: "personal", phone: "" }],
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
          companies: {
            array: {
              itemLabel: "Company",
              addLabel: "Tambah company",
              removeLabel: "Hapus company",
            },
          },
          contacts: {
            array: {
              itemLabel: "Contact",
              addLabel: "Tambah contact",
              removeLabel: "Hapus contact",
            },
          },
        }}
      />
      <button type="submit">Simpan companies</button>
    </form>
  );
};

