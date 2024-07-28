# Dog App UI

Dog App UI is a frontend application developed to display information about dog breeds. This application is built using Angular and provides users with detailed information about various dog breeds. Additionally, it includes a login screen for users to access the analytics report page.

## Requirements
- Node.js (v14 or higher)
- Angular CLI (v12 or higher)

## Installation

### 1. Clone the Repository
First, clone the project from GitHub:

```sh
git clone https://github.com/mhmtcrkglu/dog-app.git
cd dog-app
```

### 2. Install Dependencies
Install the project dependencies with:

```sh
npm install
```

### 3. Run the Application
Start the Angular development server with:

```sh
npm start
```

Open your browser and navigate to `http://localhost:4200`.

## Components and Services

### 1. Breed List
URL: `/breeds/list`

- Component: `BreedListComponent`
- Description: Displays a paginated list of dog breeds.

### 2. Breed Details
URL: `/breeds/detail/:id`

- Component: `BreedDetailComponent`
- Description: Displays details of a selected dog breed.

### 3. Analytics Report
URL: `/analytics`

- Component: `AnalyticsComponent`
- Description: Displays analytics reports about dog breed requests.
- Note: When a user navigates to the analytics report page, they will first encounter a login screen within the component. If the login is successful, they can view the report; otherwise, they cannot.

### 4. Login Screen
- Component: Included within `AnalyticsComponent`.
- Description: Allows the user to log in. Upon successful login, the user can view the analytics reports.

## Project Structure
Project folder structure:

```
dog-app/
└── src/
    └── app/
        ├── analytics/
        │   ├── analytics.component.css
        │   ├── analytics.component.html
        │   ├── analytics.component.spec.ts
        │   └── analytics.component.ts
        ├── breed-detail/
        │   ├── breed-detail.component.css
        │   ├── breed-detail.component.html
        │   ├── breed-detail.component.spec.ts
        │   └── breed-detail.component.ts
        ├── breed-list/
        │   ├── breed-list.component.css
        │   ├── breed-list.component.html
        │   ├── breed-list.component.spec.ts
        │   └── breed-list.component.ts
        ├── app-routing.module.ts
        ├── app.component.css
        ├── app.component.html
        ├── app.component.ts
        ├── app.module.ts
        ├── breed-analytics.model.ts
        ├── breed.model.ts
        └── breed.service.ts
```
