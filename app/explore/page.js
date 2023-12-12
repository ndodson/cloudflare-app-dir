export const revalidate = 60;


const getSpaces = async () => {
  const data = await fetch(`https://staging.hub.uplink.wtf/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query Spaces{
        spaces{
            name
            displayName
            members
            admins{
                address
            }
            logoUrl
        }
    }`,
    }),
    next: { tags: ["spaces"] },
    cache: 'force-cache'
  }).then((res) => res.json());
  return data;
};


export default async function Page(){
	const spaces = await getSpaces();
  	return <pre>{JSON.stringify(spaces, null, 2)}</pre>

}
