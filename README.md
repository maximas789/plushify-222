# Plushify - Turn Your Photos into Adorable Plushies

A cute and playful SaaS application that allows users to upload images of themselves, friends, family, or pets and convert them into adorable plushie designs using AI.

## 🎨 Features

- **🖼️ Image Upload & Generation**: Drag & drop or file picker upload with style and size customization
- **🎭 Multiple Styles**: Choose from Kawaii, Cartoon, Realistic, or Vintage plushie styles
- **📐 Size Options**: Small, Medium, or Large plushie sizes
- **🖼️ Before/After Preview**: Interactive slider to compare original and generated images
- **🖼️ Gallery Management**: View, filter, sort, and manage your generated plushies
- **❤️ Favorites System**: Mark plushies as favorites for easy access
- **💾 Persistent Storage**: Gallery data saved in localStorage
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🌙 Dark Mode**: Full support for light and dark themes
- **🎯 Credit-Based Pricing**: Three pricing tiers (Basic, Pro, Elite) with credit packages
- **📚 Documentation**: User guides and FAQs for easy onboarding
- **⚖️ Legal Pages**: Privacy Policy, Terms of Service, and Cookie Policy

## 🚀 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI Components**: shadcn/ui with Tailwind CSS
- **Styling**: Tailwind CSS with custom color tokens
- **Icons**: Lucide React
- **Storage**: localStorage for gallery persistence
- **Authentication**: Mock authentication (no real auth in UI phase)

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 18.0 or higher ([Download here](https://nodejs.org/))
- **Git**: For cloning the repository ([Download here](https://git-scm.com/))
- **Package Manager**: pnpm, npm, or yarn

## 🛠️ Quick Setup

### 1. Clone or Download the Repository

**Option A: Clone with Git**

```bash
git clone <your-repo-url>
cd plushify-222
```

**Option B: Download ZIP**
Download the repository as a ZIP file and extract it to your desired location.

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Setup

Copy the example environment file:

```bash
cp env.example .env
```

Fill in your environment variables in the `.env` file:

```env
# Database (optional for UI-only implementation)
POSTGRES_URL="postgresql://username:password@localhost:5432/plushify"

# Authentication (optional for UI-only implementation)
BETTER_AUTH_SECRET="your-random-32-character-secret-key-here"

# Google OAuth (optional for UI-only implementation)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes (for future backend)
│   ├── dashboard/                # Plushie generation interface
│   ├── gallery/                  # User's plushie gallery
│   ├── pricing/                  # Pricing page
│   ├── docs/                     # User guide
│   ├── faq/                      # FAQ page
│   ├── privacy/                  # Privacy policy
│   ├── terms/                    # Terms of service
│   ├── cookies/                  # Cookie policy
│   ├── profile/                  # User profile (mock data)
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles and color tokens
├── components/
│   ├── auth/                     # Authentication components
│   ├── docs/                     # Documentation components
│   ├── gallery/                  # Gallery components
│   ├── landing/                  # Landing page components
│   ├── plushie/                  # Plushie generation components
│   ├── shared/                   # Shared utility components
│   └── ui/                       # shadcn/ui components
├── hooks/
│   ├── use-image-upload.ts       # Image upload hook
│   └── use-plushie-gallery.ts   # Gallery management hook
└── lib/
    ├── mock-data/                # Mock data files
    │   ├── user.ts              # Mock user data
    │   ├── plushies.ts          # Mock plushies data
    │   ├── gallery-samples.ts   # Gallery sample images
    │   └── testimonials.ts      # Mock testimonials
    └── mock-generation.ts       # Mock generation utility
```

## 🎨 Design System

### Color Tokens

The application uses a cute and playful color scheme defined in `src/app/globals.css`:

- **Primary Pink**: `oklch(0.65 0.20 320)` - Soft pink for primary actions
- **Secondary Purple**: `oklch(0.85 0.10 280)` - Light purple for secondary elements
- **Accent Yellow**: `oklch(0.90 0.12 90)` - Soft yellow for accents
- **Border Radius**: `1rem` - Rounded corners for softer feel

### Animations

Custom animations for a playful user experience:

- **bounce-gentle**: Subtle bouncing effect
- **float**: Floating animation for decorative elements
- **shimmer**: Shimmer effect for loading states

## 📖 Pages Overview

### Landing Page (`/`)
- Hero section with gradient headline and CTA buttons
- Feature showcase with 4+ key features
- Demo carousel rotating through example plushie generations
- User testimonials section
- Pricing section with 3 tiers
- Fully responsive with dark mode support

### Dashboard (`/dashboard`)
- Drag & drop image upload zone
- File picker as fallback upload method
- Style selector (Kawaii, Cartoon, Realistic, Vintage)
- Size selector (Small, Medium, Large)
- Animated progress indicator during generation
- Before/after preview with interactive slider
- Download, share, and save to gallery options

### Gallery (`/gallery`)
- Responsive grid layout (1/2/3/4 columns)
- Filter controls (All, Favorites, By Style)
- Sort controls (Newest, Oldest)
- Before/after comparison cards
- Quick actions (download, share, delete, favorite)
- Empty state when no plushies exist
- Data persists in localStorage

### Pricing (`/pricing`)
- Three pricing tiers:
  - **Basic**: 30 credits for $9
  - **Pro**: 100 credits for $19 (Most Popular)
  - **Elite**: 200 credits for $29
- Feature comparison table
- FAQ section specific to pricing
- CTA buttons (UI-only, no payment processing)

### Documentation (`/docs`)
- User guide with step-by-step instructions
- Getting Started section
- Uploading Images guide
- Generation Options explanation
- Gallery Management tips

### FAQ (`/faq`)
- Expandable accordion with 8-10 FAQ items
- Topics: How to upload, generation process, credits, file formats
- Organized by category

### Legal Pages
- **Privacy Policy** (`/privacy`): Data handling and privacy practices
- **Terms of Service** (`/terms`): Terms and conditions
- **Cookie Policy** (`/cookies`): Cookie usage explanation

### Profile (`/profile`)
- Mock user profile display
- User information (name, email, avatar)
- Mock credit balance (50 credits)
- Recent activity section

## 🔧 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## 🎭 Mock Data Approach

This implementation uses mock data to simulate a complete user experience without backend integration:

### Mock User
- Name: Sarah Johnson
- Email: sarah@example.com
- Avatar: Default avatar image
- Credits: 50 (for UI display)
- Location: `src/lib/mock-data/user.ts`

### Mock Plushies
- 6+ sample before/after image pairs
- Variety of subjects (people, pets, objects)
- Different styles represented (Kawaii, Cartoon, Realistic, Vintage)
- Location: `src/lib/mock-data/plushies.ts`

### Mock Testimonials
- 5+ user testimonials
- Include name, avatar, and review text
- Location: `src/lib/mock-data/testimonials.ts`

### Mock Generation
- Simulates AI generation with 3-5 second delay
- Returns random plushie from gallery samples
- Location: `src/lib/mock-generation.ts`

## 💾 localStorage Schema

Gallery data is persisted in localStorage under the key `plushify_gallery`:

```typescript
interface Plushie {
  id: string;
  userId: string;
  originalImage: string;
  generatedImage: string;
  style: 'Kawaii' | 'Cartoon' | 'Realistic' | 'Vintage';
  size: 'Small' | 'Medium' | 'Large';
  createdAt: string;
  isFavorite: boolean;
}
```

The gallery data is automatically:
- Saved when a new plushie is generated
- Updated when plushies are deleted or favorited
- Loaded on page mount to restore user's gallery
- Persisted across browser sessions

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install the Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. Deploy your application:

   ```bash
   vercel --prod
   ```

3. Follow the prompts to configure your deployment
4. Add your environment variables when prompted or via the Vercel dashboard

### Production Environment Variables

Ensure these are set in your production environment:

- `NEXT_PUBLIC_APP_URL` - Your production domain
- `POSTGRES_URL` - Production PostgreSQL connection string (for future backend)
- `BETTER_AUTH_SECRET` - Secure random 32+ character string (for future auth)
- `GOOGLE_CLIENT_ID` - Google OAuth Client ID (for future auth)
- `GOOGLE_CLIENT_SECRET` - Google OAuth Client Secret (for future auth)

## 🔄 Backend Integration Guide

This UI implementation is ready for backend integration. Here's what needs to be connected:

### Required API Endpoints

1. **User Authentication**
   - `POST /api/auth/sign-in` - Sign in user
   - `POST /api/auth/sign-up` - Sign up new user
   - `GET /api/auth/session` - Get current session
   - `POST /api/auth/sign-out` - Sign out user

2. **Plushie Generation**
   - `POST /api/plushies/generate` - Generate plushie from image
   - Request: `{ image: File, style: string, size: string }`
   - Response: `{ id, originalImage, generatedImage, style, size, createdAt }`

3. **Gallery Management**
   - `GET /api/plushies` - Get user's plushies
   - `DELETE /api/plushies/:id` - Delete a plushie
   - `PATCH /api/plushies/:id/favorite` - Toggle favorite status

4. **Credit System**
   - `GET /api/credits` - Get user's credit balance
   - `POST /api/credits/purchase` - Purchase credits
   - `POST /api/credits/deduct` - Deduct credit for generation

### Components Requiring API Integration

1. **Dashboard** (`src/app/dashboard/page.tsx`)
   - Replace `mockGeneratePlushie` with API call
   - Update credit balance after generation
   - Handle API errors gracefully

2. **Gallery** (`src/app/gallery/page.tsx`)
   - Replace `use-plushie-gallery` hook with API calls
   - Remove localStorage persistence
   - Add loading states for API requests

3. **Profile** (`src/app/profile/page.tsx`)
   - Replace mock user data with real user data
   - Fetch credit balance from API
   - Update recent activity from backend

4. **Site Header** (`src/components/site-header.tsx`)
   - Replace mock user with real session
   - Add real authentication flow
   - Update user profile dropdown

### Credit System Requirements

1. **Credit Deduction**
   - Deduct 1 credit per plushie generation
   - Check balance before generation
   - Show error if insufficient credits

2. **Credit Purchase**
   - Integrate with payment processor (Stripe, etc.)
   - Update balance after successful payment
   - Send confirmation email

3. **Credit Display**
   - Show current balance in header
   - Update balance in real-time
   - Display in profile page

### Database Schema (Future)

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  credits INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Plushies table
CREATE TABLE plushies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  original_image_url TEXT NOT NULL,
  generated_image_url TEXT NOT NULL,
  style VARCHAR(50) NOT NULL,
  size VARCHAR(50) NOT NULL,
  is_favorite BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Credit transactions table
CREATE TABLE credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'purchase' or 'deduct'
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🧪 Testing

The implementation has been tested for:

- ✅ Visual testing in light and dark modes
- ✅ Responsive design on mobile, tablet, and desktop
- ✅ All interactions (upload, generate, gallery actions)
- ✅ Navigation across all pages
- ✅ Data persistence in localStorage
- ✅ Mock user state display
- ✅ Accessibility (keyboard navigation, screen reader, color contrast)
- ✅ Code quality (linting, type checking)
- ✅ Cross-browser compatibility (Chrome, Firefox, Edge)

## 📝 Known Issues & Limitations

### Current Limitations (UI-Only Implementation)

1. **No Real AI Generation**
   - Plushie generation is mocked with 3-5 second delays
   - Returns random sample images instead of AI-generated content
   - Requires backend AI integration for actual generation

2. **No Real Authentication**
   - User is always "logged in" with mock data
   - No sign-in/sign-up flow
   - No session management
   - Requires Better Auth integration

3. **No Payment Processing**
   - Pricing page displays credit packages
   - No actual payment processing
   - No credit purchase flow
   - Requires Stripe or similar integration

4. **No Credit Tracking**
   - Mock credits (50) displayed in UI
   - No actual credit deduction
   - No credit balance updates
   - Requires backend credit system

5. **localStorage Only**
   - Gallery data persists in browser localStorage
   - Not synced across devices
   - Lost if browser cache is cleared
   - Requires database integration

6. **No Real Image Storage**
   - Images are served from public directory
   - No actual file upload to server
   - No cloud storage integration
   - Requires Vercel Blob or similar

### Future Enhancements

1. **AI Generation Integration**
   - Connect to AI image generation API
   - Support custom style training
   - Add generation queue system
   - Implement generation history

2. **Advanced Gallery Features**
   - Bulk actions (delete, download)
   - Collections/folders
   - Shareable public galleries
   - Social media integration

3. **User Experience**
   - Generation progress with real updates
   - Generation history with re-download
   - Style recommendations based on image
   - Batch generation support

4. **Monetization**
   - Subscription plans
   - Free trial with limited credits
   - Referral program
   - Enterprise features

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Need Help?

If you encounter any issues:

1. Review the documentation above
2. Check the [FAQ page](/faq) in the application
3. Create a new issue with detailed information about your problem

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Inspired by the love for cute and adorable things

---

**Happy plushie making! 🧸✨**
