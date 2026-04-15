export default async function handler(req, res) {
  // CORS (important since your frontend may be on Google Cloud)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, phone, service, message } = req.body;

    if (!firstName || !lastName || !phone || !service) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "📩 New Lead",
            color: 5814783,
            fields: [
              { name: "Name", value: `${firstName} ${lastName}` },
              { name: "Phone", value: phone },
              { name: "Service", value: service },
              { name: "Message", value: message || "N/A" },
            ],
          },
        ],
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
