// ClientsTeaServer.jsx

import ClientsTea from "./ClientsTea";

export default async function ClientsTeaServer( { data } ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/testimonials?depth=1`, {
    cache: "no-store", // always fresh (good for CMS content)
    // or: next: { revalidate: 60 }  // cache 60 sec
    // credentials: "include", // include cookies for auth if needed
  });

  
  if (!res.ok) return <ClientsTea  />;

  const json = await res.json();

  // Payload response shape: { data: { docs: [...] } }
  
  const reviews = json?.docs ?? [];

  return <ClientsTea     />;
}