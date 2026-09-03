"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  email: z.string().email("Masukkan email yang valid"),
  bio: z.string(),
});

type FormValues = z.infer<typeof schema>;

export const FieldConfigDemo = () => {
  const form = useForm({
    defaultValues: { username: "", email: "", bio: "" },
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
          username: {
            label: "Username",
            placeholder: "Enter username",
            description: "Gunakan minimal 3 karakter.",
          },
          email: {
            label: "Email",
            placeholder: "nama@example.com",
          },
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
