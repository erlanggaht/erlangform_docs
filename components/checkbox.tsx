"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
  acceptTerms: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export const CheckboxDemo = () => {
  const form = useForm({
    defaultValues: { acceptTerms: false },
    validators: { onChange: schema },
    onSubmit: ({ value }) => alert(String(value.acceptTerms)),
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
          acceptTerms: {
            label: "Saya menyetujui syarat dan ketentuan",
            type: "checkbox",
          },
        }}
      />
    </form>
  );
};
