# Plushify UI Transformation - Requirements Document

## Project Overview

Transform the Next.js boilerplate into **Plushify** - a SaaS application that allows users to upload images of themselves, friends, family, or pets and convert them into adorable plushie designs using AI. This is a **UI-ONLY implementation** focusing on user experience before implementing backend logic.

## Initial Requirements

### Core Functionality
1. **Landing Page**: Beautiful, SEO-optimized page showcasing the plushie generation feature with before/after examples
2. **Image Upload & Generation**: Users can upload images and generate plushie versions with customizable options
3. **Gallery**: Users can view, manage, and download their generated plushies
4. **Pricing**: Display credit-based pricing tiers (Basic, Pro, Elite)
5. **Documentation**: Public-facing user guides and FAQs
6. **Legal Pages**: Privacy Policy, Terms of Service, Cookie Policy

### Design Requirements
- **Style**: Cute & Playful aesthetic
- **Upload Flow**: Drag & drop + file picker
- **Gallery Layout**: Grid with before/after comparison cards
- **Responsive**: Mobile-first design for all devices
- **Dark Mode**: Full support for light and dark themes

## Functional Requirements

### FR-1: Landing Page
- **FR-1.1**: Display hero section with compelling headline and call-to-action
- **FR-1.2**: Showcase features grid highlighting key capabilities
- **FR-1.3**: Display rotating demo carousel of example plushie generations
- **FR-1.4**: Show user testimonials (mock data)
- **FR-1.5**: Display pricing section with 3 tiers
- **FR-1.6**: Provide clear navigation to Dashboard, Pricing, and Docs

### FR-2: Image Upload & Generation
- **FR-2.1**: Support drag & drop file upload
- **FR-2.2**: Provide file picker as fallback upload method
- **FR-2.3**: Validate uploaded images (file type, size, dimensions)
- **FR-2.4**: Display image preview after upload
- **FR-2.5**: Offer style selection (Kawaii, Cartoon, Realistic, Vintage)
- **FR-2.6**: Offer size selection (Small, Medium, Large)
- **FR-2.7**: Show animated progress during generation (3-5 second mock delay)
- **FR-2.8**: Display before/after comparison when generation completes
- **FR-2.9**: Provide download, share, and save to gallery options

### FR-3: Gallery Management
- **FR-3.1**: Display user's generated plushies in responsive grid
- **FR-3.2**: Show before/after comparison for each plushie
- **FR-3.3**: Provide filter and sort controls
- **FR-3.4**: Support download action for individual plushies
- **FR-3.5**: Support share action (copy link or social media)
- **FR-3.6**: Support delete action with confirmation
- **FR-3.7**: Support favorite/unfavorite action
- **FR-3.8**: Persist gallery data in localStorage
- **FR-3.9**: Display empty state when no plushies generated

### FR-4: Pricing Page
- **FR-4.1**: Display 3 pricing tiers (Basic, Pro, Elite)
- **FR-4.2**: Show credit amounts for each tier (30, 100, 200)
- **FR-4.3**: Show pricing for each tier ($9, $19, $29)
- **FR-4.4**: Highlight "Most Popular" tier (Pro)
- **FR-4.5**: Display feature comparison table
- **FR-4.6**: Provide CTA buttons for each tier (UI-only, no payment)

### FR-5: Documentation
- **FR-5.1**: Provide user guide with how-to sections
- **FR-5.2**: Display FAQ with expandable accordion
- **FR-5.3**: Include troubleshooting tips
- **FR-5.4**: Offer search/filter for FAQ items

### FR-6: Legal Pages
- **FR-6.1**: Privacy Policy page with placeholder content
- **FR-6.2**: Terms of Service page with placeholder content
- **FR-6.3**: Cookie Policy page with placeholder content

### FR-7: Mock Authentication
- **FR-7.1**: Simulate logged-in user state (no real authentication)
- **FR-7.2**: Display mock user profile in header (name, email, avatar)
- **FR-7.3**: Show mock user data in profile page
- **FR-7.4**: Display mock credit balance (50 credits)
- **FR-7.5**: No sign-in flow required - all pages accessible

