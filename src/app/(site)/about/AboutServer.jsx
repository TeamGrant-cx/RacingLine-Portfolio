import CardFamily from "@/Components/CardFamily/CardFamily";

export default async function CardFamilyServer() {
const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/team-members?depth=1&sort=order`,
  { cache: "no-store" }
);

  if (!res.ok) return <CardFamily data={[]} />;

  const json = await res.json();

  const data = json?.docs ?? [];

  return (
    <>
      {data.length > 0 ? (
        data.map((member) => (
          <CardFamily key={member.id} data={member} />
        ))
      ) : (
        <CardFamily data={[]} />
      )}
    </>
  );
}