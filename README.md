#  WarmPaws – Pet Care in Winter  

**Category:** Assignment-09_category_rose  

---

## 🌟 Project Overview  

**WarmPaws** is a cozy winter companion platform designed for pet owners to ensure their furry friends stay **warm, safe, and healthy** during the cold season.  

It’s a **Single Page Application (SPA)** built with React, Firebase, and modern UI libraries. Users can explore **local pet care services**, **winter outfits**, **grooming options**, and **expert tips**, while managing their profile and booking services easily.  

---

## 🎯 Purpose  

To create an engaging and responsive platform that helps pet owners connect with winter care services for their pets — offering a one-stop solution for warmth, grooming, and expert guidance.  

---

## 🧭 Key Features  

### 🏠 Home Page  
- Warm winter-themed **hero slider** using **Swiper.js**  
- **Popular Winter Care Services** section (data from local JSON file)  
- **Winter Care Tips for Pets** section  
- **Meet Our Expert Vets** section  
- Extra Section: **Winter Pet Accessories & Essentials**  
- Smooth animations using **AOS** and **Framer Motion**  

### 💼 Services Page  
- Displays dynamic data from a **JSON file**  
- Each card includes: Image, Name, Price, Rating, and “View Details” button  
- Fully responsive card layout  

### 🔒 Service Details Page (Protected Route)  
- Accessible only to logged-in users  
- Displays all JSON details for a selected service  
- Includes a **Book Service Form** (with success toast)  

### 👤 Authentication System  
- Firebase Authentication  
- **Login**, **Signup**, and **Google Sign-in** implemented  
- **Password validation** with:
  - At least one uppercase  
  - At least one lowercase  
  - Minimum 6 characters  
- Functional **Forgot Password** system (redirects to Gmail)  
- Password **show/hide toggle eye icon**  
- Redirect to desired route after login/signup  

### 🧍 My Profile Page  
- Shows user info: Name, Email, and Profile Image  
- Functional **Update Profile** feature using `updateProfile()`  
- Toast notifications on success  

### 📱 Responsiveness  
- Fully responsive across **mobile, tablet, and desktop**  

### ⚙️ SPA & Routing  
- Implemented with **React Router**  
- No page reload errors on route refresh  
- Persistent Navbar and Footer  

---

## 🔒 Environment Variables  

Firebase configuration keys are **secured using environment variables** (`.env.local`):  

```env
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_app_id