### FR-8: Navigation
- **FR-8.1**: Site header with logo, navigation links, user profile, theme toggle
- **FR-8.2**: Navigation links: Home, Features (anchor), Pricing, Docs, Dashboard
- **FR-8.3**: Mobile navigation with hamburger menu and slide-out drawer
- **FR-8.4**: Site footer with product, legal, and resource sections
- **FR-8.5**: Footer links to all major pages

## Non-Functional Requirements

### NFR-1: Performance
- **NFR-1.1**: Pages load within 2 seconds on standard broadband
- **NFR-1.2**: Mock generation completes within 3-5 seconds
- **NFR-1.3**: Images optimized using Next.js Image component
- **NFR-1.4**: Lazy loading for gallery images

### NFR-2: Usability
- **NFR-2.1**: Intuitive drag & drop interface
- **NFR-2.2**: Clear visual feedback for all user actions
- **NFR-2.3**: Consistent component styling throughout app
- **NFR-2.4**: Helpful error messages for validation failures
- **NFR-2.5**: Empty states guide users to next action

### NFR-3: Accessibility
- **NFR-3.1**: Keyboard navigation support for all interactive elements
- **NFR-3.2**: Screen reader compatible with ARIA labels
- **NFR-3.3**: Color contrast meets WCAG AA standards
- **NFR-3.4**: Alt text for all images
- **NFR-3.5**: Focus indicators visible on all focusable elements
- **NFR-3.6**: Skip to main content link

### NFR-4: Responsiveness
- **NFR-4.1**: Mobile-first responsive design
- **NFR-4.2**: Gallery grid: 1 column (mobile), 2 columns (tablet), 3-4 columns (desktop)
- **NFR-4.3**: Dashboard layout adapts to screen size
- **NFR-4.4**: Touch-friendly controls on mobile devices

### NFR-5: Browser Compatibility
- **NFR-5.1**: Support latest 2 versions of Chrome, Firefox, Safari, Edge
- **NFR-5.2**: Graceful degradation for older browsers

### NFR-6: Design Consistency
- **NFR-6.1**: Follow cute & playful design system
- **NFR-6.2**: Use consistent color tokens from globals.css
- **NFR-6.3**: Maintain consistent spacing and typography
- **NFR-6.4**: Smooth animations and transitions

### NFR-7: Code Quality
- **NFR-7.1**: TypeScript with strict type checking
- **NFR-7.2**: ESLint passes with no errors
- **NFR-7.3**: Component reusability and modularity
- **NFR-7.4**: Clean, maintainable code structure

### NFR-8: Dark Mode
- **NFR-8.1**: Full dark mode support for all pages
- **NFR-8.2**: Smooth theme transitions
- **NFR-8.3**: Theme preference persists across sessions
- **NFR-8.4**: System preference detection

## User Preferences

- **Design Style**: Cute & Playful
- **Upload Flow**: Drag & Drop + File Picker
- **Gallery Layout**: Grid with Before/After Cards
- **Pricing Model**: Credit-based with 3 tiers:
  - Basic: 30 credits for $9
  - Pro: 100 credits for $19
  - Elite: 200 credits for $29
- **Legal Pages**: Privacy Policy, Terms of Service, User Guide, Cookie Policy

## Mock Data Requirements

### Mock User
- Name: Sarah Johnson
- Email: sarah@example.com
- Avatar: Default avatar image
- Credits: 50 (for UI display)
- Creation Date: 2024-01-15

### Mock Plushies
- At least 6 sample before/after image pairs
- Variety of subjects (people, pets, objects)
- Different styles represented (Kawaii, Cartoon, Realistic, Vintage)
- Stored in `public/plushies/samples/`

### Mock Testimonials
- At least 5 user testimonials
- Include name, avatar, and review text
- Variety of positive feedback

## Boilerplate Cleanup Requirements

