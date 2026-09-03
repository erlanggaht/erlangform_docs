"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
});

export const TextDemo = () => {
  const form = useForm({
    defaultValues: { username: "" },
    validators: { onChange: schema },
    onSubmit: ({ value }) => alert(JSON.stringify(value)),
  });

  return (
    <form
      className="demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        form.handleSubmit();
      }}
    >
      <ErlForm
        form={form}
        schema={schema}
        fieldConfig={{
          username: {
            label: "Username",
            placeholder: "Enter username",
          },
        }}
      />
      <button type="submit" className="demo-button">Simpan</button>
    </form>
  );
};
