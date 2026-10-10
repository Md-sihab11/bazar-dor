# 🛒 Bazar Dor: Essential Commodities Price Monitoring Platform

**Bazar Dor** is a modern web application designed to make daily market prices of essential commodities in Bangladesh easily accessible to the public. It provides daily price updates, price fluctuations, market-based comparisons, and category-wise information to help users understand and compare market prices.

---

## 🌟 Key Features

1. **🔴 Real-Time Price Ticker / Marquee**
   - An animated, infinitely scrolling marquee that displays daily price fluctuations of top commodities, making price increases (▲) and decreases (▼) easy to track.

2. **📅 Automatic Bengali Calendar and Date**
   - Displays the current Bengali date, including the Bengali day, month, and year, with a modern, real-time interface.

3. **📊 Detailed Product Analysis (Product Details Page)**
   - Provides price comparisons with the previous day, minimum, maximum, and average prices, along with comparative price lists from major local markets.

4. **🔒 Secure Routes and Advanced Authentication**
   - A secure authentication system powered by Better Auth, supporting email/password and social login through Google and GitHub. Access to detailed product pages is controlled through protected routes.

5. **👤 User Profile and Account Management**
   - Allows users to view their account information, update their profile name, and sign out instantly.

6. **🏷️ Category Filtering and Dynamic Sorting**
   - Supports filtering by categories such as vegetables, fish and meat, rice and lentils, as well as sorting products by price in ascending or descending order.

7. **📱 Responsive and Accessible Design**
   - Features a user-friendly, responsive grid layout optimized for mobile phones, tablets, and desktop devices.

---

## 🛠️ Technologies Used

- **Frontend Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Programming Language:** TypeScript
- **Styling:** Tailwind CSS and DaisyUI
- **Authentication:** [Better Auth](https://better-auth.com/) (Email/Password and OAuth)
- **Database:** MongoDB Atlas
- **Notifications:** React Toastify
- **Icons and Fonts:** React Icons and Google Fonts (Anek Bangla)

---

## 🚀 Getting Started

### 1. Clone the Repository and Install Dependencies

```bash
git clone https://github.com/Md-sihab11/bazar-dor.git
cd bazar-dor
npm install
```

### 2. Configure Environment Variables (`.env`)

Create a `.env` file in the project root directory and add the following variables:

```env
MONGO_DB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_BASE_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Replace the placeholder values with your actual MongoDB connection string, authentication secret, and OAuth credentials.

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 📂 Folder Structure

```text
src/
├── app/
│   ├── (auth)/         # Login and signup pages
│   ├── api/            # Better Auth API handlers
│   ├── categories/     # Category pages and loading skeletons
│   ├── detailpage/     # Protected product detail pages
│   ├── profile/        # User profile page
│   ├── loading.tsx     # Global loading spinner
│   ├── not-found.tsx   # Custom 404 page
│   └── page.tsx        # Home page (hero section + products)
├── components/         # Reusable UI components (Header, Footer, Marquee, etc.)
├── lib/                # Authentication and database configuration
└── types/              # TypeScript type definitions
```

---

**Bazar Dor** aims to make essential commodity prices more transparent and accessible, helping people in Bangladesh monitor daily market trends and make informed purchasing decisions.