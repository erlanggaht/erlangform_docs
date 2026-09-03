"use client";

import { useForm } from "@tanstack/react-form";
import { ErlForm } from "erlangform";
import { z } from "zod";

const schema = z.object({
    age: z.number("Umur harus berupa angka").min(1, "Umur harus lebih dari 0"),
});

export const NumberDemo = () => {
    const form = useForm({
        defaultValues: { age: 0 },
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
                    age: {
                        label: "Umur",
                        placeholder: "Masukkan umur",
                    },
                }}
            />
            <button type="submit" className="demo-button">Simpan</button>
        </form>
    );
};
