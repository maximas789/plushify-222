# Plushify UI Transformation - Implementation Plan

## Overview

This implementation plan outlines the step-by-step tasks to transform the Next.js boilerplate into the Plushify UI. Each phase is organized with actionable tasks and checkboxes for progress tracking.

---

## Phase 1: Foundation & Styling

**Goal**: Establish visual identity, navigation structure, and base styling system.

### Tasks

- [x] Update color scheme in `src/app/globals.css`
  - [x] Add plushie-specific color tokens (--plushie-pink, --plushie-blue, --plushie-purple, --plushie-yellow)
  - [x] Update primary color to soft pink (oklch(0.65 0.20 320))
  - [x] Update secondary color to light purple (oklch(0.85 0.10 280))
  - [x] Update accent color to soft yellow (oklch(0.90 0.12 90))
  - [x] Increase border radius to 1rem for softer feel
  - [x] Add dark mode color adjustments

- [x] Add custom animations to `src/app/globals.css`
  - [x] Create `@keyframes bounce-gentle` animation
  - [x] Create `@keyframes float` animation
  - [x] Create `@keyframes shimmer` animation

- [x] Install missing shadcn/ui components
  - [x] Run: `pnpm dlx shadcn@latest add slider`
  - [x] Run: `pnpm dlx shadcn@latest add tabs`
  - [x] Run: `pnpm dlx shadcn@latest add progress`
  - [x] Run: `pnpm dlx shadcn@latest add accordion`
  - [x] Run: `pnpm dlx shadcn@latest add sheet`
  - [x] Run: `pnpm dlx shadcn@latest add tooltip`

- [x] Rebrand site header (`src/components/site-header.tsx`)
  - [x] Replace Bot icon with Heart icon from lucide-react
  - [x] Change "Starter Kit" text to "Plushify"
  - [x] Update navigation links to include: Features, Pricing, Docs, Dashboard
  - [x] Update UserProfile component to always show mock user
  - [x] Remove conditional rendering based on session

- [x] Create mobile navigation component
  - [x] Create `src/components/shared/mobile-nav.tsx`
  - [x] Implement hamburger menu button
  - [x] Create slide-out drawer with Sheet component
  - [x] Add mobile navigation links
  - [x] Integrate into site-header.tsx

- [x] Update site footer (`src/components/site-footer.tsx`)
  - [x] Create Product section (Features, Pricing, FAQ)
  - [x] Create Legal section (Privacy, Terms, Cookies)
  - [x] Create Resources section (Docs, Support)
  - [x] Update copyright to "© 2025 Plushify. All rights reserved."
  - [x] Remove or update "Built using..." attribution

- [x] Create shared utility components
  - [x] Create `src/components/shared/page-header.tsx` - Reusable page header with title and description
  - [x] Create `src/components/shared/empty-state.tsx` - Empty gallery state with CTA
  - [x] Create `src/components/shared/loading-skeleton.tsx` - Custom loading skeletons

- [x] Update layout metadata (`src/app/layout.tsx`)
  - [x] Change title to "Plushify - Turn Your Photos into Adorable Plushies"
  - [x] Update description with SEO-optimized text
  - [x] Add keywords array (plushie generator, AI plushie maker, etc.)
  - [x] Update OpenGraph metadata
  - [x] Update Twitter card metadata

- [x] Remove boilerplate components
  - [x] Delete `src/components/setup-checklist.tsx`
  - [x] Delete `src/components/starter-prompt-modal.tsx`
  - [x] Delete `src/hooks/use-diagnostics.ts`
  - [x] Delete `src/app/api/diagnostics/route.ts` (if exists)

---

## Phase 2: Mock Data & State Management

**Goal**: Create realistic mock data and state management hooks for UI functionality.

### Tasks

- [x] Create mock data directory structure
  - [x] Create `src/lib/mock-data/` directory

- [x] Create mock user data (`src/lib/mock-data/user.ts`)
  - [x] Define mockUser object with id, name, email, avatar, createdAt, credits
  - [x] Set name: "Sarah Johnson"
  - [x] Set email: "sarah@example.com"
  - [x] Set credits: 50
  - [x] Export mockUser constant

