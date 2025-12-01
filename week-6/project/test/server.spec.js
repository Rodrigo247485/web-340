const http = require("http");
const server = require("../src/server");

// TODO: Implement your tests here

describe("Fantasy Character Creation API", () => {
  const character = {
    class: "Mage",
    gender: "Female",
    funfact: "Collects ancient scrolls",
  };

  // Start the server manually for tests
  beforeAll((done) => {
    server.listen(3000, done);
  });

  // Stop the server after tests
  afterAll((done) => {
    server.close(done);
  });

  // Helper function to collect response data
  function getResponseData(res, callback) {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => callback(JSON.parse(data)));
  }

  test("POST /create-character creates a character", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: `/create-character?class=${encodeURIComponent(character.class)}&gender=${encodeURIComponent(character.gender)}&funfact=${encodeURIComponent(character.funfact)}`,
      method: "POST",
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(201);
      getResponseData(res, (body) => {
        expect(body.character.class).toBe(character.class);
        expect(body.character.gender).toBe(character.gender);
        expect(body.character.funfact).toBe(character.funfact);
        done();
      });
    });

    req.end();
  });

  test("POST /confirm-character confirms creation", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm-character",
      method: "POST",
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);
      getResponseData(res, (body) => {
        expect(body.message).toBe("Character creation confirmed!");
        done();
      });
    });

    req.end();
  });

  test("GET /view-character returns the same character", (done) => {
    http.get("http://localhost:3000/view-character", (res) => {
      expect(res.statusCode).toBe(200);
      getResponseData(res, (body) => {
        expect(body.character.class).toBe(character.class);
        expect(body.character.gender).toBe(character.gender);
        expect(body.character.funfact).toBe(character.funfact);
        done();
      });
    });
  });
});