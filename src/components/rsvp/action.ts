"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export type GuestbookState =
  | {
      errors?: string;
      failure?: string;
      success?: string;
    }
  | undefined;

export const submit = async (
  _: any,
  formData: FormData,
): Promise<GuestbookState> => {
  const schema = z.object({
    name: z
      .string({
        invalid_type_error: "Nama tamu tidak valid",
        required_error: "Nama tamu harus diisi",
      })
      .min(3, {
        message: "Nama tamu minimal 3 karakter",
      })
      .max(40, {
        message: "Nama tamu maksimal 40 karakter",
      }),
    message: z
      .string()
      .min(6, {
        message: "Pesan minimal 6 karakter",
      })
      .max(400, {
        message: "Pesan maksimal 400 karakter",
      }),
    present: z.boolean({
      invalid_type_error: "Status kehadiran tidak valid",
      required_error: "Status kehadiran harus diisi",
    }),
  });

  const validation = schema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
    present: formData.get("present") === "1",
  });

  if (!validation.success) {
    return {
      errors: validation.error.errors[0].message,
    };
  }

  try {
    await sql`
      INSERT INTO guestbook_wedding_001 (name, message, present)
      VALUES (${validation.data.name}, ${validation.data.message}, ${validation.data.present})
    `;
  } catch {
    return {
      failure: "Terjadi kesalahan saat menyimpan",
    };
  }

  revalidatePath("/");

  return {
    success: "Ucapan berhasil disimpan",
  };
};
