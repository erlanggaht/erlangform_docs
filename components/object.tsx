"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  profile: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
});

export const ObjectDemo = () => {
  const form = useForm({
    defaultValues: {
      profile: {
        firstName: "",
        lastName: "",
      },
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
          profile: {
            label: "Profile",
          },
        }}
      />
      <button type="submit" className="demo-button">Simpan</button>
    </form>
  );
};