- [x] Create mock plushies data (`src/lib/mock-data/plushies.ts`)
  - [x] Define plushie type interface (id, userId, originalImage, generatedImage, style, size, createdAt, isFavorite)
  - [x] Create array of 6+ sample plushies with different styles
  - [x] Export mockPlushies constant

- [x] Create mock gallery samples (`src/lib/mock-data/gallery-samples.ts`)
  - [x] Create array of sample before/after image pairs
  - [x] Include variety of subjects (people, pets, objects)
  - [x] Export gallerySamples constant

- [x] Create mock testimonials data (`src/lib/mock-data/testimonials.ts`)
  - [x] Create array of 5+ testimonials with name, avatar, text
  - [x] Export testimonials constant

- [x] Create mock generation utility (`src/lib/mock-generation.ts`)
  - [x] Create `mockGeneratePlushie` async function
  - [x] Implement 3-5 second delay with setTimeout
  - [x] Return mock plushie result from gallery samples
  - [x] Export function

- [x] Create plushie gallery hook (`src/hooks/use-plushie-gallery.ts`)
  - [x] Implement useState for gallery items
  - [x] Implement useEffect to load from localStorage on mount
  - [x] Create `addPlushie` function (saves to state and localStorage)
  - [x] Create `deletePlushie` function (removes from state and localStorage)
  - [x] Create `toggleFavorite` function (updates favorite status)
  - [x] Export hook

- [x] Create image upload hook (`src/hooks/use-image-upload.ts`)
  - [x] Implement useState for uploaded image
  - [x] Create `handleFileSelect` function with validation
  - [x] Create `handleDrop` function for drag & drop
  - [x] Create `clearImage` function
  - [x] Validate file type (jpg, png, webp)
  - [x] Validate file size (max 10MB)
  - [x] Export hook

- [x] Add mock images to public directory
  - [x] Create `public/plushies/samples/` directory
  - [x] Add at least 6 before/after image pairs (or placeholder paths)
  - [x] Create `public/avatars/` directory
  - [x] Add default avatar image

---

## Phase 3: Landing Page

**Goal**: Create engaging, SEO-optimized landing page with cute & playful design.

### Tasks

- [x] Create landing components directory
  - [x] Create `src/components/landing/` directory

- [x] Create hero section component (`src/components/landing/hero-section.tsx`)
  - [x] Add gradient headline using bg-gradient-to-r pattern
  - [x] Add subheadline with description
  - [x] Add "Get Started" CTA button (links to /dashboard)
  - [x] Add "See Examples" secondary button (scrolls to demo section)
  - [x] Add hero image or illustration placeholder
  - [x] Make responsive (stack on mobile, side-by-side on desktop)

- [x] Create feature showcase component (`src/components/landing/feature-showcase.tsx`)
  - [x] Create grid layout (1/2/4 columns responsive)
  - [x] Add 4+ feature cards with icons and descriptions
  - [x] Include before/after example images
  - [x] Use existing Card component for structure

- [x] Create demo carousel component (`src/components/landing/demo-carousel.tsx`)
  - [x] Implement auto-rotating carousel of plushie examples
  - [x] Add manual navigation controls (prev/next)
  - [x] Display before/after comparisons
  - [x] Use mock gallery samples data
  - [x] Add auto-play with 5-second intervals

- [x] Create testimonials component (`src/components/landing/testimonials.tsx`)
  - [x] Create grid of testimonial cards
  - [x] Display user avatar, name, and review text
  - [x] Use mock testimonials data
  - [x] Make responsive (1/2/3 columns)

- [x] Create pricing section component (`src/components/landing/pricing-section.tsx`)
  - [x] Create 3 pricing tier cards (Basic, Pro, Elite)
  - [x] Basic: 30 credits for $9
  - [x] Pro: 100 credits for $19 (add "Most Popular" badge)
  - [x] Elite: 200 credits for $29
  - [x] Add feature bullets for each tier
  - [x] Add CTA buttons (UI-only, link to /pricing)
  - [x] Make responsive (stack on mobile, 3 columns on desktop)

