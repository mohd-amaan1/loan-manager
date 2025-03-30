
# 🛠️ **Loan Management System**


## 🚀 **Overview**
This is a **Loan Management System** built using:
- **Next.js** (App Router) with TypeScript
- **NextAuth.js** for authentication
- **Prisma ORM** for database management
- **PostgreSQL** as the database
- **Tailwind CSS** for styling

### ✅ **Key Features**
- 🔑 **Role-Based Authentication:** 
  - `User`: Apply for loans
  - `Verifier`: Approve/Reject loan applications
  - `Admin`: Manage all loans and view loan history
- 🛡️ **Authentication**
  - Sign In, Sign Up, and Sign Out with protected routes
- 📄 **Loan Management**
  - Apply, view, approve, reject, and filter loan applications
- 📊 **Pagination and Filtering**
  - Efficient pagination for loans
- 🔥 **Responsive UI**
  - User-friendly interface with Tailwind CSS

---

## ⚙️ **Tech Stack**

| **Technology**       | **Description**                     |
|-----------------------|-----------------------------------|
| **Next.js**           | Full-stack React framework         |
| **NextAuth.js**       | Authentication with credentials    |
| **Prisma ORM**        | Database management with PostgreSQL |
| **PostgreSQL**        | Relational database                |
| **TypeScript**        | Static typing                      |
| **Tailwind CSS**      | Modern CSS framework               |

---

## 🛠️ **Installation and Setup**

### 📥 **Clone the Repository**
```bash
git clone https://github.com/your-username/loan-management-system.git
cd loan-management-system
```

### 📦 **Install Dependencies**
```bash
npm install
```

### ⚙️ **Environment Variables**
Create a `.env` file in the root directory and add the following:
```plaintext
DATABASE_URL=postgresql://username:password@localhost:5432/loan_manager
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### 🔨 **Run Prisma Migrations**
```bash
npx prisma migrate dev --name init
```

### 🚀 **Start the Development Server**
```bash
npm run dev
```
> The app will run on `http://localhost:3000`

---

## 🔐 **Authentication and Authorization**
- ✅ **Authentication:** `NextAuth.js` with Prisma adapter
- 🔥 **Role-Based Access Control**
  - Users are assigned `USER`, `VERIFIER`, or `ADMIN` roles upon signup
  - Protected routes:
    - `/user` → Accessible only by Users
    - `/verifier` → Accessible only by Verifiers
    - `/admin` → Accessible only by Admins
- 🛑 Unauthorized access redirects to the `/signin` page

---

## 📊 **Database Schema**
The app uses **PostgreSQL** with Prisma ORM.

### 📄 **Schema**
```prisma
model User {
  id        Int    @id @default(autoincrement())
  name      String
  email     String @unique
  password  String
  role      Role   @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Loan {
  id          Int    @id @default(autoincrement())
  customer    String
  amount      Float
  status      LoanStatus @default(PENDING)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum Role {
  USER
  VERIFIER
  ADMIN
}

enum LoanStatus {
  PENDING
  APPROVED
  REJECTED
}
```

---

## 🚀 **API Endpoints**

### 🔑 **Authentication**
- `/api/auth/signin`: Sign In
- `/api/auth/signup`: Sign Up
- `/api/auth/signout`: Sign Out

### 📄 **Loan Management**
- `/api/loans`: Get all loans
- `/api/loans/:id`: Get loan by ID
- `/api/loans/create`: Create a new loan
- `/api/loans/update`: Update loan status (approve/reject)

---

## 🛠️ **Folder Structure**
```
/app
 ├── /api                → API routes for authentication and loan management
 ├── /components         → Reusable React components
 ├── /lib                → Prisma client configuration
 ├── /pages              → Next.js pages
 ├── /public             → Public assets (images, icons)
 ├── /styles             → Tailwind CSS styles
 ├── /prisma             → Prisma schema
 ├── .env                → Environment variables
 ├── next.config.js      → Next.js configuration
 ├── tsconfig.json       → TypeScript configuration
 └── README.md           → Documentation
```

---

## 🚀 **Features in Action**

### 🔥 **User**
- Apply for loans
- View application status

### 🔥 **Verifier**
- View pending loans
- Approve or reject loans

### 🔥 **Admin**
- Manage all loan applications
- View approved/rejected loans
- Pagination and filtering

---

## 🔥 **Future Enhancements**
- 📊 **Advanced filtering and sorting**
- 🔥 **Email notifications for loan status**
- 📈 **Detailed analytics dashboard**

---

## 🤝 **Contributing**
Contributions are welcome! Follow the steps below:
1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature-name
```
3. Commit your changes:
```bash
git commit -m "Add new feature"
```
4. Push the changes:
```bash
git push origin feature-name
```
5. Open a Pull Request

---

## ⚙️ **License**
This project is licensed under the **MIT License**.

---

## 🙌 **Author**
👤 **Mohd Amaan**

✅ If you like this project, give it a ⭐ on GitHub!  
📫 Feel free to reach out with any questions or suggestions.

---

🚀 **Happy Coding!** 🚀
