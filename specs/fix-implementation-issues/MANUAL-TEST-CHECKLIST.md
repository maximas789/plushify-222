# Manual Testing Checklist

Quick reference checklist for manual testing. For detailed procedures, see `testing-guide.md`.

## Pre-Testing Setup

- [ ] Development server is running (`npm run dev`)
- [ ] Browser DevTools are open (F12)
- [ ] You have multiple test images ready to upload

---

## Priority 1: Critical Functionality (15 min)

### Memory Leak Test (10 min)

- [ ] Open DevTools → Memory tab
- [ ] Take baseline heap snapshot
- [ ] Upload and clear 10 images
- [ ] Take second heap snapshot
- [ ] Compare snapshots (memory delta should be < 5MB)
- [ ] No retained blob: URLs

**Expected**: Memory properly released, no object URL leaks

---

### localStorage Error Handling (5 min)

- [ ] Run script to fill localStorage (see testing-guide.md)
- [ ] Try to save a plushie
- [ ] Error toast appears with helpful message
- [ ] App doesn't crash
- [ ] Clear test data from localStorage

**Expected**: Graceful error handling, clear user feedback

---

## Priority 2: User Experience (10 min)

### Image Optimization (5 min)

- [ ] Open DevTools → Network tab → Filter by "Img"
- [ ] Navigate to Gallery page
- [ ] Images served in WebP/AVIF format
- [ ] File sizes reduced by 70%+
- [ ] Images load as you scroll (lazy loading)

**Expected**: Optimized images, lazy loading works

---

### Toast Notifications (5 min)

- [ ] Save plushie → Success toast appears (green)
- [ ] Trigger error → Error toast appears (red)
- [ ] Toast appears at top-center
- [ ] Toast has close button (X)
- [ ] Toast auto-dismisses
- [ ] Test in light mode - readable
- [ ] Test in dark mode - readable

**Expected**: Clear, accessible notifications

---

## Priority 3: Polish (25 min)

### Visual Regression (15 min)

Test these pages in different configurations:

#### Desktop (1440px)
- [ ] Landing page - Light mode
- [ ] Landing page - Dark mode
- [ ] Dashboard - Light mode
- [ ] Dashboard - Dark mode
- [ ] Gallery - Light mode
- [ ] Gallery - Dark mode

#### Mobile (375px)
- [ ] Landing page - Light mode
- [ ] Dashboard - Light mode
- [ ] Gallery - Light mode

**Expected**: No layout shifts, images load smoothly, responsive design works

---

### Accessibility (10 min)

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators are visible
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals/toasts
- [ ] File upload is keyboard accessible

#### Screen Reader (Optional)
- [ ] Headings are properly announced
- [ ] Images have descriptive alt text
- [ ] Buttons have clear labels
- [ ] Toast notifications are announced

#### Color Contrast
- [ ] Text is readable in light mode
- [ ] Text is readable in dark mode
- [ ] Focus indicators have sufficient contrast

**Expected**: Fully keyboard accessible, screen reader friendly

---

## Final Checks

### Performance (Lighthouse)
- [ ] Run Lighthouse audit (DevTools → Lighthouse)
- [ ] Performance score > 90
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] No console errors or warnings

### Browser Compatibility (Optional)
- [ ] Chrome - Works correctly
- [ ] Firefox - Works correctly
- [ ] Safari - Works correctly
- [ ] Edge - Works correctly

---

## Test Results Summary

### ✅ Passing Tests
- Automated: ESLint (0 warnings)
- Automated: TypeScript (0 errors)
- Manual: ________________ (fill in as you test)

### ❌ Failing Tests
- None expected
- If any fail, document in issue tracker

### 📝 Notes
- Add any observations or concerns here
- Note any edge cases discovered
- Document browser-specific issues

---

## Sign-Off

Once all tests pass:

- [ ] All automated tests passed
- [ ] All Priority 1 tests passed
- [ ] All Priority 2 tests passed
- [ ] All Priority 3 tests passed
- [ ] No console errors or warnings
- [ ] Phase 4 complete ✅

**Tested by**: ___________________
**Date**: ___________________
**Browser/OS**: ___________________
**Overall Result**: PASS / FAIL

---

## Need Help?

- **Detailed procedures**: See `testing-guide.md`
- **Expected results**: Each test has clear success criteria
- **Failure indicators**: Documented in testing guide
- **Screenshots**: Included in guide for reference
