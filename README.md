# React Core Concepts Practice

This project demonstrates the usage of React for building components, managing state and effects, creating forms, sliders, weather components, and routing.

---

## 1. Routing

**Goal:** Implement pages and navigation using `react-router-dom`.  

**Pages:**
- `/` – Home
- `/about` – About 
- `/books/*` – Books (nested routing for components)

**Next tasks/pages:**
- `/userlists` – React Lists
- `/signup` – SignUp Form
- `/slider` – Slider
- `/weather` – Current Weather
- `/weather-class` – WeatherClass (class-based weather component)
- `/profile` – User Profile Page (with Formik login form)

**Features:**
- Global header with navigation and footer with author info (using `Outlet` for standard page layout)
- Active menu item highlighting with `NavLink`
- 404 page for unknown routes with redirect to `/`

**Components:**
- `BasePage` – wrapper for Header + Outlet + Footer
- `Header` – navigation menu with active item highlighting
- `Footer` – author info
- `NotFound` – 404 page

**Technologies:** React, `react-router-dom`, CSS/SASS

---

## 2. React Lists

**Goal:** Display a list of users from an array using React, props, and state.

**Components:**
- `UserLists` – parent component with the user list
- `UserListItem` – single user component

**Features:**
- Display users with fields: `id`, `firstName`, `lastName`, `age`, `imgSrc`
- Select a user (highlighted via `isSelected`)
- Delete a user (trash button click)

**Technologies:** React (functional components, state, props), CSS Modules, `classNames`, `react-icons`

---

## 3. SignUp Form

**Goal:** Create a registration form with controlled components, validation, and styling.

**Component:** `SignUpForms`  

**Features:**
- Fields: `name`, `email`, `password`, agreement checkbox
- Controlled components (`value/onChange`, checkbox with `checked`)
- Field validation with highlight (`validInput` / `invalidInput`)
- Submit button disabled until the form is valid
- Form clears after submit

**Technologies:** React (functional components, state, props), CSS Modules, `classNames`, `react-icons`

---

## 4. Current Weather

**Goal:** Display current weather with selectable units.

**Component:** `Weather`

**Features:**
- Displays current temperature and wind speed
- Selectable units:
  - Temperature: °C / °F
  - Wind: m/s / km/h
- Fetches data from [open-meteo.com](https://open-meteo.com)

**Technologies:** React (`useState`, `useEffect`), CSS/SASS, `react-icons`

---

## 5. Slider

**Goal:** Implement an image slider component with navigation.

**Component:** `Slider`

**Features:**
- Displays one image from `imageUrls` array
- Buttons:
  - `<` – previous slide
  - `>` – next slide
  - Play/Stop 
- Optional: input to set slide delay
- Autoplay implemented via `setTimeout` based on `isPaused` and `delay`

**Technologies:** React (`useState`, `useEffect`), CSS/SASS

---

## 6. Class-Based Components

**Goal:** Convert a functional component with state and effects to a class-based component.

**Example:** `WeatherClass` – class-based weather component

**Features:**
- Lifecycle methods:
  - `componentDidMount` – load data on mount
  - `componentDidUpdate` – reload data when state (`tempUnit`, `windUnit`) changes
- State stored in `this.state`:
  - `weather` – weather data
  - `tempUnit` – temperature unit
  - `windUnit` – wind speed unit
- Event handlers:
  - `windUnitChange`
  - `tempUnitChange`

**Technologies:** React, class components, `react-icons`, CSS/SASS

---

## 7. Formik Login Form

**Goal:** Create authentication interfaces (login form) using Formik with validation and proper styling.

**Component:** `LoginForm`  

**Features:**
- Fields: `login`, `password`
- Validation with schema (`LOGIN_FORM`)  
- Display validation errors for each field
- Styling reacts to validation state (`valid` / `invalid`)
- Submit logs values and resets the form
- Error messages positioned absolutely to avoid layout jumps

**Technologies:** React, Formik, CSS Modules, `classNames`

---

## 🚀 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/KarinaMilko/React-Core-Concepts-Practice.git

2. Install dependencies:

```bash
npm i

3. Start the development server:

```bash
npm run dev
