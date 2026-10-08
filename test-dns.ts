import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

dns.resolveSrv(
  "_mongodb._tcp.cluster0.5ejj509.mongodb.net",
  (error, addresses) => {
    if (error) {
      console.error("❌ DNS failed:", error);
      return;
    }

    console.log("✅ DNS works:");
    console.log(addresses);
  }
);