- [x] Rebuild landing page (`src/app/page.tsx`)
  - [x] Remove all boilerplate content
  - [x] Import all landing components
  - [x] Assemble: Hero → Features → Demo → Testimonials → Pricing
  - [x] Remove use-diagnostics hook
  - [x] Test responsive layout
  - [x] Verify dark mode support

- [x] Add landing page assets
  - [x] Create `public/landing/` directory
  - [x] Add hero image or use placeholder
  - [x] Add feature icons/images or use lucide-react icons

---

## Phase 4: Dashboard - Generation Interface

**Goal**: Build main plushie generation interface with upload, options, and preview.

### Tasks

- [x] Create plushie components directory
  - [x] Create `src/components/plushie/` directory

- [x] Create image upload zone component (`src/components/plushie/image-upload-zone.tsx`)
  - [x] Implement drag & drop area with visual feedback
  - [x] Add file input with click-to-browse
  - [x] Display image preview after upload
  - [x] Show file validation errors
  - [x] Use use-image-upload hook
  - [x] Add "Clear" button to remove uploaded image
  - [x] Style with dashed border and upload icon

- [x] Create generation panel component (`src/components/plushie/generation-panel.tsx`)
  - [x] Add style selector (Kawaii, Cartoon, Realistic, Vintage)
  - [x] Add size selector (Small, Medium, Large)
  - [x] Add "Generate Plushie" button
  - [x] Disable button when no image uploaded
  - [x] Trigger mock generation on click
  - [x] Use Tabs or RadioGroup for selectors

- [x] Create generation progress component (`src/components/plushie/generation-progress.tsx`)
  - [x] Create animated progress bar using Progress component
  - [x] Display cute status messages ("Adding fluffiness...", "Sewing seams...")
  - [x] Show Spinner icon
  - [x] Rotate through 3-4 status messages during 3-5 second generation
  - [x] Use shimmer animation for progress bar

- [x] Create plushie preview component (`src/components/plushie/plushie-preview.tsx`)
  - [x] Display before/after images side-by-side
  - [x] Add slider to compare images (use Slider component)
  - [x] Add zoom functionality (click to enlarge in Dialog)
  - [x] Add "Download" button
  - [x] Add "Save to Gallery" button
  - [x] Add "Generate Another" button
  - [x] Make responsive (stack on mobile)

- [x] Rebuild dashboard page (`src/app/dashboard/page.tsx`)
  - [x] Remove all boilerplate content
  - [x] Remove useSession hook and session check logic
  - [x] Import all plushie components
  - [x] Create layout: Upload Zone → Generation Panel → Progress → Preview
  - [x] Implement generation flow state management
  - [x] Show/hide components based on generation state
  - [x] Add "View Gallery" button (links to /gallery)
  - [x] Test complete generation flow

---

## Phase 5: Gallery Page

**Goal**: Display user's generated plushies in beautiful, manageable grid.

### Tasks

- [x] Create gallery components directory
  - [x] Create `src/components/gallery/` directory

- [x] Create gallery card component (`src/components/gallery/gallery-card.tsx`)
  - [x] Display plushie thumbnail
  - [x] Add hover effect (scale, shadow)
  - [x] Show creation date badge
  - [x] Add favorite icon indicator
  - [x] Add quick action buttons (download, share, delete)
  - [x] Use DropdownMenu for actions
  - [x] Click card to open before/after view

- [x] Create before/after card component (`src/components/gallery/before-after-card.tsx`)
  - [x] Display in Dialog modal
  - [x] Show before/after with interactive slider
  - [x] Add metadata (date, style, size)
  - [x] Add action buttons (download, share, delete, favorite)
  - [x] Add close button

- [x] Create gallery grid component (`src/components/gallery/gallery-grid.tsx`)
  - [x] Create responsive grid layout
  - [x] 1 column (mobile), 2 columns (tablet), 3-4 columns (desktop)
  - [x] Add filter controls (All, Favorites, By Style)
  - [x] Add sort controls (Newest, Oldest)
  - [x] Use Tabs component for filters
  - [x] Map through plushies and render GalleryCard
  - [x] Handle empty filtered results

