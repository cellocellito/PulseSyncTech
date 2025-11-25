# Pulse Sync - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from futuristic tech platforms with emphasis on high-tech minimalism, neon aesthetics, and sophisticated UI patterns.

## Core Design Principles
- Ultra-clean, high-tech, sophisticated aesthetic
- Dark-first design with strategic neon accents
- Smooth, fluid micro-interactions throughout
- Minimalist approach with maximum visual impact
- Focus on conversion and futuristic visual impact

## Color Palette

**Dark Mode (Primary)**
- Background Primary: 10 8% 8% (deep charcoal)
- Background Secondary: 220 10% 12% (slightly lighter dark)
- Background Accent: 220 15% 18% (elevated surfaces)

**Neon Accents**
- Electric Blue: 190 100% 50% (#00F0FF)
- Mint Green: 158 100% 50% (#00FF9D)
- Futuristic Purple: 280 100% 56% (#B026FF)
- Use sparingly for CTAs, highlights, and glow effects

**Text Colors**
- Primary Text: 0 0% 98% (near white)
- Secondary Text: 0 0% 70% (muted gray)
- Accent Text: Use neon colors strategically

## Typography
**Font Families**
- Primary: 'Inter' or 'Space Grotesk' (geometric, modern sans-serif)
- Accent/Headings: Consider 'Orbitron' or 'Rajdhani' for futuristic touch

**Hierarchy**
- Hero Headline: 3.5rem - 4.5rem, bold weight, tight letter-spacing
- Section Headlines: 2.5rem - 3rem, medium-bold weight
- Subheadlines: 1.25rem - 1.5rem, regular weight
- Body Text: 1rem - 1.125rem, light-regular weight
- Geometric, clean letterforms with subtle letter-spacing adjustments

## Layout System
**Spacing Scale**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 (e.g., p-8, gap-12, py-20)

**Container Strategy**
- Full-width sections with inner max-w-7xl containers
- Hero: Full viewport with centered content
- Content sections: Generous padding (py-20 to py-32)
- Card grids: gap-8 for breathing room

## Component Library

### Hero Section
- Full viewport height with gradient overlay
- Powerful headline: "Automatize o futuro da sua empresa."
- Subheadline: "A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes."
- Main CTA: "Inicie sua transformação" with glow effect on hover
- Animated floating elements or particles in background
- Smooth fade-in entrance animations

### Benefits Section
- 4-column grid (2x2 on mobile/tablet)
- Animated futuristic icons with glow effects
- Key benefits: Velocidade, Eficiência, Integração, Precisão
- Cards with subtle border glow, hover lift effect
- Staggered reveal animations on scroll

### Interactive Workflow Visualization
- Visual representation of n8n automation flow
- Connected data nodes as digital network
- Animated connections/data flow between nodes
- Hover interactions revealing node details
- Pulsing animations on connection points
- Use electric blue and mint green for connections

### Testimonials & Differentiators Section
- "Por que escolher a Pulse Sync?" heading
- Glowing minimalistic cards (2-3 column layout)
- Testimonials with client names/companies
- Differentiator cards highlighting unique value props
- Subtle gradient borders with neon glow
- Hover state: enhanced glow intensity

### Final CTA Section
- Bold closing statement: "Conecte-se ao futuro agora."
- Prominent button: "Agende uma demonstração"
- High-contrast neon button with animated glow
- Clean, focused layout driving conversion

### Footer
- Minimalist design with subtle divider
- Pulse Sync logo (left aligned)
- Social media links with hover glow effects
- Contact information and quick links
- Muted colors maintaining dark theme

## Animations & Effects

**Micro-Animations**
- Button hover: glow expansion, slight scale (1.02-1.05)
- Card hover: lift effect (translateY -4px), border glow intensifies
- Icon animations: subtle pulse or rotation on hover
- CTA buttons: animated gradient or shimmer effect

**Scroll Animations**
- Fade-in with slight translateY (20-30px) for sections
- Staggered delays for grid items (100ms intervals)
- Parallax effect on background elements
- Progress-based animations for workflow visualization

**Glow Effects**
- Box-shadow with neon colors (blur 20-40px)
- Hover state: increase blur and opacity
- Use backdrop-blur for glass-morphism on overlays
- Animated gradient borders on premium cards

**Transitions**
- Default: 300ms ease-in-out
- Hover states: 200ms for responsiveness
- Page sections: 600ms for smooth reveals
- Use cubic-bezier for custom easing on special effects

## Images Strategy
**Hero Background**
- Abstract digital/tech background with particle effects or flowing data streams
- Alternatively: geometric wireframe patterns or futuristic grid overlay
- Dark base with subtle neon highlights

**Supporting Visuals**
- n8n workflow diagram/mockup for the interactive section
- Client logos (if available) rendered in monochrome with neon accents
- Abstract tech patterns for section dividers

## Accessibility & Responsiveness
- Maintain dark theme consistency throughout
- Ensure neon text has sufficient contrast (use on dark backgrounds only)
- Reduce animation intensity via prefers-reduced-motion
- Mobile: Stack columns, maintain hierarchy, preserve glow effects
- Touch-friendly button sizes (min 44x44px)

## Brand Voice Integration
- Technological, inspiring, visionary tone
- Portuguese language throughout
- Professional yet forward-thinking copy
- Emphasis on transformation and future-readiness