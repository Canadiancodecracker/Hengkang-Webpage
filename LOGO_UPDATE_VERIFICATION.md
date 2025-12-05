# Logo Update Verification

## Overview
The website logos have been updated to high-quality, transparent versions based on the provided reference image.

## Changes
1.  **Generated New Assets**:
    -   `public/assets/images/logo_light_v2.png`: White text/icon for dark backgrounds (Navbar transparent state, Footer).
    -   `public/assets/images/logo_dark_v2.png`: Dark blue text/icon for light backgrounds (Navbar scrolled state).

2.  **Updated Code**:
    -   Modified `src/components/Layout.tsx` to reference the new `_v2` logo files.

## Verification Steps
1.  **Navbar (Initial State)**:
    -   Verify that the logo is visible and white on the transparent navbar.
    -   Ensure the background is transparent and edges are clean.

2.  **Navbar (Scrolled State)**:
    -   Scroll down the page.
    -   Verify that the logo switches to the dark blue version.
    -   Ensure it contrasts well with the white background.

3.  **Footer**:
    -   Scroll to the footer.
    -   Verify that the logo is white and matches the navbar's initial state logo.

## Files Created
-   `/public/assets/images/logo_light_v2.png`
-   `/public/assets/images/logo_dark_v2.png`
