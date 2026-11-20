import { useEffect, useId, useState, type FormEvent } from "react";
import { cn } from "@/utils/cn";
import { visitorTypes } from "@/data/site";
import { Button, Eyebrow } from "./ui";

/**
 * Enquiries are delivered by FormSubmit (formsubmit.co) to the address below.
 * First submission after deploy sends an activation email to that inbox: click
 * the link once. Afterwards, replace the address in the URL with the random
 * alias FormSubmit gives you, so the email is not exposed in the page source.
 * Override without code changes via VITE_ENQUIRY_ENDPOINT.
 */
const CONTACT_EMAIL = "avani591@gmail.com";
const ENQUIRY_ENDPOINT =
  (import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined) ??
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Values = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  type: string;
  location: string;
  message: string;
  consent: boolean;
};

const empty: Values = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  type: "",
  location: "",
  message: "",
  consent: false,
};

export function EnquiryForm({
  variant = "full",
  defaultType = "",
  className,
  submitLabel = "Send enquiry",
}: {
  variant?: "compact" | "full";
  defaultType?: string;
  className?: string;
  submitLabel?: string;
}) {
  const uid = useId();
  const [values, setValues] = useState<Values>({ ...empty, type: defaultType });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (defaultType) setValues((v) => ({ ...v, type: defaultType }));
  }, [defaultType]);

  const set = <K extends keyof Values>(key: K, value: Values[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (!values.consent) {
      setError("Please tick the consent box so that we are allowed to reply to you.");
      return;
    }
    const data = new FormData(e.currentTarget as HTMLFormElement);
    // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
    if (data.get("_gotcha")) {
      setSent(true);
      return;
    }
    setError(null);
    setSending(true);
    try {
      const typeLabel = visitorTypes.find((t) => t.value === values.type)?.label ?? "Not given";
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website enquiry from ${values.name}${values.organisation ? `, ${values.organisation}` : ""}`,
          _replyto: values.email,
          _template: "table",
          _captcha: "false",
          Name: values.name,
          Organisation: values.organisation || "Not given",
          Email: values.email,
          Phone: values.phone || "Not given",
          "Writing as": typeLabel,
          "Campus / project location": values.location || "Not given",
          Message: values.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error("send failed");
      setSent(true);
    } catch {
      setError(
        "Sorry, your enquiry could not be sent. Please check your connection and try again" +
          (CONTACT_EMAIL ? `, or write to us at ${CONTACT_EMAIL}.` : "."),
      );
    } finally {
      setSending(false);
    }
  };

  const f = (name: string) => `${uid}-${name}`;

  if (sent) {
    const type = visitorTypes.find((t) => t.value === values.type);
    return (
      <div role="status" className={cn("rounded-[4px] border-2 border-ink bg-white p-6 md:p-8", className)}>
        <Eyebrow>Enquiry noted</Eyebrow>
        <h3 className="mt-3 text-2xl md:text-3xl">Thank you{values.name ? `, ${values.name.split(" ")[0]}` : ""}.</h3>
        <p className="mt-4 text-ink/85">
          Your message has been received
          {type ? ` and will be reviewed for ${type.group}` : ""}. We will follow up about the
          {type ? ` ${type.next}` : " next step"}.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setValues({ ...empty, type: defaultType });
            setSent(false);
          }}
        >
          Write another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("relative grid gap-5 sm:grid-cols-2", className)}>
      <div>
        <label htmlFor={f("name")} className="label">
          Name
        </label>
        <input
          id={f("name")}
          name="name"
          type="text"
          autoComplete="name"
          required
          className="field"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={f("org")} className="label">
          Organisation
        </label>
        <input
          id={f("org")}
          name="organisation"
          type="text"
          autoComplete="organization"
          className="field"
          value={values.organisation}
          onChange={(e) => set("organisation", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor={f("email")} className="label">
          Email
        </label>
        <input
          id={f("email")}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className="field"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor={f("phone")} className="label">
          Phone <span className="font-normal text-ink/55">(optional)</span>
        </label>
        <input
          id={f("phone")}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className="field"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
      </div>

      <div className={cn(variant === "full" && "sm:col-span-2")}>
        <label htmlFor={f("type")} className="label">
          I am writing as a
        </label>
        <select
          id={f("type")}
          name="type"
          required
          className="field pr-10"
          value={values.type}
          onChange={(e) => set("type", e.target.value)}
        >
          <option value="">Choose one</option>
          {visitorTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className={cn(variant === "full" && "sm:col-span-2")}>
        <label htmlFor={f("location")} className="label">
          Campus or project location <span className="font-normal text-ink/55">(optional)</span>
        </label>
        <input
          id={f("location")}
          name="location"
          type="text"
          autoComplete="address-level2"
          className="field"
          value={values.location}
          onChange={(e) => set("location", e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={f("message")} className="label">
          Message
        </label>
        <textarea
          id={f("message")}
          name="message"
          required
          className="field-area"
          placeholder="Tell us about the campus or project, the CSR plan and the outcomes you are looking for."
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={f("consent")} className="flex cursor-pointer items-start gap-3 text-[0.95rem]">
          <input
            id={f("consent")}
            name="consent"
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 accent-rust"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
          />
          <span>
            I agree that Sustain Builds may keep these details to reply to my enquiry.
          </span>
        </label>
        {error && (
          <p role="alert" className="mt-2 text-sm font-semibold text-rust">
            {error}
          </p>
        )}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" disabled={sending} className="w-full sm:w-auto">
          {sending ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}
