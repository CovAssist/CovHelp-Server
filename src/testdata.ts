import {
  Volunteer,
  Patient,
  Donor,
  Medicine,
  Oxygen,
  VacantBeds,
  IVolunteer,
  IVacantBeds,
  IPatient,
  IOxygen,
  IMedicines,
  IDonor,
} from "./models";
export const populateDb = async () => {
  const user = await Volunteer.create({
    name: "Test",
    dob: new Date(),
    contact: "1234567890",
    city: "Test",
    state: "Test",
    email: "a@a.a",
    verified: true,
    status: true,
  });
  console.log(user);
};
