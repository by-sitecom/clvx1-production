
export async function fetchAPI(
  query = "",
  variables: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };

  // WPGraphQL Plugin must be enabled
  const res = await fetch("http://clvx1.sitecom.by/graphql" as string, {
    cache: "no-store",
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
