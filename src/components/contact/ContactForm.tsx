"use client";

import { FormEvent, useState } from "react";

type FormValues = { name: string; email: string; subject: string; message: string };
const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");
    if (!apiBaseUrl) {
      setStatus({ type: "error", text: "The contact service is not configured. Please try again later." });
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result: { message?: string; detail?: string; title?: string } = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || result.detail || result.title || "We couldn't send your message. Please try again.");

      setValues(initialValues);
      setStatus({ type: "success", text: result.message || "Your message has been sent successfully." });
    } catch (error) {
      setStatus({ type: "error", text: error instanceof Error ? error.message : "We couldn't send your message. Please try again." });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label>Name<input required maxLength={100} value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} /></label>
        <label>Email<input required type="email" maxLength={254} value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} /></label>
      </div>
      <label>Subject<input required maxLength={200} value={values.subject} onChange={(event) => setValues({ ...values, subject: event.target.value })} /></label>
      <label>Message<textarea required minLength={10} maxLength={5000} rows={6} value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} /></label>
      <div className="contact-form-footer">
        <button className="button primary" type="submit" disabled={isSending}>{isSending ? "Sending..." : "Send message"}</button>
        {status && <p className={`form-status ${status.type}`} role="status">{status.text}</p>}
      </div>
    </form>
  );
}
