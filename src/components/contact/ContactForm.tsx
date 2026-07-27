"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

const fieldClass =
  "w-full rounded-xl border border-negro/15 bg-white/60 px-4 py-3 text-sm text-negro placeholder:text-negro/40 transition-colors focus:border-rojo focus:outline-none focus:ring-2 focus:ring-rojo/20";

const labelClass =
  "mb-2 block font-display text-xs font-bold uppercase tracking-widest text-crema/50";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      `Hola! Soy ${form.nombre || "—"}.`,
      form.servicio && `Me interesa: ${form.servicio}.`,
      form.mensaje && `Mensaje: ${form.mensaje}`,
      form.email && `Mi email: ${form.email}`,
      form.whatsapp && `Mi WhatsApp: ${form.whatsapp}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(lines), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            className={fieldClass}
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            className={fieldClass}
            placeholder="291..."
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass}
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="servicio" className={labelClass}>
          Servicio
        </label>
        <select
          id="servicio"
          name="servicio"
          className={fieldClass}
          value={form.servicio}
          onChange={(e) => update("servicio", e.target.value)}
        >
          <option value="">Elegí un servicio (opcional)</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          className={fieldClass}
          placeholder="Contanos qué hace tu negocio y qué necesitás."
          value={form.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-rojo px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-rojo-soft sm:w-auto"
      >
        Enviar por WhatsApp
      </button>
      <p className="text-xs text-crema/40">
        Al enviar se abre WhatsApp con tu mensaje ya armado, listo para
        mandarnos.
      </p>
    </form>
  );
}