### Remove the Following:
- `/chat` page (AI chat functionality)
- `setup-checklist.tsx` component
- `starter-prompt-modal.tsx` component
- `/api/diagnostics` route
- `use-diagnostics.ts` hook

### Keep but Modify:
- `/profile` page (populate with mock user data)
- Site header (rebrand to Plushify)
- Site footer (update links and sections)

## Acceptance Criteria

### AC-1: Landing Page
- [ ] Hero section displays with gradient headline and CTA buttons
- [ ] Features grid shows at least 4 key features
- [ ] Demo carousel rotates through example generations
- [ ] Testimonials section displays mock user reviews
- [ ] Pricing section shows 3 tiers with correct pricing
- [ ] Page is fully responsive on mobile, tablet, and desktop
- [ ] Dark mode works correctly

### AC-2: Dashboard - Generation Interface
- [ ] Upload zone accepts drag & drop
- [ ] Upload zone accepts file picker input
- [ ] Image preview displays after upload
- [ ] Style selector shows 4 options (Kawaii, Cartoon, Realistic, Vintage)
- [ ] Size selector shows 3 options (Small, Medium, Large)
- [ ] Generate button triggers mock generation
- [ ] Progress indicator shows for 3-5 seconds
- [ ] Before/after preview displays upon completion
- [ ] Download button works
- [ ] Save to gallery button adds to localStorage

### AC-3: Gallery Page
- [ ] Grid displays user's generated plushies
- [ ] Each card shows before/after comparison
- [ ] Quick actions (download, share, delete, favorite) work
- [ ] Empty state displays when no plushies exist
- [ ] Gallery data persists in localStorage
- [ ] Responsive grid: 1/2/3/4 columns based on viewport
- [ ] Dark mode works correctly

### AC-4: Pricing Page
- [ ] 3 pricing tiers display correctly
- [ ] Credit amounts visible (30, 100, 200)
- [ ] Prices visible ($9, $19, $29)
- [ ] "Most Popular" badge on Pro tier
- [ ] Feature comparison table present
- [ ] CTA buttons present (no actual payment)
- [ ] Responsive layout on all devices

### AC-5: Documentation Pages
- [ ] User guide page has helpful content
- [ ] FAQ page has accordion with expandable items
- [ ] Privacy policy page has placeholder content
- [ ] Terms of service page has placeholder content
- [ ] Cookie policy page has placeholder content
- [ ] All pages accessible from footer

### AC-6: Navigation
- [ ] Site header shows Plushify branding
- [ ] Navigation links work (Home, Features, Pricing, Docs, Dashboard)
- [ ] User profile displays in header (Sarah Johnson)
- [ ] Theme toggle works between light/dark mode
- [ ] Mobile navigation hamburger menu works
- [ ] Footer shows all correct links

### AC-7: Mock User State
- [ ] All pages display as logged in
- [ ] User avatar and name show in header
- [ ] Profile page shows mock user data
- [ ] No sign-in prompts or authentication flow
- [ ] Mock credits (50) display in UI

### AC-8: Code Quality
- [ ] All boilerplate components removed
- [ ] No console errors or warnings
- [ ] `pnpm run lint` passes
- [ ] `pnpm run typecheck` passes
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] ARIA labels present on interactive elements

## Out of Scope (For This Phase)

- ❌ Actual AI image generation
- ❌ Real authentication/authorization
- ❌ Payment processing
- ❌ Credit tracking/deduction
- ❌ Database integration
- ❌ API endpoints (except existing auth)
- ❌ Email functionality
- ❌ Unit tests
- ❌ End-to-end tests
- ❌ Server-side generation logic
- ❌ Image processing algorithms

## Success Metrics

- All acceptance criteria met
- Zero ESLint errors
- Zero TypeScript errors
- All pages responsive on 3+ device sizes
- Dark mode functional on all pages
- Mock user experience feels complete and polished
- Navigation intuitive and functional
- Gallery persistence working via localStorage
