import ContactClient from "./ContactClient";

export default async function ContactPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/globals/contact-info`, {
    cache: "no-store",
  });

  
  if (!res.ok) return <ContactClient data={[]} />;

  const json = await res.json();
  
  const data = json;

  return <ContactClient data={data} />;
}
