import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-24 2xl:px-48 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#020617] z-0" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] opacity-30 translate-x-1/2 translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
