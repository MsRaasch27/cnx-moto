## Emoji Maker: Project Overview

This document outlines the requirements for building a web application where users can browse through a list of motorcycles available for rental, and then rent one.


## Feature Requirements

- **Profile List:**
    - Users should be able to filter the list of motorcycles by brand, model, or price or distance.
    - Each motorcycle profile should display the following details:
        - Brand
        - Model
        - Price
        - Distance
        - Image
    - Each motorcycle profile should have a "Rent" button.
    - Motorcycles not currently available for rent should be grayed out.
    - When a motorcycle is selected, it should be displayed in a "Details" view.
    - The "Details" view should display the following details:
        - Brand
        - Model
        - Price
        - Distance
        - Image
        - Description
        - Availability
        - Rent Button
    - The "Details" view should have a "Back" button to go back to the "Profile List" view.
    - The "Details" view should have a "Rent" button to rent the motorcycle.

  **User account creation:**
    - Upon creating an account, the user should be prompted to enter the following details:
        - First Name
        - Last Name
        - Email
        - Phone Number
        - Accept Terms and Conditions (link to terms and conditions page)
        - Password
        - Confirm Password
    - The user should be saved in the database and the app should redirect to where the user left off.
    - The user should be able to login to their account using their email and password.
    - The user should be able to logout of their account.
    - The user should be able to reset their password.
    - The user should be able to delete their account.
    - The user should be able to update their profile information.
    - The user should be able to view their booking history.
    - The user should be able to view their profile information.
    - The user should be able to view the terms and conditions.
    - A welcome message should be displayed to the user upon login.

- **Booking a Rental Motorcycle:**
    - Upon clicking the "Rent" button, the user should be redirected to create an account within the app if they don't already have one.
    - Once the user has created an account, they should be redirected back to the motorcycle details page.
    - Upon clicking the "Rent" button as an authenticated user, the user should be required to enter the following details:
        - Start Date
        - End Date
        - Name
        - Email
        - Phone Number
        - Accept Terms and Conditions (link to terms and conditions page)
    - The user should be required to enter all of the details above before the motorcycle can be rented.
    - Upon submitting the details, the user should be redirected to a "Booking Confirmation" page.
    - The "Booking Confirmation" page should display the following details:
        - Motorcycle Details
        - Rental Details
        - Total Price
        - Confirmation Number
    - The "Booking Confirmation" page should have a "Back" button to go back to the "Profile List" view.
    - Upon booking a motorcycle, the motorcycle should be grayed out in the "Profile List" view.
        
**Tracking the motorcycle rental:**
    - Upon booking a motorcycle, the motorcycle should be added to the user's booking history.
    - The user's homepage should be updated to display the motorcycle that they have currently rented, along with the start and end dates of the rental.
    - The user should be able to view the details of the motorcycle that they have currently rented.
    - The user should be able to return the motorcycle early.
    - The user should be able to extend the rental period.
    - The user should be able to cancel the rental.
    - The user should be able to view the terms and conditions.
    - When the rental is returned, the motorcycle should be removed from the user's homepage and the user should be redirected to the "Profile List" view.
    - When the end date of the rental is within 3 days, the user should be notified via email that the rental is about to end.
    - When the end date of the rental is within 3 days, the homepage section for the motorcycle should be updated to display an eye-catching message that the motorcycle is due to be returned soon.
    - When the end date of the rental is within 1 day, the user should be notified via email that the rental is about to end.
   
    

## Relevant Documentation



## Current File Structure

.
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── requirements
│   └── front-end-instructions.md
├── tailwind.config.ts
└── tsconfig.json

## Rules for File Organization

- All new components should be placed in the `/components` folder and named in a consistent format.
- All pages should be placed in the `app` folder.