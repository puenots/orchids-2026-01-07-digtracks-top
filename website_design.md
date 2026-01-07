
<high_level_design>
## 1. Brand & Art Direction Overview

**Visual Identity:**
- Bold, high-energy DJ/nightclub aesthetic with strong urban/street credibility
- Dark, moody atmosphere emphasizing premium music service for professional DJs
- Heavy use of dramatic photography (DJ equipment, crowds, hands on turntables)
- Strong typographic hierarchy with aggressive, condensed sans-serif headlines
- Red (#FF3B3B / #ED3237) as primary brand accent color against deep black backgrounds
- Subtle texture overlays and grain effects for authenticity
- Diagonal arrow motif (↗) used as design accent throughout for forward momentum
- Professional yet accessible tone targeting both beginner and expert DJs

**Photography Style:**
- High-contrast black and white with selective color (red accents)
- Action/lifestyle shots of DJs, equipment, and crowds
- Dramatic lighting with deep shadows
- Close-up detail shots of hardware and interfaces
- Authentic, non-staged documentary style

## 2. Color Palette

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| **Primary Brand Red** | #FF3B3B, #ED3237 | Primary CTA buttons, accents, highlights, hover states | Core brand color |
| **Deep Black** | #000000, #0A0A0A | Primary background, dark sections | True black base |
| **Charcoal** | #1A1A1A, #1E1E1E, #252525 | Card backgrounds, secondary surfaces | Layered depths |
| **Medium Gray** | #333333, #3D3D3D, #4A4A4A | Table rows, borders, inactive states | |
| **Light Gray** | #666666, #7A7A7A, #999999 | Secondary text, disabled states | |
| **Off White** | #FFFFFF, #F5F5F5 | Primary text, headings | High contrast text |
| **Yellow Accent** | #FFD700, #FFC700 | "Best Value" badges, special highlights | Secondary accent |
| **Success Green** | #00C853 (implied) | Checkmarks, positive indicators | Trophy/check icons |
| **Error/Warning Red** | #D32F2F | X marks, negative indicators | Comparison table negatives |
| **Transparent Overlays** | rgba(0,0,0,0.6-0.9) | Image overlays, gradient masks | |

## 3. Typography Scale

**Primary Typeface:** Sans-serif system stack (appears to be similar to Oswald, Bebas Neue, or Impact for display)

| Element | Font Properties | Usage |
|---------|----------------|-------|
| **Hero Display** | 96-120px, 900 weight, uppercase, tight line-height (0.9-1.0) | "BUILD YOUR DJ LIBRARY. FAST." |
| **Section Headers** | 60-80px, 900 weight, uppercase, tracking tight | "MUSIC FROM AROUND THE WORLD" |
| **H1** | 48-56px, 700-900 weight, uppercase | Major section titles |
| **H2** | 32-40px, 700 weight, uppercase | Subsection headers |
| **H3** | 24-28px, 600-700 weight | Card titles, feature headers |
| **Body Large** | 18-20px, 400 weight, line-height 1.6 | Intro paragraphs |
| **Body Regular** | 14-16px, 400 weight, line-height 1.5 | Standard content |
| **Body Small** | 12-13px, 400 weight | Fine print, captions |
| **Button Text** | 14-16px, 600-700 weight, uppercase | CTAs |
| **Table Text** | 14px, 400 weight | Comparison tables |
| **Navigation** | 14px, 500-600 weight, uppercase | Menu items |

**Font Features:**
- Heavy use of uppercase for emphasis
- Condensed letter spacing on large display text
- Mixed case for body content and descriptions
- Bold weights for all interactive elements

## 4. Spacing & Layout Grid

**Container System:**
- Max width: 1400-1600px
- Side padding: 24px mobile, 40px tablet, 60-80px desktop
- Consistent gutter system

**Vertical Rhythm:**
- Section spacing: 80-120px between major sections
- Card spacing: 24-32px gaps in grid layouts
- Element spacing: 16px, 24px, 32px, 48px, 64px scale
- Line height: 1.2 (headings), 1.5-1.6 (body)

**Grid Layouts:**
- 3-column grid for feature cards (desktop)
- 2-column for pricing cards
- Single column stack on mobile (<768px)
- 12-column underlying grid system

**Component Spacing:**
- Form fields: 24px vertical spacing
- Button padding: 16px vertical, 32-48px horizontal
- Card padding: 32-40px
- Section padding: 60-100px vertical

## 5. Visual Effects & Treatments

**Shadows:**
- Card shadows: 0 4px 20px rgba(0,0,0,0.3)
- Elevated elements: 0 8px 32px rgba(0,0,0,0.4)
- Subtle hover: 0 6px 24px rgba(0,0,0,0.35)

**Border Radius:**
- Buttons: 4-6px (subtle rounding)
- Cards: 8-12px
- Form inputs: 4px
- Image containers: 8-12px

**Borders:**
- Subtle dividers: 1px solid rgba(255,255,255,0.1)
- Table borders: 1px solid #333333
- Input borders: 1px solid #3D3D3D, focus: 2px solid #FF3B3B

**Gradients:**
- Image overlays: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)
- Background textures: Subtle noise/grain overlay at 2-5% opacity
- Hero sections: Dark vignette effects

