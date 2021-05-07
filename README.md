# CovHelp-Server

Steps to run this project:

1. Run `npm i` command
2. Run `npm run dev` command to run in development
3. Test env file is already included in this project.

## Database Models

- Volunteer
  - Name
  - Email
  - DOB
  - Contact
  - City
  - State
- Donor

  - Email
  - Name
  - DOB
  - Contact
  - Days after recovery
  - Blood Group
  - City of availability
  - Date of availability

- Patient

  - Covid report (url)
  - Name
  - DOB
  - Contact
  - Email
  - Hospital name
  - Verified (bool)
  - Verified by
  - Hospital city

- Vacant Beds

  - Hospital name
  - Number of beds
  - Verified(bool)
  - Verification Timestamp
  - City
  - State
  - Hospital contact
  - Fees
  - Verified by

- Oxygen Availability

  - Supplier contact
  - City
  - State
  - Verified (bool)
  - Price per cylinder
  - Verification Timestamp
  - Verified by
  - Dilevery (bool)

- Medicine Availability
  - Name of medicine
  - Supplier contact
  - Price per unit
  - Verified (bool)
  - Verification timestamp
  - Verified by
  - City
  - State
  - Dilevery (bool)
