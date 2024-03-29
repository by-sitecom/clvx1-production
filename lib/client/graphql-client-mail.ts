
export async function fetchAPIMail(
  query = "",
  variables: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };

  // WPGraphQL Plugin must be enabled
  const res = await fetch("https://clvx.homerecipes.co.uk/graphql" as string, {
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
    return json.errors;
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
