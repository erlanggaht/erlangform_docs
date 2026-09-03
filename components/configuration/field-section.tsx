"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  email: z.string().email("Masukkan email yang valid"),
  fullName: z.string().min(2, "Nama minimal 2 karakter"),
  bio: z.string(),
});

type FormValues = z.infer<typeof schema>;

export const FieldSectionDemo = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      fullName: "",
      bio: "",
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
          username: {
            label: "Username",
            placeholder: "Enter username",
            section: "account",
          },
          email: {
            label: "Email",
            placeholder: "nama@example.com",
            section: "account",
          },
          fullName: {
            label: "Nama lengkap",
            placeholder: "Masukkan nama lengkap",
            section: "profile",
          },
          bio: {
            label: "Biography",
            type: "textarea",
            section: "profile",
          },
        }}
        sectionConfig={{
          account: {
            title: "Informasi akun",
            description: "Username dan email untuk akun Anda.",
          },
          profile: {
            title: "Profil",
            description: "Bagian ini bisa dibuka dan ditutup.",
            collapsible: true,
            defaultOpen: true,
          },
        }}
      />
      <button type="submit" className="demo-button">Simpan</button>
    </form>
  );
};
