"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import DarkNeumorphismButton from "./ui/DarkNeumorphismButton";
import { SendIcon } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Guardamos la referencia al form ANTES de cualquier await
    const form = e.currentTarget;

    // 2️⃣ Recopilamos los datos
    const formData = new FormData(form);
    const token = await recaptchaRef.current!.executeAsync();
    if (!token) {
      throw new Error("No se obtuvo el token de reCAPTCHA");
    }
    formData.append("token", token);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody.error || `HTTP ${res.status}`);
      }

      const result = await res.json();
      if (result.ok) {
        toast.success("¡Mensaje enviado correctamente!", { duration: 4000 });

        // 3️⃣ Ahora sí podemos hacer reset con seguridad
        form.reset();

        return;
      }

      toast.error(result.error || "Error al enviar.", { duration: 5000 });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Error en el servidor";
      toast.error(message, { duration: 5000 });
    } finally {
      recaptchaRef.current?.reset();
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-0 mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-8"
      >
        <span className="italic relative">
          Contactá{" "}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0"></span>
        </span>{" "}
        con nosotros
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-form space-y-6"
      >
        {/* Apila en móvil, fila en md+ */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {["nombre", "apellido"].map((field) => (
            <div key={field} className="flex flex-col gap-1 w-full">
              <label className="text-base md:text-lg text-zinc-200 capitalize">
                {field === "nombre" ? "Nombre" : "Apellido"}
              </label>
              <input
                name={field}
                required
                className="
              h-10 px-4 rounded-full
              bg-black/50 text-white placeholder-zinc-400
              focus:ring-2 focus:ring-primary
            "
                placeholder={field === "nombre" ? "Juan" : "Doe"}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-base md:text-lg text-zinc-200">Asunto</label>
          <input
            name="asunto"
            required
            className="
          h-10 px-4 rounded-full
          bg-black/50 text-white placeholder-zinc-400
          focus:ring-2 focus:ring-primary
        "
            placeholder="PUESTO: ..."
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-base md:text-lg text-zinc-200">Mensaje</label>
          <textarea
            name="mensaje"
            required
            rows={4}
            className="
          p-4 rounded-2xl
          bg-black/50 text-white placeholder-zinc-400
          focus:ring-2 focus:ring-primary
        "
            placeholder="Quiero formar parte de MUTA..."
          />
        </div>

        <DarkNeumorphismButton
          type="submit"
          label={loading ? "Enviando..." : "Enviar →"}
          ariaLabel="Enviar el formulario"
          className="w-full justify-center"
        >
          <SendIcon size={24} className="text-white" />
        </DarkNeumorphismButton>
      </motion.form>

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      />
    </section>
  );
};

export default ContactForm;
