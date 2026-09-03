"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  password: z.string(),
});

type FormValues = z.infer<typeof schema>;

export const PasswordDemo = () => {
  const form = useForm({
    defaultValues: { password: "" },
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
      <ErlForm<FormValues>
        form={form}
        schema={schema}
        fieldConfig={{
          password: {
            label: "Password",
            type: "password",
            placeholder: "Masukkan password",
          },
        }}
      />
      <button type="submit" className="demo-button">Simpan</button>
    </form>
  );
};
