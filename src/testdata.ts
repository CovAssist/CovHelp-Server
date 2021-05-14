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
import faker from "faker";
export const populateVolunteer = async () => {
  await Volunteer.deleteMany({});
  let volunteers: Array<IVolunteer> = [];
  for (let i = 0; i <= 50; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    let bool1 = faker.datatype.boolean();
    let bool2 = faker.datatype.boolean();
    if ((bool1 == bool2) == false) {
      const rdm = Math.floor(Math.random() * 10);
      if (rdm % 2 == 0) {
        bool2 = true;
      } else {
        bool1 = true;
      }
    }
    let newVolunteer = new Volunteer({
      email: faker.internet.email(firstname, lastname),
      name: `${firstname} ${lastname}`,
      contact: faker.phone.phoneNumber(),
      dob: faker.date.past(),
      city: faker.address.city(),
      state: faker.address.state(),
      verified: bool1,
      status: bool2,
    });
    volunteers.push(newVolunteer);
  }
  await Volunteer.insertMany(volunteers);
};
export const populateDb = async (done?: Function) => {
  try {
    let volunteers = [];
    let patients = [];
    let beds = [];
    let oxygen = [];
    let donors = [];
    let medicines = [];
    for (let i = 0; i <= 100; i++) {
      const firstname = faker.name.firstName();
      const lastname = faker.name.lastName();
      const firstname1 = faker.name.firstName();
      const lastname1 = faker.name.lastName();
      const firstname2 = faker.name.firstName();
      const lastname2 = faker.name.lastName();
      let bool1 = faker.datatype.boolean();
      let bool2 = faker.datatype.boolean();
      if ((bool1 == bool2) == false) {
        const rdm = Math.floor(Math.random() * 10);
        if (rdm % 2 == 0) {
          bool2 = true;
        } else {
          bool1 = true;
        }
      }
      let newVolunteer = {
        email: faker.internet.email(firstname, lastname),
        name: `${firstname} ${lastname}`,
        contact: faker.phone.phoneNumber(),
        dob: faker.date.past(),
        city: faker.address.city(),
        state: faker.address.state(),
        verified: bool1,
        status: bool2,
      };
      let newDonor = {
        email: faker.internet.email(firstname1, lastname1),
        dob: faker.date.past(),
        contact: faker.phone.phoneNumber(),
        name: `${firstname1} ${lastname1}`,
        city: faker.address.city(),
        state: faker.address.state(),
        recovered: faker.datatype.number(35),
        blood: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
        date: faker.date.future(),
      };
      let newPatient = {
        email: faker.internet.email(firstname2, lastname2),
        dob: faker.date.past(),
        contact: faker.phone.phoneNumber(),
        name: `${firstname2} ${lastname2}`,
        hospitalcity: faker.address.city(),
        hospital: faker.lorem.words(2),
        verified: bool2,
        status: bool1,
        report: faker.internet.url(),
      };
      let newMedicine = {
        name: faker.lorem.word(),
        supplierContact: faker.phone.phoneNumber(),
        city: faker.address.city(),
        state: faker.address.state(),
        verified: bool1,
        status: bool2,
        price: faker.finance.amount(),
        verificationTime: faker.date.recent(),
        verifiedBy: faker.datatype.string(),
        delivery: bool2,
      };
      let newOxygen = {
        supplierName: faker.name.firstName(),
        supplierContact: faker.phone.phoneNumber(),
        city: faker.address.city(),
        state: faker.address.state(),
        verified: bool2,
        status: bool1,
        price: faker.finance.amount(),
        verificationTime: faker.date.recent(),
        verifiedBy: faker.datatype.string(),
        delivery: bool2,
      };
      let newBed = {
        numOfBeds: faker.datatype.number(30),
        hosContact: faker.phone.phoneNumber(),
        hosName: faker.lorem.words(2),
        hoscity: faker.address.city(),
        state: faker.address.state(),
        verified: bool1,
        hosFees: faker.finance.amount(),
        verificationTime: faker.date.recent(),
        verifiedBy: faker.datatype.string(),
      };
      volunteers.push(newVolunteer);
      donors.push(newDonor);
      oxygen.push(newOxygen);
      beds.push(newBed);
      medicines.push(newMedicine);
      patients.push(newPatient);
    }
    await Volunteer.deleteMany({});
    await Patient.deleteMany({});
    await Donor.deleteMany({});
    await Oxygen.deleteMany({});
    await Medicine.deleteMany({});
    await VacantBeds.deleteMany({});
    await Volunteer.insertMany(volunteers);
    await Patient.insertMany(patients);
    await Donor.insertMany(donors);
    await Oxygen.insertMany(oxygen);
    await Medicine.insertMany(medicines);
    await VacantBeds.insertMany(beds);
    console.log("Populating DB: done");
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};
export const emptyDb = async () => {
  try {
    await Volunteer.deleteMany({});
    await Patient.deleteMany({});
    await Donor.deleteMany({});
    await Oxygen.deleteMany({});
    await Medicine.deleteMany({});
    await VacantBeds.deleteMany({});
  } catch (err) {
    console.log(err);
  }
};
