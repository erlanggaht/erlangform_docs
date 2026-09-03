"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  country: z.string(),
});

export const SelectDemo = () => {
  const form = useForm({
    defaultValues: { country: "id" },
    validators: { onChange: schema },
    onSubmit: ({ value }) => alert(JSON.stringify(value)),
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
          country: {
            label: "Country",
            options: [
              { label: "Indonesia", value: "id" },
              { label: "Japan", value: "jp" },
            ],
          },
        }}
      />
      <button type="submit" className="demo-button">Simpan</button>
    </form>
  );
};

