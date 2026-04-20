export async function GET() {
  const clientId = "7ba2148e95ea414ebeb86195f4877722";
  const clientSecret = "427927d6a65541bbb58badf7d27724e4";

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  return Response.json(data);
}