- [x] Create gallery page (`src/app/gallery/page.tsx`)
  - [x] Remove session check logic
  - [x] Import gallery components and hooks
  - [x] Use use-plushie-gallery hook
  - [x] Display PageHeader with title and stats
  - [x] Show EmptyState when no plushies exist
  - [x] Show GalleryGrid when plushies exist
  - [x] Implement delete confirmation dialog
  - [x] Test gallery persistence in localStorage

---

## Phase 6: Pricing Page

**Goal**: Create dedicated pricing page with credit-based pricing tiers.

### Tasks

- [x] Create pricing page (`src/app/pricing/page.tsx`)
  - [x] Import PricingSection component
  - [x] Add PageHeader with title and description
  - [x] Display 3 pricing tiers
  - [x] Add feature comparison table
  - [x] Add FAQ section specific to pricing
  - [x] Add "Start Generating" CTA linking to /dashboard
  - [x] Make fully responsive

- [x] Update PricingSection component if needed
  - [x] Ensure it works standalone on pricing page
  - [x] Add more detailed feature lists
  - [x] Highlight value proposition for each tier

---

## Phase 7: Documentation & Legal Pages

**Goal**: Provide user documentation and legal compliance pages.

### Tasks

- [x] Create docs components directory
  - [x] Create `src/components/docs/` directory

- [x] Create FAQ accordion component (`src/components/docs/faq-accordion.tsx`)
  - [x] Use Accordion component from shadcn/ui
  - [x] Add 8-10 FAQ items with questions and answers
  - [x] Topics: How to upload, generation process, credits, file formats, etc.
  - [ ] Make searchable (optional enhancement)

- [x] Create docs page (`src/app/docs/page.tsx`)
  - [x] Add PageHeader with "User Guide" title
  - [x] Create sections: Getting Started, Uploading Images, Generation Options, Gallery Management
  - [x] Use Card components for each section
  - [x] Add step-by-step instructions
  - [x] Include helpful tips
  - [x] Make content scannable with headings

- [x] Create FAQ page (`src/app/faq/page.tsx`)
  - [x] Add PageHeader with "Frequently Asked Questions" title
  - [x] Import and use FAQAccordion component
  - [x] Organize by category if needed

- [x] Create privacy policy page (`src/app/privacy/page.tsx`)
  - [x] Add PageHeader with "Privacy Policy" title
  - [x] Add placeholder legal content
  - [x] Use proper typography and spacing
  - [x] Include last updated date

- [x] Create terms of service page (`src/app/terms/page.tsx`)
  - [x] Add PageHeader with "Terms of Service" title
  - [x] Add placeholder legal content
  - [x] Use proper typography and spacing
  - [x] Include last updated date

- [x] Create cookie policy page (`src/app/cookies/page.tsx`)
  - [x] Add PageHeader with "Cookie Policy" title
  - [x] Add placeholder legal content
  - [x] Explain cookie usage
  - [x] Include last updated date

---

## Phase 8: Profile Page Updates

**Goal**: Update profile page to use mock user data.

### Tasks

- [x] Update profile page (`src/app/profile/page.tsx`)
  - [x] Remove real session check logic
  - [x] Import mockUser from mock-data
  - [x] Replace session.user data with mockUser data
  - [x] Display mock user info (name, email, avatar)
  - [x] Display mock credits (50)
  - [x] Keep existing UI structure
  - [x] Update "Recent Activity" with mock data
  - [ ] Test in both light and dark mode

---

## Phase 9: Final Cleanup & Removal

**Goal**: Remove all unnecessary boilerplate code and files.

### Tasks

- [x] Remove chat page
  - [x] Delete `src/app/chat/page.tsx`
  - [x] Remove chat route from any navigation

- [x] Clean up imports
  - [x] Remove unused imports from site-header.tsx
  - [x] Remove unused imports from layout.tsx
  - [x] Remove unused imports from any updated files

- [x] Verify all deletions
  - [x] Confirm setup-checklist.tsx is deleted
  - [x] Confirm starter-prompt-modal.tsx is deleted
  - [x] Confirm use-diagnostics.ts is deleted
  - [x] Confirm diagnostics API route is deleted

