# NexLearn - Online Exam Platform

A modern, full-stack online examination platform built with Next.js 16, TypeScript, and Tailwind CSS. Features JWT authentication, Redux state management, and a responsive design.

## 🚀 Features

- **Authentication System**
  - OTP-based login
  - JWT token authentication with refresh mechanism
  - Profile creation with image upload
  
- **Exam Management**
  - Real-time timer
  - Question navigation
  - Mark questions for review
  - Color-coded question status
  - Auto-submit on timeout
  
- **Modern UI/UX**
  - Fully responsive design
  - Tailwind CSS styling
  - Smooth animations
  - Accessible components

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Installation & Setup

### 1. Clone or Create Project

```bash
# Create new Next.js project
npx create-next-app@latest nexlearn --typescript --tailwind --app --src-dir

# Navigate to project directory
cd nexlearn
```

### 2. Install Dependencies

```bash
npm install @reduxjs/toolkit react-redux axios lucide-react
```

### 3. Project Structure

Create the following folder structure:

```
nexlearn/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── providers.tsx
│   │   ├── globals.css
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   ├── login/page.tsx
│   │   │   ├── otp/page.tsx
│   │   │   └── details/page.tsx
│   │   ├── instructions/page.tsx
│   │   ├── exam/page.tsx
│   │   └── result/page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       ├── OTPInput.tsx
│   │       └── ImageUpload.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   ├── store/
│   │   ├── index.ts
│   │   ├── hooks.ts
│   │   ├── authSlice.ts
│   │   └── examSlice.ts
│   └── types/
│       ├── auth.ts
│       └── exam.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 4. Environment Setup

The app uses API proxy to handle CORS. No `.env` file needed - API routes are configured in `next.config.ts`.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 API Integration

### Base URL
```
https://nexlearn.noviindusdemosites.in/
```

### Available Endpoints

#### Authentication
- `POST /auth/send-otp` - Send OTP to mobile
- `POST /auth/verify-otp` - Verify OTP
- `POST /auth/create-profile` - Create user profile
- `POST /auth/logout` - Logout user

#### Exam
- `GET /question/list` - Get all questions (requires auth)
- `POST /answers/submit` - Submit exam answers (requires auth)

## 🏗️ Architecture

### State Management (Redux)

**Auth Slice:**
- User information
- Authentication status
- Mobile number storage

**Exam Slice:**
- Questions data
- User answers
- Marked questions
- Timer state
- Current question index

### Key Technologies

- **Next.js 16** - App Router with Server Components
- **TypeScript** - Strict type checking
- **Tailwind CSS** - Utility-first styling
- **Redux Toolkit** - State management
- **Axios** - HTTP client with interceptors
- **Lucide React** - Icon library

## 📱 Pages Overview

### 1. Login (`/login`)
- Mobile number input
- OTP request
- Form validation

### 2. OTP Verification (`/otp`)
- 4-digit OTP input
- Auto-focus and paste support
- Resend OTP functionality

### 3. User Details (`/details`)
- Profile image upload
- Name, email, qualification
- Form validation

### 4. Instructions (`/instructions`)
- Exam overview
- Rules and guidelines
- Question statistics

### 5. Exam (`/exam`)
- Question display with image support
- Multiple choice options
- Question grid navigation
- Mark for review
- Real-time timer
- Auto-submit on timeout

### 6. Result (`/result`)
- Score summary
- Correct/Wrong/Skipped breakdown
- Performance metrics
- Accuracy percentage

## 🎨 Design Features

- **Responsive Design** - Mobile-first approach
- **Gradient Backgrounds** - Modern aesthetic
- **Smooth Animations** - Enhanced UX
- **Color-Coded States** - Easy visual feedback
- **Accessibility** - Semantic HTML and ARIA labels

## 🔒 Security

- JWT token authentication
- Token refresh mechanism
- Axios interceptors for auth
- CORS handling via Next.js rewrites
- Input validation
- Protected routes

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment Options

- **Vercel** (Recommended)

## 🧪 Testing Credentials

Use any 10-digit mobile number for testing. OTP will be sent to the provided number.

## 📝 Code Quality

- **TypeScript** - Full type safety
- **ESLint** - Code linting
- **Strict Mode** - Enhanced error checking
- **Component Reusability** - DRY principle
- **Clean Code** - Clear naming conventions

## 🚨 Common Issues & Solutions

### CORS Errors
- Ensure dev server runs on `localhost:3000`
- Check `next.config.ts` rewrites

### Token Issues
- Clear localStorage
- Re-login to get fresh tokens

### Build Errors
- Delete `.next` folder
- Run `npm install` again
- Check TypeScript errors

## 📈 Performance Optimizations

- Next.js automatic code splitting
- Image optimization
- Route prefetching
- Redux middleware optimization
- Tailwind CSS purging

## 🤝 Contributing

This is a test project. No contributions accepted.

## 📄 License

Proprietary - For Noviindus evaluation only

## 👨‍💻 Development Time

Total estimated development time: **12-15 hours**
- Setup & Configuration: 2 hours
- Authentication Flow: 3 hours
- Exam System: 4 hours
- UI/UX Polish: 3 hours
- Testing & Debugging: 2 hours

## 📞 Support

For issues or questions, contact the development team.

---

**Built with ❤️ using Next.js 16, TypeScript, and Tailwind CSS**