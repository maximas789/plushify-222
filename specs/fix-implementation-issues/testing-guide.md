# Testing Guide: Fix Implementation Issues

This guide provides step-by-step instructions for verifying all fixes implemented in Phases 1-3.

## Table of Contents

- [Automated Tests](#automated-tests)
- [Memory Leak Testing](#memory-leak-testing)
- [Image Optimization Verification](#image-optimization-verification)
- [localStorage Error Handling](#localstorage-error-handling)
- [Toast Notification Testing](#toast-notification-testing)
- [Visual Regression Testing](#visual-regression-testing)
- [Accessibility Testing](#accessibility-testing)
- [Success Criteria](#success-criteria)

---

## Automated Tests

### ESLint Verification

**Command**:
```bash
pnpm run lint
```

**Expected Result**: ✅ Pass with 0 warnings

**What This Tests**:
- Import order is correct
- No unused variables
- No duplicate code
- Proper React hooks usage
- Proper TypeScript patterns

**Status**: ✅ PASSED

---

### TypeScript Type Checking

**Command**:
```bash
pnpm run typecheck
```

**Expected Result**: ✅ Pass with 0 errors

**What This Tests**:
- All types are properly defined
- No type mismatches
- No missing type imports
- Proper component prop types
- Correct API types

**Status**: ✅ PASSED

---

## Memory Leak Testing

**Goal**: Verify that the useImageUpload hook properly cleans up object URLs to prevent memory leaks.

### Setup

1. Start the development server (if not already running)
2. Navigate to the Dashboard page (http://localhost:3000/dashboard)
3. Open Chrome DevTools (F12 or right-click → Inspect)
4. Go to the **Memory** tab

### Test Procedure

#### Step 1: Take Baseline Snapshot

1. Click "Take heap snapshot" button
2. Wait for snapshot to complete
3. Label this as "Snapshot 1 - Baseline"

#### Step 2: Upload and Clear Images

1. Upload an image using the file picker
2. Wait for image to appear
3. Click "Clear Image" button
4. Repeat this process 10 times with different images

#### Step 3: Take Second Snapshot

1. Click "Take heap snapshot" button again
2. Wait for snapshot to complete
3. Label this as "Snapshot 2 - After 10 uploads/clears"

#### Step 4: Analyze Results

1. Select "Comparison" view in DevTools
2. Compare Snapshot 2 to Snapshot 1
3. Look for object URLs in the memory

**Expected Results**:
- ✅ Memory delta should be minimal (< 5MB)
- ✅ No retained object URLs (blob:http://...)
- ✅ Detached DOM nodes should be minimal
- ✅ Memory graph should not show continuous growth

**Failure Indicators**:
- ❌ Memory delta > 20MB
- ❌ Multiple retained blob URLs
- ❌ Steadily increasing memory usage
- ❌ Large number of detached DOM nodes

### Alternative Quick Test

If you don't want to use heap snapshots:

1. Open Performance Monitor (DevTools → More tools → Performance monitor)
2. Watch "JS heap size" metric
3. Upload and clear 20 images in succession
4. JS heap size should return to near-baseline after each clear

---

## Image Optimization Verification

**Goal**: Verify that Next.js Image component properly optimizes images with WebP/AVIF format and lazy loading.

### Setup

1. Start the development server
2. Navigate to the Gallery page (http://localhost:3000/gallery)
3. Open Chrome DevTools (F12)
4. Go to the **Network** tab
5. Filter by "Img" to show only images

### Test Procedure

#### Test 1: Format Optimization

1. Clear network log (trash icon in Network tab)
2. Refresh the gallery page
3. Click on any image request in the Network tab
4. Check the "Headers" section

**Expected Results**:
- ✅ Response headers show `content-type: image/webp` or `image/avif`
- ✅ File size is significantly smaller than original
- ✅ Images are served from `/_next/image?url=...`

**Example**:
```
Original: 2.4 MB JPEG
Optimized: 287 KB WebP (88% reduction)
```

#### Test 2: Lazy Loading

1. Clear network log
2. Refresh the page and stay at the top
3. Watch the Network tab
4. Scroll down slowly

**Expected Results**:
- ✅ Images load progressively as you scroll
- ✅ Only visible images are initially loaded
- ✅ Images have `loading="lazy"` attribute
- ✅ Below-fold images load on demand

#### Test 3: Responsive Sizes

1. Open DevTools Device Toolbar (Ctrl+Shift+M)
2. Test different viewport sizes:
   - Mobile: 375px width
   - Tablet: 768px width
   - Desktop: 1440px width
3. Check image requests in Network tab

**Expected Results**:
- ✅ Different image sizes loaded for different viewports
- ✅ Smaller images on mobile (faster load)
- ✅ Larger images on desktop (better quality)
- ✅ `sizes` attribute properly configured

### Pages to Test

- Dashboard: `/dashboard` (preview images)
- Gallery: `/gallery` (grid of thumbnails)
- Gallery Detail: `/gallery` → click any card (before/after images)

---

## localStorage Error Handling

**Goal**: Verify that the app gracefully handles localStorage errors without crashing.

### Test 1: Storage Quota Exceeded

#### Setup

1. Navigate to Dashboard page
2. Open browser console (F12 → Console tab)

#### Fill localStorage to Capacity

Run this script in the console:

```javascript
// Fill localStorage to near capacity
try {
  for (let i = 0; i < 10000; i++) {
    localStorage.setItem(`test_${i}`, 'x'.repeat(1000));
  }
} catch (e) {
  console.log('Storage full at iteration:', i);
}
```

#### Test Procedure

1. Generate a plushie by uploading an image and clicking "Generate Plushie"
2. Click "Save to Gallery" button
3. Observe the toast notification

**Expected Results**:
- ✅ Error toast appears with message: "Failed to save plushie. Your browser storage might be full."
- ✅ App does not crash or freeze
- ✅ No console errors (only expected error log)
- ✅ User can continue using the app

**Failure Indicators**:
- ❌ App crashes or becomes unresponsive
- ❌ No error message shown to user
- ❌ Uncaught exceptions in console
- ❌ Success message shown despite failure

#### Cleanup

```javascript
// Clear test data
for (let i = 0; i < 10000; i++) {
  localStorage.removeItem(`test_${i}`);
}
```

### Test 2: Disabled localStorage

#### Setup (Chrome)

1. Open DevTools → Application tab
2. Go to Storage → Local Storage
3. Right-click on your site → Delete
4. Check "Block third-party cookies" in browser settings

#### Test Procedure

1. Try to save a plushie
2. Try to view the gallery
3. Try to upload an image

**Expected Results**:
- ✅ Appropriate error messages shown
- ✅ App continues to function
- ✅ No JavaScript errors
- ✅ Graceful degradation

---

## Toast Notification Testing

**Goal**: Verify that toast notifications appear correctly and are accessible.

### Test Cases

#### Test 1: Success Toast

1. Navigate to Dashboard
2. Generate and save a plushie
3. Click "Save to Gallery"

**Expected Results**:
- ✅ Green success toast appears at top-center
- ✅ Message reads: "Plushie saved to gallery!"
- ✅ Toast has close button (X)
- ✅ Toast auto-dismisses after 3-5 seconds
- ✅ Toast is dismissible by clicking X

#### Test 2: Error Toast

1. Fill localStorage (see localStorage test above)
2. Try to save a plushie

**Expected Results**:
- ✅ Red error toast appears at top-center
- ✅ Message reads: "Failed to save plushie. Your browser storage might be full."
- ✅ Toast has close button
- ✅ Toast auto-dismisses or stays until manually closed
- ✅ Clear error indication (color, icon)

#### Test 3: Light/Dark Mode

1. Test in light mode (default)
   - ✅ Toast is readable with proper contrast
   - ✅ Colors match light theme
2. Toggle to dark mode (moon icon in header)
   - ✅ Toast is readable with proper contrast
   - ✅ Colors match dark theme
   - ✅ Border/shadow visible against dark background

#### Test 4: Multiple Toasts

1. Trigger multiple actions rapidly
2. Observe toast stacking behavior

**Expected Results**:
- ✅ Multiple toasts stack vertically
- ✅ Each toast is independently dismissible
- ✅ No overlap or rendering issues
- ✅ Toasts appear in chronological order

#### Test 5: Accessibility

1. Use keyboard only (Tab, Enter, Escape)
2. Test with screen reader (NVDA/JAWS/VoiceOver)

**Expected Results**:
- ✅ Toasts are announced by screen reader
- ✅ Close button is keyboard accessible
- ✅ Toast has proper ARIA labels
- ✅ Focus management is correct

---

## Visual Regression Testing

**Goal**: Ensure UI looks correct across all pages and themes without layout shifts.

### Test Matrix

Test all pages in the following configurations:

| Page | Light Mode | Dark Mode | Mobile | Tablet | Desktop |
|------|-----------|-----------|--------|--------|---------|
| Landing | ☐ | ☐ | ☐ | ☐ | ☐ |
| Dashboard | ☐ | ☐ | ☐ | ☐ | ☐ |
| Gallery | ☐ | ☐ | ☐ | ☐ | ☐ |
| Profile | ☐ | ☐ | ☐ | ☐ | ☐ |
| FAQ | ☐ | ☐ | ☐ | ☐ | ☐ |
| Pricing | ☐ | ☐ | ☐ | ☐ | ☐ |
| Docs | ☐ | ☐ | ☐ | ☐ | ☐ |

### Viewport Sizes

- **Mobile**: 375px × 667px (iPhone SE)
- **Tablet**: 768px × 1024px (iPad)
- **Desktop**: 1440px × 900px (Standard laptop)

### Testing Procedure

For each page/configuration:

1. Navigate to the page
2. Let page fully load
3. Check for layout shifts
4. Verify images load properly
5. Check responsive behavior
6. Verify dark mode styling

### What to Look For

**Images**:
- ✅ No layout shift when images load
- ✅ Proper aspect ratios maintained
- ✅ No broken image icons
- ✅ Loading states appear smoothly
- ✅ Lazy-loaded images appear on scroll

**Layout**:
- ✅ No horizontal scrollbars
- ✅ Proper spacing and alignment
- ✅ Text is readable
- ✅ Buttons are accessible
- ✅ No overlapping elements

**Dark Mode**:
- ✅ All text is readable
- ✅ Proper contrast ratios
- ✅ Images have appropriate borders
- ✅ UI elements are visible
- ✅ No white flashes on load

**Responsive**:
- ✅ Mobile menu works properly
- ✅ Grid layouts adjust correctly
- ✅ Images scale appropriately
- ✅ Touch targets are 44px minimum
- ✅ No content cutoff

### Performance Checks

Open DevTools → Lighthouse:

1. Run Lighthouse audit
2. Check Performance score
3. Review "Avoid layout shifts" metric

**Expected Results**:
- ✅ CLS (Cumulative Layout Shift) < 0.1
- ✅ LCP (Largest Contentful Paint) < 2.5s
- ✅ Performance score > 90

---

## Accessibility Testing

**Goal**: Ensure the app is accessible to users with disabilities.

### Keyboard Navigation

Test all interactive elements with keyboard only (no mouse):

1. **Tab Navigation**
   - ✅ All buttons/links are focusable
   - ✅ Focus order is logical
   - ✅ Focus indicator is visible
   - ✅ Skip links work (if present)

2. **Enter/Space Activation**
   - ✅ Buttons activate on Enter/Space
   - ✅ Links activate on Enter
   - ✅ Dropdowns open with keyboard
   - ✅ Modals close with Escape

3. **Form Controls**
   - ✅ File input is keyboard accessible
   - ✅ Custom inputs work with keyboard
   - ✅ Error messages are announced
   - ✅ Labels are properly associated

### Screen Reader Testing

Use NVDA (Windows), JAWS (Windows), or VoiceOver (Mac):

1. **Navigation**
   - ✅ Headings are properly structured (h1, h2, h3)
   - ✅ Landmarks are announced (nav, main, footer)
   - ✅ Links have descriptive text
   - ✅ Buttons have clear labels

2. **Images**
   - ✅ All images have alt text
   - ✅ Alt text is descriptive
   - ✅ Decorative images use alt=""
   - ✅ Complex images have long descriptions

3. **Interactive Elements**
   - ✅ Button purpose is clear
   - ✅ Form labels are announced
   - ✅ Error messages are read
   - ✅ Loading states are announced

4. **Toast Notifications**
   - ✅ Toasts are announced when they appear
   - ✅ Message content is read
   - ✅ Success/error status is conveyed
   - ✅ Close button is accessible

### Color Contrast

Use browser extension (e.g., axe DevTools):

1. Run automated accessibility scan
2. Check color contrast ratios
3. Verify against WCAG 2.1 AA standards

**Expected Results**:
- ✅ Text contrast ratio ≥ 4.5:1 (normal text)
- ✅ Large text contrast ratio ≥ 3:1
- ✅ UI component contrast ≥ 3:1
- ✅ No contrast issues in dark mode

### Focus States

1. Tab through all interactive elements
2. Verify focus indicators are visible

**Expected Results**:
- ✅ Default browser focus outline visible OR
- ✅ Custom focus styles with sufficient contrast
- ✅ Focus never hidden or removed
- ✅ Focus order matches visual order

### ARIA Attributes

Check in DevTools Elements panel:

1. **Required ARIA**
   - ✅ Buttons have aria-label if icon-only
   - ✅ Modals have aria-modal="true"
   - ✅ Live regions for dynamic content
   - ✅ Form inputs have aria-describedby for errors

2. **Invalid ARIA**
   - ✅ No invalid ARIA attributes
   - ✅ No misused ARIA roles
   - ✅ ARIA doesn't conflict with native semantics

---

## Success Criteria

All tests must pass for Phase 4 to be considered complete:

### Automated Tests
- ✅ ESLint: 0 warnings
- ✅ TypeScript: 0 errors

### Manual Tests
- ☐ Memory leak test: No retained object URLs
- ☐ Image optimization: 70%+ file size reduction
- ☐ localStorage errors: Graceful error handling
- ☐ Toast notifications: Work in light/dark mode
- ☐ Visual regression: No layout shifts
- ☐ Accessibility: WCAG 2.1 AA compliant

### Browser Compatibility
Test in:
- ☐ Chrome (latest)
- ☐ Firefox (latest)
- ☐ Safari (latest)
- ☐ Edge (latest)

### Performance
- ☐ Lighthouse Performance score > 90
- ☐ CLS (Cumulative Layout Shift) < 0.1
- ☐ LCP (Largest Contentful Paint) < 2.5s
- ☐ No console errors or warnings

---

## Reporting Issues

If any test fails:

1. Document the failure with screenshots
2. Note the browser/OS/viewport size
3. Include console errors (if any)
4. List steps to reproduce
5. Report in project issue tracker

---

## Additional Resources

- [Chrome DevTools Memory Profiling](https://developer.chrome.com/docs/devtools/memory-problems/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Performance Audits](https://developer.chrome.com/docs/lighthouse/performance/)