- [x] Update navigation references
  - [x] Remove any links to /chat
  - [x] Ensure all new links work (/pricing, /docs, /faq, /privacy, /terms, /cookies, /gallery)

---

## Phase 10: Testing & Quality Assurance

**Goal**: Verify all functionality works correctly and meets acceptance criteria.

### Tasks

- [x] Visual testing
  - [x] Test all pages in light mode
  - [x] Test all pages in dark mode
  - [x] Verify color scheme is cute & playful
  - [x] Check all animations work smoothly

- [x] Responsive testing
  - [x] Test landing page on mobile (320px, 375px, 414px)
  - [x] Test landing page on tablet (768px, 1024px)
  - [x] Test landing page on desktop (1280px, 1920px)
  - [x] Test dashboard on mobile, tablet, desktop
  - [x] Test gallery on mobile, tablet, desktop
  - [x] Test all other pages on multiple viewports

- [x] Interaction testing
  - [x] Test drag & drop file upload
  - [x] Test file picker upload
  - [x] Test style selector
  - [x] Test size selector
  - [x] Test generate button flow
  - [x] Test progress animation
  - [x] Test before/after preview
  - [x] Test save to gallery
  - [x] Test download button
  - [x] Test gallery card actions
  - [x] Test delete confirmation
  - [x] Test favorite toggle
  - [x] Test mobile navigation menu

- [x] Navigation testing
  - [x] Verify all header links work
  - [x] Verify all footer links work
  - [x] Verify mobile menu works
  - [x] Test browser back/forward buttons

- [x] Data persistence testing
  - [x] Generate plushie and verify it saves to localStorage
  - [x] Refresh page and verify gallery persists
  - [x] Delete plushie and verify removal persists
  - [x] Toggle favorite and verify it persists

- [x] Mock user testing
  - [x] Verify mock user displays in header
  - [x] Verify mock credits display
  - [x] Verify profile page shows mock data
  - [x] Verify no authentication prompts appear

- [x] Accessibility testing
  - [x] Test keyboard navigation (Tab, Enter, Space, Escape)
  - [x] Verify focus indicators visible
  - [x] Test with screen reader (basic check)
  - [x] Verify all images have alt text
  - [x] Check color contrast with browser DevTools

- [x] Code quality checks
  - [x] Run `pnpm run lint` - verify no errors
  - [x] Run `pnpm run typecheck` - verify no errors
  - [x] Check browser console - verify no errors or warnings
  - [x] Review code for any TODO comments

- [x] Cross-browser testing (if possible)
  - [x] Test in Chrome
  - [x] Test in Firefox
  - [x] Test in Safari (if on Mac)
  - [x] Test in Edge

---

## Phase 11: Documentation & Handoff

**Goal**: Document the implementation and prepare for next phase.

### Tasks

- [x] Update README (optional)
  - [x] Document Plushify features
  - [x] Update screenshots if needed
  - [x] Document mock data approach

- [x] Create handoff notes
  - [x] List all new components created
  - [x] List all mock data files
  - [x] Document localStorage schema
  - [x] Note any known issues or limitations

- [x] Prepare for backend integration
  - [x] Identify which components need API integration
  - [x] Document expected API endpoints
  - [x] Note credit system requirements

---

## Progress Tracking

- **Phase 1**: ☑ Completed
- **Phase 2**: ☑ Completed
- **Phase 3**: ☑ Completed
- **Phase 4**: ☑ Completed
- **Phase 5**: ☑ Completed
- **Phase 6**: ☑ Completed
- **Phase 7**: ☑ Completed
- **Phase 8**: ☑ Completed
- **Phase 9**: ☑ Completed
- **Phase 10**: ☑ Completed
- **Phase 11**: ☑ Completed

---

## Notes

- This plan focuses on UI implementation only
- No actual AI generation, authentication, or payment processing
- All generation is mocked with 3-5 second delays
- User is always "logged in" with mock data
- Gallery persists in localStorage only
- Testing phase does not include unit or E2E tests (as requested)
