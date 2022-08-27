import request from "supertest"
import { expect } from "chai"

import app from "../app"


describe("App", () => {
  before(done => {
    app.listen((err: unknown) => {
      if (err) return done(err)
      return done()
    })
  })

  it("is server up", done => {
    request(app)
    .get("/")
    .expect(200, (err, res) => {
      if (err) return done(err)
      expect(res.text).to.be.equals("server is up")
      return done()
    })
  })


  it("is mongose up", done => {
    request(app)
    .get("/isMongoWorking")
    .expect(200, (err, res) => {
      if (err) return done(err)
      expect(res.text).to.be.equals("mongo is up")
      return done()
    })
  })
})