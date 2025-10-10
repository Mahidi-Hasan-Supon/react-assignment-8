# 🎧 HERO.IO – App Discovery & Installation System

**HERO.IO** হলো একটি React ভিত্তিক ওয়েব অ্যাপ্লিকেশন, যেখানে ব্যবহারকারীরা বিভিন্ন অ্যাপ দেখতে, সার্চ করতে, ইনস্টল করতে এবং ম্যানেজ করতে পারে।  
এটি একটি আধুনিক, সুন্দর এবং ইন্টারেকটিভ UI সহ SPA (Single Page Application)।

---

## 🚀 Technologies Used

- **React.js** – Frontend UI development  
- **React Router DOM** – Routing & navigation  
- **Tailwind CSS + DaisyUI** – Styling and responsive layout  
- **Axios Hook (`useApp`)** – Data fetching from JSON  
- **LocalStorage** – Installed apps management  
- **Recharts** – Data visualization (Ratings chart)  
- **React Icons** – Icons for UI  
- **React Toastify** – Success/error notifications  
- **React Spinners** – Loading animation  

---

## 📁 Project Structure




---

## 🧩 Components & Pages Overview

### 1. `Root.jsx`
- Main layout of the project.
- Contains:
  - **Navbar**
  - **Outlet (Dynamic page rendering)**
  - **Footer**

---

### 2. `Navbar.jsx`
- Logo (`logo.png`) used.
- Contains navigation links:
  - Home  
  - Apps  
  - Installation  
- **GitHub Button** added (links to your GitHub profile).
- Fully responsive with mobile dropdown menu.

---

### 3. `Home.jsx`
- Fetches app data using `useApp()` custom hook.
- Shows **loading spinner** while fetching data.
- Displays:
  - **Banner section**
  - **Trending Apps (First 8 apps)**
  - “Show All” button → navigates to `/apps`
- Uses `EightApp` component to show each app card.

---

### 4. `EightApp.jsx`
- Displays each app’s:
  - Image
  - Title
  - Downloads count
  - Average Rating  
- Uses icons:
  - `FaArrowDown`
  - `FaStar`

---

### 5. `Apps.jsx`
- Shows all apps with a **search bar**.
- Implements **real-time search filtering** (with debounce).
- Displays total apps found.
- If no app found → shows “No App Found”.
- Each app links to its **details page** (`/appdetails/:id`).
- Uses **LoadingSpinner** during searching or fetching.

---

### 6. `AppDetails.jsx`
- Displays full information of a selected app.
- Uses `useParams()` to read app `id`.
- Shows:
  - App image
  - Title
  - Downloads, Ratings, Reviews (with icons)
  - Install button with file size
  - Description
- **Install functionality:**
  - Saves app to `localStorage` as “installed”.
  - Shows Toast notification on install.
  - Updates button to “Installed”.
- **Chart Visualization (Recharts):**
  - Displays rating distribution via `ComposedChart` (Bar + Line).

---

### 7. `Installation.jsx`
- Displays all installed apps from `localStorage`.
- Features:
  - **Sort by downloads (High → Low / Low → High)**
  - **Uninstall button** → removes from `localStorage`
  - Toast notification on uninstall.
- Shows each installed app with:
  - Image
  - Title
  - Downloads
  - Rating
  - Size
- Uses `FaStar`, `RxDownload` icons.

---

### 8. `LoadingSpinner.jsx`
- Displays animated loading spinner using `ClockLoader` from `react-spinners`.
- Text: “Loading...”

---

### 9. `Error.jsx`
- Shows fallback error message for invalid routes.
- Uses in router `errorElement`.

---

### 10. `useApp.js`
- Custom hook that:
  - Fetches app data from `App.json` using `axios`
  - Manages loading and error states

---

## 🧭 Routing Overview

Defined using `createBrowserRouter`:

| Route Path | Component | Description |
|-------------|------------|-------------|
| `/` or `/home` | `Home` | Main homepage |
| `/apps` | `Apps` | All app list + search |
| `/installation` | `Installation` | Installed apps list |
| `/appdetails/:id` | `AppDetails` | App details page |
| `*` | `Error` | Error handling |

---

## 🌟 Features Summary

✅ Dynamic routing with React Router  
✅ Search functionality with real-time filtering  
✅ LocalStorage-based install/uninstall system  
✅ Sorting installed apps by downloads  
✅ Recharts-based rating visualization  
✅ Responsive Navbar & layout  
✅ Toast notifications on install/uninstall  
✅ Custom loading spinner  
✅ Modular and reusable component structure  

---

## 🖼️ Images Used

| Location | Image Name | Usage |
|-----------|-------------|-------|
| Navbar | `logo.png` | Brand logo |
| Home / AppDetails | App screenshots (from JSON) | App display |
| AppDetails | `like.png`, `App.png` | Like & fallback image |
| Installation | Installed app images | List display |

---

## ⚙️ LocalStorage Keys

| Key | Description |
|-----|-------------|
| `installed` | Stores user-installed apps data |

---

## 💬 Toast Notifications

- `toast("Installed the app!!")` → When app installed  
- `toast("UnInstalled The App!!")` → When app uninstalled  

---

## 🔄 Loading States

- While fetching app data → shows `LoadingSpinner`  
- While searching → spinner appears until debounce timeout  

---

## 📊 Data Visualization (Recharts)
- Library: `recharts`
- Components used:
  - `ComposedChart`
  - `CartesianGrid`
  - `Bar`
  - `Line`
  - `Tooltip`
  - `Legend`
- Displays rating counts visually.

---

## 🧠 Summary

HERO.IO is a fully functional, data-driven React project featuring:
- Dynamic data rendering  
- Interactive charts  
- State management with hooks  
- Persistent storage  
- Responsive and modern design  

---

## 🧑‍💻 Author

**Mahidi Hasan Supon**  
🌐 [GitHub Profile](https://github.com/Mahidi-Hasan-Supon)  
📅 Created: October 2025  

---
