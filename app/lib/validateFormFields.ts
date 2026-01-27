export interface ContactFormFields {
  nombre: string;
  apellido: string;
  email: string;
  telefono_pais: string;
  telefono_numero: string;
  asunto: string;
  mensaje: string;
}

export function validateFormFields(fields: ContactFormFields): string | null {
  const {
    nombre,
    apellido,
    email,
    telefono_pais,
    telefono_numero,
    asunto,
    mensaje,
  } = fields;

  // trim para evitar espacios
  const n = nombre?.trim();
  const a = apellido?.trim();
  const e = email?.trim();
  const tp = telefono_pais?.trim();
  const tn = telefono_numero?.trim();
  const as = asunto?.trim();
  const m = mensaje?.trim();

  if (!n || !a || !e || !tp || !tn || !as || !m) {
    return "Todos los campos son obligatorios.";
  }

  // email básico
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  if (!emailOk) return "Ingresá un email válido.";

  // teléfono: solo dígitos (permitimos espacios y guiones y los limpiamos)
  const phoneDigits = tn.replace(/[^\d]/g, "");
  if (phoneDigits.length < 6) {
    return "Ingresá un número de teléfono válido.";
  }

  // anti-HTML
  const campos = [n, a, e, tp, tn, as, m];
  const tieneHTML = campos.some((campo) => /<[^>]*>/.test(campo));
  if (tieneHTML) return "El contenido no puede tener etiquetas HTML.";

  return null;
}
