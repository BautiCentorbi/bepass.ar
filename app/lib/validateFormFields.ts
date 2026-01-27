export interface ContactFormFields {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}
export function validateFormFields(
  fields: ContactFormFields
): string | null {
  const { nombre, apellido, email, telefono, asunto, mensaje } = fields;

  if (!nombre || !apellido || !email.includes("@") || !email.includes(".") || !email || !telefono || !asunto || !mensaje) {
    return "Todos los campos son obligatorios.";
  }

  const campos = [nombre, apellido, email, telefono, asunto, mensaje];
  const tieneHTML = campos.some((campo) => /<[^>]*>/.test(campo));

  if (tieneHTML) {
    return "El contenido no puede tener etiquetas HTML.";
  }

  return null;
}
