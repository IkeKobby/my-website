# Website Modernization Plan & Audit

## 1. Codebase Understanding

### Framework & Tech Stack
- **Type**: Static HTML/CSS/JavaScript website (no build tools)
- **CSS Framework**: Bootstrap 5.3.0 (CDN)
- **JavaScript Libraries**:
  - jQuery 1.11.0 (very old, from 2014)
  - Fancybox (image gallery)
  - Isotope (portfolio filtering)
  - WOW.js (scroll animations)
  - Particles.js (hero background)

### Current Site Structure
1. **Hero Section** - Landing with particles background
2. **About** - Personal introduction and features
3. **Skills** - Technical skills with progress bars
4. **Updates** - Latest research updates and publications
5. **Portfolio/Projects** - Filterable project gallery
6. **Experience** - Timeline of professional experience
7. **Testimonials** - Recommendations from colleagues
8. **Contact** - Contact form and information

### Issues Identified
- ❌ No dedicated **Research** section (critical for PhD focus)
- ⚠️ Content focused on generic "Data Scientist" rather than "Agentic AI / SLM-First Systems"
- ⚠️ Typo: `asserts/` folder should be `assets/`
- ⚠️ Minimal SEO metadata (no Open Graph, Twitter Cards, structured data)
- ⚠️ Accessibility gaps (missing ARIA labels, alt text for some images)
- ⚠️ Very old jQuery version (1.11.0 from 2014)
- ⚠️ Mixed dependency management (CDN vs local files)
- ⚠️ No dark mode support for research diagram
- ⚠️ Research diagram not integrated into site

---

## 2. Proposed Site Map / Information Architecture

### Updated Navigation Structure
1. **Home** (Hero Section)
2. **About** - Updated with Agentic AI focus
3. **Research** ⭐ **NEW** - Dissertation work, research plan diagram, projects
4. **Projects** - Updated portfolio with research-focused projects
5. **Publications** - Research papers and publications
6. **Experience** - Professional timeline
7. **Contact** - Contact form

**Note**: Consider merging "Skills" into "About" and "Updates" into "Research" for cleaner navigation.

---

## 3. Prioritized Improvements List

### Quick Wins (High Impact, Low Effort)
1. ✅ **Add Research Section** with diagram integration
2. ✅ **Update SEO metadata** (description, Open Graph, Twitter Cards)
3. ✅ **Fix folder typo** (`asserts` → `assets`)
4. ✅ **Update hero/About content** to reflect Agentic AI research focus
5. ✅ **Add alt text and ARIA labels** for accessibility
6. ✅ **Add structured data** (JSON-LD for Person, Research Project)

### Medium Priority (Moderate Effort)
7. 🔄 **Modernize typography** (better font stack, improved readability)
8. 🔄 **Enhance responsive design** (improve mobile experience)
9. 🔄 **Add research diagram responsive styling** (mobile-friendly sizing)
10. 🔄 **Update project descriptions** with research focus
11. 🔄 **Improve color contrast** for accessibility

### Future Considerations (Lower Priority)
12. ⏳ **Update jQuery** to modern vanilla JS or modern library
13. ⏳ **Add dark mode support** for research diagram
14. ⏳ **Consolidate dependencies** (consider removing unused libraries)
15. ⏳ **Add build tooling** (if future updates require it)

---

## 4. Research Content Integration Plan

### New Research Section Structure

```
Research Section
├── Hero/Overview
│   ├── Title: "SLM-First Agentic Systems Research"
│   ├── Brief description of dissertation focus
│   └── Key research themes
├── Research Plan Diagram ⭐
│   ├── Prominent display of research_plan_overview.svg
│   ├── Responsive sizing (desktop/mobile)
│   ├── Alt text and caption
│   └── Explanation text below
├── Research Thrusts
│   ├── Project 1: Feature Engineering
│   ├── Project 2: Case-Based Reasoning
│   └── Project 3: Multi-Agent AutoML
├── Evaluation Framework
│   ├── Metrics: Accuracy, Latency, Cost, Energy, Privacy/Safety
│   └── Success Criteria
└── Publications (link to separate section)
```

### Key Content Updates
- **Hero section**: Update from "Data Scientist" to "AI Researcher | PhD Candidate in SLM-First Agentic Systems"
- **About section**: Refocus on Agentic AI, SLMs, controller-mediated systems
- **Projects section**: Highlight research projects with impact bullets
- **Publications**: Ensure current research papers are highlighted

---

## 5. Technical Improvements

### SEO Enhancements
- Add comprehensive meta tags (description, keywords, author)
- Add Open Graph tags (og:title, og:description, og:image, og:type)
- Add Twitter Card metadata
- Add JSON-LD structured data (Person, Research Project, Organization)

### Accessibility Improvements
- Add ARIA labels to navigation, buttons, forms
- Ensure all images have descriptive alt text
- Improve color contrast ratios (WCAG AA compliance)
- Add skip navigation link
- Ensure keyboard navigation works throughout

### Performance Optimizations
- Optimize image loading (lazy loading where appropriate)
- Consider modern font loading strategies
- Ensure research diagram SVG is optimized

### Code Quality
- Fix folder naming (`asserts` → `assets`)
- Add semantic HTML5 elements where missing
- Ensure consistent indentation and formatting

---

## 6. Implementation Approach

### Phase 1: Content & Structure (Current Focus)
1. Create new Research section
2. Integrate research diagram
3. Update About/Hero content
4. Fix folder naming

### Phase 2: SEO & Accessibility
1. Add comprehensive metadata
2. Add structured data
3. Improve accessibility attributes

### Phase 3: Visual Polish
1. Refine typography
2. Improve responsive design
3. Enhance diagram display
4. Update project cards

---

## 7. Deployment Notes

- **No build process**: Changes are direct HTML/CSS/JS edits
- **Deployment**: Can be deployed to any static hosting (GitHub Pages, Netlify, Vercel)
- **No breaking changes**: All improvements maintain backward compatibility
- **Testing**: Test on mobile, tablet, desktop browsers

---

## Next Steps

1. ✅ Review and approve this plan
2. ✅ Begin implementation starting with Research section
3. ✅ Update content throughout site
4. ✅ Add SEO and accessibility improvements
5. ✅ Test and deploy
