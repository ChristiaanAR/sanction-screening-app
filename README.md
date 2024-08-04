# Sanction Screening App

This app was made with Angular and NestJS.
A simple angular form validates and sends data to the nodejs backend.
The backend contains the business logic to format the info and sends it to the OFAC api, as well as interpret the results before returning it to the frontend for display in a modal.

# Running the app
To run this sanction screening app locally, navigate to the sanction-screening-backend folder and run the following commands:
```bash
$ npm install

$ npm run start
```

Then in a separate terminal, navigate to the sanction-screening-frontend folder and run the same commands.
