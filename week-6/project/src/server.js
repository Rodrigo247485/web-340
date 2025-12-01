const http = require("http");
const url = require("url");

// TODO: Implement your server here
let createdCharacter = null;

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;

  const sendJSON = (statusCode, data) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };

  if (method === "POST" && path === "/create-character") {
    const { class: charClass, gender, funfact } = parsedUrl.query;

    createdCharacter = {
      class: charClass,
      gender,
      funfact,
    };

    return sendJSON(201, {
      message: "Character created!",
      character: createdCharacter,
    });
  }

  if (method === "POST" && path === "/confirm-character") {
    if (!createdCharacter) {
      return sendJSON(400, { error: "No character to confirm." });
    }

    return sendJSON(200, { message: "Character creation confirmed!" });
  }

  if (method === "GET" && path === "/view-character") {
    if (!createdCharacter) {
      return sendJSON(404, { error: "No character found." });
    }

    return sendJSON(200, { character: createdCharacter });
  }

  sendJSON(404, { error: "Route not found" });
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}

module.exports = server;
