const request = require("supertest");
const express = require("express");
const router = require("./index.js");
const app = express();
const { Videogame, conn } = require("../db.js");

app.use("/", router);

describe("Good Home Routes", function () {
    test("responds to /videogames", async () => {
        const res = await request(app).get("/videogames");
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res._body.length).toBeGreaterThan(99);
    }, 30000);
});
