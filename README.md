# NexLearn - Online Exam Platform

A modern, full-stack online examination platform built with Next.js 16, TypeScript, and Tailwind CSS. Features JWT authentication, Redux state management, and a responsive design.

## 🚀 Features

### Authentication System
- OTP-based login
- JWT token authentication with refresh mechanism
- Profile creation with image upload

### Exam Management
- Real-time timer with auto-submit on timeout
- Question navigation with grid view
- Mark questions for review
- Color-coded question status indicators
- Support for questions with images

### Modern UI/UX
- Fully responsive design
- Tailwind CSS styling
- Smooth animations and transitions
- Accessible components with ARIA labels

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sayyidmarvanvt/nexlearn.git
cd nexlearn
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Project Structure

```
nexlearn/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── otp/page.tsx
│   │   │   └── details/page.tsx
│   │   ├── exam/page.tsx
│   │   ├── instructions/page.tsx
│   │   └── result/page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       ├── Checkbox.tsx
│   │       ├── Dialog.tsx
│   │       ├── FloatingInput.tsx
│   │       ├── AuthWrapper.tsx
│   │       └── ThemeProvider.tsx
│   ├── lib/
│   │   ├── axiosClient.ts
│   │   └── utils.ts
│   ├── store/
│   │   ├── index.ts
│   │   ├── hooks.ts
│   │   ├── authSlice.ts
│   │   └── examSlice.ts
│   └── hooks/
│       └── useApiAuth.ts
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
- `POST /auth/send-otp` - Send OTP to mobile number
- `POST /auth/verify-otp` - Verify OTP and get tokens
- `POST /auth/create-profile` - Create user profile with image
- `POST /auth/logout` - Logout user and invalidate tokens

#### Exam
- `GET /question/list` - Get all exam questions (requires authentication)
- `POST /answers/submit` - Submit exam answers (requires authentication)

## 🏗️ Architecture

### State Management (Redux Toolkit)

**Auth Slice:**
- User information and profile data
- Authentication status
- Mobile number storage
- Token management

**Exam Slice:**
- Questions data and metadata
- User answers tracking
- Marked questions for review
- Timer state management
- Current question index

### Key Technologies

- **Next.js 16** - App Router with Server Components
- **TypeScript** - Full type safety and strict type checking
- **Tailwind CSS** - Utility-first styling framework
- **Redux Toolkit** - Predictable state management
- **Axios** - HTTP client with interceptors for auth
- **Lucide React** - Modern icon library

## 📱 Pages Overview

### 1. Login (`/`)
- Mobile number input with validation
- OTP request functionality
- Form validation and error handling

### 2. OTP Verification (`/otp`)
- 4-digit OTP input with auto-focus
- Auto-advance between input fields
- Paste support for convenience
- Resend OTP functionality

### 3. User Details (`/details`)
- Profile image upload with preview
- Name, email, and qualification fields
- Form validation
- Profile creation

### 4. Instructions (`/instructions`)
- Exam overview and duration
- Rules and guidelines
- Question statistics
- Start exam button

### 5. Exam (`/exam`)
- Question display with image support
- Multiple choice options (A, B, C, D)
- Question grid navigation
- Mark for review functionality
- Real-time countdown timer
- Auto-submit on timeout
- Submit exam button

### 6. Result (`/result`)
- Overall score summary
- Correct/Wrong/Skipped breakdown
- Performance metrics
- Accuracy percentage
- Visual progress indicators

## 🎨 Design Features

- **Responsive Design** - Mobile-first approach with breakpoints
- **Gradient Backgrounds** - Modern aesthetic with purple/blue themes
- **Smooth Animations** - Enhanced UX with transitions
- **Color-Coded States** - Visual feedback for question status
- **Accessibility** - Semantic HTML and ARIA labels

## 🔒 Security Features

- JWT token authentication
- Automatic token refresh mechanism
- Axios interceptors for authentication
- CORS handling via Next.js rewrites
- Client-side input validation
- Protected routes with authentication checks

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment

**Vercel (Recommended):**
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

**Live Demo:** [https://nexlearn-test.vercel.app](https://nexlearn-test.vercel.app)

## 🧪 Testing

Use any valid 10-digit mobile number for testing. The OTP will be sent to the provided number via the API.

## 📝 Code Quality Standards

- **TypeScript** - Full type safety throughout the application
- **ESLint** - Code linting for consistency
- **Strict Mode** - Enhanced error checking
- **Component Reusability** - DRY (Don't Repeat Yourself) principle
- **Clean Code** - Clear naming conventions and comments

## 🚨 Troubleshooting

### CORS Errors
- Ensure the dev server runs on `localhost:3000`
- Verify `next.config.ts` rewrites configuration

### Authentication Issues
- Clear browser localStorage
- Re-login to obtain fresh tokens
- Check network tab for API responses

### Build Errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check for TypeScript errors with `npm run build`

## 📈 Performance Optimizations

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- Route prefetching for faster navigation
- Redux middleware optimization
- Tailwind CSS purging for minimal bundle size
- Lazy loading of components

## 👨‍💻 Development Timeline

**Total Development Time: 20-25 hours**

- **Day 1 (UI Development):** 10-12 hours
  - Project setup and configuration
  - Component library creation
  - Page layouts and routing
  
- **Day 2 (Integration & Logic):** 8-9 hours
  - API integration with Axios
  - Redux state management setup
  - Authentication flow implementation
  - Exam workflow logic
  
- **Remaining Time (Polish & Fixes):** 5-6 hours
  - Bug fixes and testing
  - UI/UX refinements
  - Code refactoring
  - Documentation

## 📄 License

Proprietary - Created for Noviindus Technologies evaluation

## 👤 Author

**Sayyid Marvan VT**

- GitHub: [@sayyidmarvanvt](https://github.com/sayyidmarvanvt)
- Project Repository: [nexlearn](https://github.com/sayyidmarvanvt/nexlearn)

## 🙏 Acknowledgments

Developed as part of the Next.js Level 2 Machine Test for Noviindus Technologies LLP.

---