**Transitions:**
- Button hover: 0.2s ease-in-out
- Card hover: 0.3s ease transform and shadow
- Color transitions: 0.2s ease
- Scale effects: transform: scale(1.02-1.05) on hover

**Hover States:**
- Buttons: Darker red (#D32F2F), slight scale increase
- Cards: Lift effect (translateY(-4px)) with enhanced shadow
- Links: Color change to red, underline appearance
- Images: Subtle zoom or brightness increase

**Special Effects:**
- Background images with parallax-like positioning
- Trophy emoji/icons for comparison wins (🏆)
- Red X and checkmark icons for feature comparisons
- Diagonal arrow accent (↗) for emphasis and links
- Subtle texture/grain on dark backgrounds

## 6. Component Styles

### Navigation Header
- Fixed/sticky header, black background
- Logo: Red circular icon + "DJCITY" text (white/gray)
- Horizontal navigation with dropdowns
- Search bar with icon (magnifying glass)
- Country selector, Login button
- Height: ~60-70px
- Dropdown menus: Dark background, red hover states

### Hero Section
- Full-width background image with dark overlay
- Centered or left-aligned content
- Large display typography
- Side-by-side layout: Content left, signup form right (desktop)
- CTA buttons: Red primary, high contrast

### Signup Form (Card)
- Dark card (rgba overlay on image)
- White text on dark background
- Input fields: Dark gray background (#2A2A2A), white text
- Subtle borders on inputs
- Checkbox with custom styling
- Red "Continue" button
- Validation states visible

### Feature Cards
- 3-column grid layout
- Image at top (16:9 or 4:3 ratio)
- White text overlay on images or separate text area
- Hover: Lift and shadow enhancement
- Clickable, link to detail pages
- Diagonal arrow indicator (↗) on some cards

### Music List Table
- Dark background with alternating row colors
- Columns: Rank, Record name, BPM, Genre, Download, More actions
- Play button on row hover/click
- Row hover: Subtle highlight (#1E1E1E → #252525)
- Circular play buttons with red accent
- Ellipsis menu for actions
- Compact spacing for dense information

### Pricing Cards
- 2-column layout
- Dark gray background (#2A2A2A)
- Large price display (white text)
- Yellow "BEST VALUE" banner on recommended option
- "SAVE $XX" callout in red
- Outlined structure, not boxed shadows
- Clear tier differentiation

### Comparison Table
- Full-width responsive table
- Sticky header row
- Dark row backgrounds with borders
- Trophy emoji (🏆) for wins
- Red X (🚫) for unavailable features
- Zebra striping for readability
- Green checkmarks implied for positive features

### Integration Logos Section
- Centered logo display
- Grayscale or white logos on dark background
- Even spacing between logos
- 5-6 logos in a row (desktop)
- Stack on mobile

### Testimonial Cards
- Horizontal carousel/slider
- Logo at top (artist/company logo)
- Quote text in white
- Dark card backgrounds
- Subtle borders or shadows
- Company/artist attribution

### FAQ Accordion
- Dark background
- White text questions
- Red arrow indicators (→) 
- Expand/collapse animation
- Divider lines between items
- Large, readable text

### CTA Sections
- Full-width sections with background images
- Large headline typography
- Centered content
- Single prominent red button
- Dark overlay on images for text contrast

### Footer
- Dark black background
- Multi-column layout (4-5 columns)
- White/gray text links
- Social media icons
- Logo repeat
- Newsletter signup
- Legal links (small text)

### Buttons
**Primary (Red):**
- Background: #FF3B3B
- Text: White, bold, uppercase
- Padding: 16px 40px
- Border-radius: 4-6px
- Hover: Darker red, scale(1.02)

**Secondary (Outlined):**
- Border: 2px solid white
- Background: Transparent
- Text: White
- Hover: White background, black text

**Ghost/Text:**
- No background, no border
- Red or white text
- Hover: Underline or color change

### Form Inputs
- Dark background (#2A2A2A, #333333)
- White text
- 1px border: #4A4A4A
- Focus: Red border (#FF3B3B)
- Padding: 12-16px
- Border-radius: 4px
- Placeholder: Gray text (#999999)

### Icons
- Minimal line icons or solid Font Awesome style
- White or red coloring
- 16-24px standard size
- Hover states: Color shift or scale

## 7. Site Sections (In Order)

1. **Fixed Navigation Header**
   - Logo (left)
   - Main navigation menu (Music, More, News)
   - Search bar
   - Language/region selector
   - Login button

2. **Hero/Signup Section**
   - Full-width background image (DJ hands on turntables)
   - Large headline: "BUILD YOUR DJ LIBRARY. FAST. JOIN NOW"
   - Tagline: "DJCITY. WHERE DJS DOWNLOAD MUSIC."
   - Signup form (right side or overlay):
     * First Name input
     * Last Name input
     * Email input
     * Password input
     * Marketing consent checkbox
     * Continue button

3. **Feature Cards Grid Section**
   - Three cards horizontal:
     * Bulk Downloads (laptop image)
     * DJ Playlists (phone/app image)
     * Exclusive Remixes (DJ performing image)
   - Each with image, title, description, link

4. **Most Popular Tracks Section**
   - Section header with link
   - Sortable table:
     * Rank column (1-5)
     * Record name and artist
     * BPM
     * Genre tag
     * Download icon
     * More actions menu
   - Play buttons on hover
   - Dark table design

5. **Browse Catalog CTA Card**
   - Image of DJ (Fabio Alves)
   - Large "Browse Catalog" button overlay

6. **Additional Feature Cards**
   - DJ Edits + Tools card (interface screenshot)
   - Mobile App showcase (phone mockup with app interface)

7. **Pricing Section**
   - "PRICING" header
   - Two pricing tiers:
     * 1 Month Access: $34.99/mo
     * 6 Months Access: $29.17/mo (BEST VALUE, SAVE $35)
   - Clear tier comparison
   - Billed amount details

8. **Comparison Table Section**
   - "DJ DOWNLOAD RECORD POOL COMPARISON" header
   - Subtitle: "DJCITY IS THE BEST RECORD POOL FOR BEGINNER & EXPERT DJS"
   - Full comparison table:
     * DJcity vs BPM Supreme vs ZIP DJ
     * Rows: Cost, Catalog, Playlists, Remixes, Downloads, Mobile App, Genres, Recommendations
     * Trophy icons for DJcity wins
     * X marks for competitor limitations

9. **Integrations Section**
   - "DJCITY INTEGRATES EFFORTLESSLY WITH ALL DJ SOFTWARE" header
   - Subtitle: "Works with Serato, Rekordbox, Traktor, VirtualDJ, and DJAY"
   - Logo row: 5 DJ software logos displayed

10. **Global Music Section**
    - Large globe icon/graphic
    - "MUSIC FROM AROUND THE WORLD" headline with red arrow
    - Description paragraph
    - Regional tags: US, UK, Germany, Japan, Latin America, South Asia
    - Links to regional music

11. **Genres Section**
    - "HUNDREDS OF GENRES" headline with arrow
    - Description text
    - Genre tag cloud/grid (partial view): Acapella, Hip Hop, Dance, Latin, Edit, UK House, African, DJcity Exclusive, Club, Dancehall, Transition, Urbano, etc.
    - "Featuring 250+ genres" callout
    - DJ equipment image

12. **Testimonials Section**
    - Horizontal card carousel
    - Testimonial cards from:
      * Digital DJ Tips
      * Tiësto
      * Diplo
      * DJ Snake
      * Serato
    - Each with logo and quote

13. **FAQ Section**
    - "FAQ" large title
    - Subtitle: "Find out why DJcity is the best record pool for both beginner and expert DJs!"
    - Accordion questions:
      * What is DJcity?
      * Does DJcity work with Serato and other DJ software?
      * How much does DJcity cost?
      * Why is DJcity better than other record pools?

14. **Final CTA Section**
    - Background: Crowd image (concert/festival atmosphere)
    - "GET STARTED TODAY" headline
    - "Your Ultimate DJ Record Pool for Premium DJ Music" tagline
    - Floating navigation menu (Price, Compare, Integrations, Reviews, FAQ)
    - "DOWNLOAD NOW" red button

15. **Footer**
    - DJcity logo
    - Four column layout:
      * SITE: Home, Terms of Use, Privacy Policy, Cookie Policy, Affiliate Program, Submit Music
      * COMPANY: About Us, Contact Us, FAQ
      * LANGUAGES: English (US), English (UK), Español, 日本語, Deutsch
      * CONNECT: Social media icons (Facebook, Instagram, Twitter)
    - Newsletter signup section
    - "Get the latest DJ news, music charts, and updates in your mailbox"
</high_level_design>

<theme>
dark
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/header-navigation.tsx</file_path>
    <design_instructions>
Clone the fixed navigation header with dark theme (#000000 background), featuring the DJcity logo on the left, center navigation menu with "Music" and "More" dropdown buttons plus "News" link, and right-aligned utilities including search box with magnifying glass icon, country selector dropdown showing "US" flag, and "Login" button with white text on transparent background. Header should be sticky on scroll with horizontal padding and include mobile hamburger menu for responsive behavior.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/2n4FQBrpdq-1.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-section.tsx</file_path>
    <design_instructions>
Clone the hero section with full-width dark background featuring DJ turntable hands image overlay, left-aligned content area with DJcity brand icon, bold white headline "DJCITY. WHERE DJS DOWNLOAD MUSIC." followed by larger headline "BUILD YOUR DJ LIBRARY. FAST. JOIN NOW", and right-side signup form card with dark semi-transparent background containing "Create a FREE account to get started" text, input fields for First Name, Last Name, Email Address, Password, marketing consent checkbox, and gray "Continue" button. Section should be responsive with form stacking below content on mobile.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/background_hands_flipped1_2x-2.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/svgs/2Yh5ukSQjQ-1.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/features-cards.tsx</file_path>
    <design_instructions>
Clone the three-column feature cards section with dark backgrounds, each card displaying a feature image (laptop downloads, mobile playlist, DJ remixing) with overlay gradient, white headline text ("BULK DOWNLOADS", "DJ PLAYLISTS", "EXCLUSIVE REMIXES"), descriptive subtitle in gray, and red diagonal arrow icon in top-right corner. Cards should have hover effects, rounded corners, and responsive grid layout that stacks on mobile devices.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/Card1_2x-3.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/Card2_2x-4.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/Card3_2x-5.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/most-popular-tracks.tsx</file_path>
    <design_instructions>
Clone the "Most Popular" tracks listing section with dark background, featuring section header with red accent line and "Most Popular" title, column headers for Records/BPM/Genre, and 5 numbered track rows displaying track number badge, song title with artist name links, BPM value, genre tag with colored pill styling, download button with circle-down icon, and ellipsis menu button. Include proper spacing, hover states, and responsive table layout that adapts for mobile viewing.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/catalog-cta.tsx</file_path>
    <design_instructions>
Clone the full-width call-to-action section featuring DJ performer silhouette image with dramatic lighting, centered red "BROWSE CATALOG" button with hover effects, overlaid on dark background with gradient overlay. Button should have rounded corners, bold text, and scale animation on hover.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/fabio_alves_2x-6.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/dj-edits-tools.tsx</file_path>
    <design_instructions>
Clone the two-column section with left side showing mobile phone mockup displaying DJ edit versions interface with Clean/Dirty/Acapella options, and right side featuring white headline "DJ EDITS + TOOLS" with red arrow icon, followed by gray descriptive text about custom DJ edits including intro versions, clean edits, and transition tools. Section should have dark background with proper spacing and responsive layout.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/Card4_2x-7.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/mobile-apps-showcase.tsx</file_path>
    <design_instructions>
Clone the mobile app showcase section with dark background featuring iPhone mockup on left showing DJcity app interface with genre tabs (HIP HOP, DANCE, LATIN, POP, R&B) and track listing with play controls, paired with right-aligned white headline text "MUSIC AT YOUR FINGERTIPS" and subheading "OPTIMIZED DIGITAL APPS" in bold typography. Include responsive layout that stacks vertically on mobile.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/marketing_phone_2x-8.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/pricing-plans.tsx</file_path>
    <design_instructions>
Clone the pricing section with centered "PRICING" headline, two pricing cards in horizontal layout - left card showing "1 Month Access" at $34.99/mo with gray background, right card with yellow "BEST VALUE" banner showing "6 Months Access" at $29.17/mo with red "SAVE $35!" badge, both cards featuring large price typography, billing details in smaller text, and proper spacing. Cards should have rounded corners and hover effects.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/comparison-header.tsx</file_path>
    <design_instructions>
Clone the comparison section header with centered layout on dark background, featuring bold white headline "DJ DOWNLOAD RECORD POOL COMPARISON" with red diagonal arrow icon, followed by subtitle "DJCITY IS THE BEST RECORD POOL FOR BEGINNER & EXPERT DJS" in smaller gray text. Include proper vertical spacing and responsive text sizing.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/comparison-table.tsx</file_path>
    <design_instructions>
Clone the comprehensive comparison table with dark theme, featuring four columns (Comparison, DJcity, vs. BPM Supreme, vs. ZIP DJ) and ten rows comparing features like Cost, Global Music Catalog, DJ Curated Playlists, Exclusive Remixes, Bulk Downloads, Mobile App, Genres, and Song Recommendations. Use trophy emoji (🏆) for DJcity advantages, X emoji (🚫) for competitor limitations, white text on dark gray rows with subtle borders, and responsive horizontal scrolling for mobile devices.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/integrations-header.tsx</file_path>
    <design_instructions>
Clone the integrations section header with centered white headline "DJcity integrates effortlessly with all DJ software" with red arrow icon, followed by gray subtitle text "Works with Serato, Rekordbox, Traktor, VirtualDJ, and DJAY" on dark background with proper spacing.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/software-logos.tsx</file_path>
    <design_instructions>
Clone the horizontal logo showcase section displaying five DJ software brand logos (Serato, Rekordbox, Traktor, VirtualDJ, DJAY) in white/grayscale styling, evenly spaced in a row with proper padding, on dark background. Logos should maintain aspect ratios and include responsive grid layout that adjusts for mobile viewing.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/serato_logo-9.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/rekordbox_logo-10.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/traktor_logo-11.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/virtualdj_logo-12.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/djay_logo-13.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/global-music.tsx</file_path>
    <design_instructions>
Clone the global music section with dark textured background, featuring large white headline "MUSIC FROM AROUND THE WORLD" with globe icon and red diagonal arrow, followed by descriptive paragraph with inline red pill-style regional links (US, UK, Germany, Japan, Latin America, South Asia) highlighting music sources, ending with text about worldwide catalog access. Include proper typography hierarchy and responsive text sizing.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/svgs/globe-2.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/genres-showcase.tsx</file_path>
    <design_instructions>
Clone the genres section with split layout - left side featuring bold white headline "HUNDREDS OF GENRES" with red arrow icon and gray subtitle about spinning any style, right side displaying genre filter interface with search bar, A-Z dropdown, Filter by dropdown, and genre pill buttons (Acapella, Hip Hop, Dance, Latin, Edit, UK House, African, DJcity Exclusive, Club, Dancehall, Transition, Urbano, DJ Tool) in dark theme with red accents. Include DJ equipment image and "Featuring 250+ genres" statistic card with large red number styling.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/genres_card1_2x-14.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/genres_card2_2x-15.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/testimonials.tsx</file_path>
    <design_instructions>
Clone the testimonials carousel section with dark background, featuring multiple testimonial cards displaying DJ/artist logos (Digital DJ Tips, Tiësto, Diplo, DJ Snake, Serato) with quoted testimonial text in white, arranged in horizontal scrolling layout. Cards should have semi-transparent dark backgrounds, rounded corners, proper padding, and smooth carousel animation with navigation controls.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/testimonial_1-16.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/testimonial_2-17.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/testimonial_3-18.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/tiesto_logo-19.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/diplo_logo-20.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/djsnake_logo-21.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/faq-section.tsx</file_path>
    <design_instructions>
Clone the FAQ section with dark background, featuring large white "FAQ" headline on left side, and right-side accordion list with four expandable questions ("What is DJcity?", "Does DJcity work with Serato and other DJ software?", "How much does DJcity cost?", "Why is DJcity better than other record pools?") with white text, chevron right icons, subtle divider lines, and smooth expand/collapse animations. Include descriptive subtitle "Find out why DJcity is the best record pool for both beginner and expert DJs!" below headline.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/final-cta.tsx</file_path>
    <design_instructions>
Clone the final call-to-action section with full-width concert crowd background image in dark tones, centered content featuring large white bold headline "GET STARTED TODAY" in uppercase, subtitle "Your Ultimate DJ Record Pool for Premium DJ Music" in smaller white text, and prominent red "DOWNLOAD NOW" button with rounded corners and hover effects. Include subtle gradient overlay on background image for text readability.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/crowd_2x-25.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the footer section with black background, featuring top area with DJcity logo, newsletter signup text "Get the latest DJ news, music charts, and updates in your mailbox" with red "NEWSLETTER SIGNUP" button, and bottom area with four-column layout for SITE (Home, Terms of Use, Privacy Policy, Cookie Policy, Affiliate Program, Submit Music), COMPANY (About Us, Contact Us, FAQ), LANGUAGES (English US, English UK, Español, 日本語, Deutsch), and CONNECT (Facebook, Instagram, Twitter icons) sections. Include proper spacing, link hover states, and responsive stacking for mobile.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
