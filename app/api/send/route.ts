function sanitize(input: string): string {
  return input.replace(
    /[<>&'"]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&#39;",
        '"': "&quot;",
      })[c] ?? c,
  );
}
// app/api/send/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { validateFormFields } from "@/app/lib/validateFormFields";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const token = formData.get("token");
    if (typeof token !== "string") {
      return NextResponse.json(
        { error: "Token de captcha inválido" },
        { status: 400 },
      );
    }

    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_PRIVATE_KEY ?? "",
          response: token,
        }),
      },
    ).then((res) => res.json() as Promise<{ success: boolean }>);

    if (!captchaRes.success) {
      return NextResponse.json({ error: "Captcha inválido" }, { status: 400 });
    }

    // --- Campos del formulario ---
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const email = formData.get("email");
    const telefono_pais = formData.get("telefono_pais");
    const telefono_numero = formData.get("telefono_numero");
    const asunto = formData.get("asunto");
    const mensaje = formData.get("mensaje");

    if (
      typeof nombre !== "string" ||
      typeof apellido !== "string" ||
      typeof email !== "string" ||
      typeof telefono_pais !== "string" ||
      typeof telefono_numero !== "string" ||
      typeof asunto !== "string" ||
      typeof mensaje !== "string"
    ) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 },
      );
    }

    const telefono = `${telefono_pais} ${telefono_numero}`.trim();
    const mensajeSafe = sanitize(mensaje).replace(/\n/g, "<br/>");


    // Validación adicional
    const error = validateFormFields({
      nombre,
      apellido,
      email,
      telefono_numero,
      telefono_pais,
      asunto,
      mensaje,
    });
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // --- Envío con Resend ---
    const resend = new Resend(process.env.RESEND_API_KEY ?? "");

    const response = await resend.emails.send({
      from: "Formulario MUTA AI <noreply@mutaconsultora.com.ar>",
      to: process.env.RESEND_TO_CONTACT ?? "",
      subject: asunto,
      html: `
        <p><strong>Nombre:</strong> ${sanitize(nombre)} ${sanitize(
          apellido,
        )}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Telefono:</strong> ${sanitize(telefono)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensajeSafe}</p>
      `,
    });

    return NextResponse.json({ ok: true, response }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" + error },
      { status: 500 },
    );
  }
}
