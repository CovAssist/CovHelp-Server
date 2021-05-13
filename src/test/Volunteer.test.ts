import "mocha";
import { expect } from "chai";
import { populateVolunteer } from "../testdata";
import request from "supertest";
import app from "../index";

before((done) => {
  populateVolunteer().then(() => {
    done();
  });
});
describe("Testing Lists", () => {
  it("volunteer list", (done) => {
    request(app)
      .get("/api/volunteer/list?start=0&end=5&verified=true&status=false")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.data.data).to.be.an("array");
        expect(res.body.data.data.length).to.lessThanOrEqual(6);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
  it("should not return volunteer list", (done) => {
    request(app)
      .get("/api/volunteer/list?verified=true&status=false")
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
