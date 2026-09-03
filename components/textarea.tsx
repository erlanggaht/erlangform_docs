"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  bio: z.string().min(5, "Biography minimal 5 karakter"),
});

export const TextareaDemo = () => {
  const form = useForm({
    defaultValues: { bio: "" },
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
          bio: {
            label: "Biography",
            type: "textarea",
            placeholder: "Ceritakan tentang diri Anda",
          },
        }}
      />
      <button type="submit" className="demo-button">Simpan</button>

    </form>
  );
};

