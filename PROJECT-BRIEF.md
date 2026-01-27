# Epoxy Flooring Research Project
**Treasure Coast Epoxy - Supplier & Material Analysis**

**Date:** 2026-01-27
**Location:** Stuart, FL
**Stakeholder:** Chris + Josue/Sway (KMJK)
**Goal:** Comprehensive supplier and material research for epoxy flooring business

---

## Project Scope

### Primary Objectives
1. **Flake/Quartz Materials:** All styles, mixes, sizes, and applications
2. **Supplier Discovery:** All suppliers that ship to Stuart, FL
3. **Pricing:** Price per 50lb bag, including shipping
4. **Brand Analysis:** Pros, cons, reputation, quality tiers
5. **Situational Guidance:** When to use which material in which scenario

### Constraints
- Geographic focus: Stuart, FL (delivery zone verification required)
- Unit standard: 50lb bags (convert if needed)
- Currency: USD
- Timeframe: ASAP (business decision pending)

### Success Criteria
- Complete supplier landscape (no major gaps)
- Accurate, verified pricing (not list prices)
- Actionable material recommendations (not just data dump)

---

## Research Division (7-Agent Swarm with QA Loop)

**Quality Assurance Strategy:**
- Each research agent has a paired QA Agent (Teacher/Corrector)
- QA Agent reviews output, creates fix list, sends back
- Research agent fixes, re-submits, loop until QA passes
- Final synthesis agent performs master QA check

**Deliverable Target:** 10,000+ words per major report (substantial depth)

---

### Agent 1: Material Specialist (RES-DEEP variant)
**Focus:** Quartz/flake materials science and applications

**Deliverables:**
- Complete flake type taxonomy (solid, metallic, blends, sizes)
- Application matrix (garage, commercial, residential, outdoor)
- Material performance data (durability, UV resistance, chemical resistance)
- Mixing ratios and coverage rates per 50lb
- **Target:** 10,000+ words, substantial depth

**Output:** `materials/01-material-taxonomy.md`

### Agent 1-QA: Material QA Specialist (ANA-CODE variant)
**Focus:** Quality assurance review of material research

**Methodology:**
1. Read Agent 1 output thoroughly
2. Identify gaps, insufficient depth, factual errors
3. Create detailed fix list with line references
4. Send back to Agent 1 for corrections
5. Re-review after fixes
6. Loop until quality gate passes

**Quality Criteria:**
- Minimum 10,000 words
- 15+ material types documented
- Each material: performance specs, pros/cons, best use cases
- Coverage rates with multiple thicknesses
- No factual errors or contradictions
- Sources cited with URLs

**Output:** `materials/01-material-qa-report.md`

---

### Agent 2: Supplier Discovery (RES-DEEP)
**Focus:** Finding all flake suppliers that ship to Stuart, FL

**Deliverables:**
- Comprehensive supplier list (Tier 1: Major brands, Tier 2: Mid-market, Tier 3: Budget)
- Shipping verification to zip code 34994/34997 (Stuart, FL)
- Minimum order quantities
- Lead times (standard vs expedited)
- Geographic distribution (regional vs national)
- **Target:** 10,000+ words, 20+ suppliers

**Output:** `suppliers/02-supplier-list.md`

### Agent 2-QA: Supplier QA Specialist (ANA-CODE variant)
**Focus:** Quality assurance review of supplier research

**Methodology:**
1. Read Agent 2 output thoroughly
2. Verify each supplier ships to Stuart, FL (with evidence)
3. Check for missing suppliers (major brands not listed)
4. Validate contact info, MOQs, lead times
5. Create fix list, send back for corrections
6. Re-review, loop until quality gate passes

**Quality Criteria:**
- Minimum 10,000 words
- 20+ suppliers across all tiers
- Every supplier verified for Stuart, FL shipping
- Complete contact info for each
- No duplicate entries
- Sources cited

**Output:** `suppliers/02-supplier-qa-report.md`

---

### Agent 3: Pricing Intelligence (ANA-DATA variant)
**Focus:** Price comparison and cost analysis

**Deliverables:**
- Price matrix: Supplier | Material Type | Price/50lb | Shipping Cost | Total
- Volume discount structures (if any)
- Seasonal pricing trends
- Hidden costs (hazmat fees, bulk pallet requirements)
- Total cost of ownership analysis
- **Target:** 10,000+ words, complete cost breakdown

**Output:** `pricing/03-price-matrix.md`

### Agent 3-QA: Pricing QA Specialist (ANA-CODE variant)
**Focus:** Quality assurance review of pricing data

**Methodology:**
1. Verify all prices against source websites
2. Check shipping cost calculations
3. Validate total landed cost math
4. Identify missing pricing data
5. Create fix list, send back for corrections
6. Re-review, loop until quality gate passes

**Quality Criteria:**
- Minimum 10,000 words
- All suppliers from Agent 2 have pricing
- Total landed cost calculated for each
- Hidden costs identified and quantified
- No mathematical errors
- Sources with URLs for each price point

**Output:** `pricing/03-pricing-qa-report.md`

---

### Agent 4: Brand Analyst (RES-MARKET variant)
**Focus:** Brand reputation, pros/cons, and quality assessment

**Deliverables:**
- Brand profiles (major suppliers only)
- Customer sentiment analysis (reviews, forums, case studies)
- Quality tiers ranking (Premium | Mid-Range | Budget)
- Red flags (consistency issues, shipping problems, CS issues)
- Warranty and support comparison
- **Target:** 10,000+ words, deep analysis

**Output:** `analysis/04-brand-analysis.md`

### Agent 4-QA: Brand QA Specialist (ANA-CODE variant)
**Focus:** Quality assurance review of brand analysis

**Methodology:**
1. Verify each brand profile has sufficient depth
2. Check customer sentiment evidence (quotes, links)
3. Validate quality tier rankings
4. Ensure red flags are substantiated
5. Create fix list, send back for corrections
6. Re-review, loop until quality gate passes

**Quality Criteria:**
- Minimum 10,000 words
- All major suppliers profiled
- Customer sentiment with source links
- Quality tiers clearly justified
- Red flags documented with evidence
- No speculation without evidence

**Output:** `analysis/04-brand-qa-report.md`

---

### Agent 5: Synthesis Specialist (BIZ-STRAT variant)
**Focus:** Combining all research into actionable business recommendations

**Deliverables:**
- Master synthesis report (combines all 4 inputs)
- Situational decision matrix:
  - Budget jobs → Which materials/suppliers?
  - High-end residential → Which materials/suppliers?
  - Commercial/Industrial → Which materials/suppliers?
  - Outdoor/Pool decks → Which materials/suppliers?
- Recommended supplier partnerships (top 3 with justification)
- Negotiation playbook (what to ask for, where to push)
- Risk mitigation (backup suppliers)
- **Target:** 15,000+ words (comprehensive business guide)

**Output:** `synthesis/05-master-report.md`

### Agent 5-QA: Master QA Specialist (ANA-CODE variant)
**Focus:** Final quality assurance on master synthesis

**Methodology:**
1. Read all 5 primary outputs + 4 QA reports
2. Verify synthesis incorporates all findings
3. Check recommendation consistency with data
4. Ensure decision matrices are actionable
5. Validate logic flow from data → conclusions → recommendations
6. Create fix list, send back to Agent 5
7. Re-review, loop until quality gate passes

**Quality Criteria:**
- Minimum 15,000 words
- All 4 research inputs properly integrated
- Every recommendation backed by data
- Decision matrices are actionable and specific
- No contradictions within the report
- Executive summary captures key insights
- Implementation roadmap with clear steps

**Output:** `synthesis/05-master-qa-report.md`

---

## Data Templates

### JSON Output Schema (for Interactive Web App)

```json
{
  "materials": [
    {
      "id": "solid-blue-1",
      "name": "Solid Blue Flake",
      "category": "solid",
      "size": "1/4\"",
      "bestFor": ["garage", "commercial"],
      "avoid": ["outdoor"],
      "performance": {
        "durability": 8,
        "uvResistance": 7,
        "chemicalResistance": 9,
        "slipResistance": 8
      },
      "coverage": {
        "per50lb": "100 sq ft",
        "atThickness": "1/8\""
      },
      "suppliers": [
        {"name": "Supplier A", "price": 45.00, "sku": "BLU-001"},
        {"name": "Supplier B", "price": 42.00, "sku": "BLUE-50"}
      ]
    }
  ],
  "suppliers": [
    {
      "id": "supplier-a",
      "name": "Epoxy Depot",
      "tier": "premium",
      "website": "https://example.com",
      "phone": "555-1234",
      "email": "sales@example.com",
      "shipping": {
        "to34994": true,
        "cost": 25.00,
        "leadTime": "3-5 days"
      },
      "moq": 1,
      "materials": ["solid-blue-1", "metallic-silver-2"],
      "reputation": {
        "qualityScore": 9,
        "sentiment": "positive",
        "redFlags": []
      },
      "pricing": [
        {"materialId": "solid-blue-1", "price": 45.00, "shipping": 25.00, "total": 70.00}
      ]
    }
  ],
  "recommendations": {
    "budget": {
      "materials": ["solid-blue-1"],
      "suppliers": ["supplier-b"],
      "justification": "Best value for price-sensitive projects"
    },
    "premium": {
      "materials": ["metallic-silver-2"],
      "suppliers": ["supplier-a"],
      "justification": "Highest quality for high-end residential"
    }
  }
}
```

---

## Data Templates

### Supplier Entry Template
```markdown
## [Supplier Name]

**Tier:** [Premium | Mid-Range | Budget]
**Website:** [URL]
**Phone:** [Number]
**Email:** [Email]
**Shipping to 34994/34997:** [Yes/No | Cost | Lead Time]
**MOQ:** [Minimum Order Quantity]

### Materials Offered
- [Material Type 1]: $XX.XX/50lb + $XX shipping
- [Material Type 2]: $XX.XX/50lb + $XX shipping

### Pros
- [List 3-5 strengths]

### Cons
- [List 3-5 weaknesses]

### Quality Notes
- [Observed quality, consistency issues, etc.]

### Reputation
- [Customer sentiment summary]
- [Forum/Reddit feedback]
```

### Material Entry Template
```markdown
## [Material Type/Name]

**Category:** [Solid | Metallic | Blend | Custom]
**Size Range:** [Size spec]
**Best For:** [Use cases]
**Avoid:** [Where not to use]

### Performance
- Durability: [1-10]
- UV Resistance: [1-10]
- Chemical Resistance: [1-10]
- Slip Resistance: [1-10]

### Coverage
- 50lb covers: [XX sq ft @ X mil thickness]

### Mixing Notes
- [Ratio, prep notes, etc.]

### Recommended Suppliers
- [Supplier A]: Price, Notes
- [Supplier B]: Price, Notes
```

---

## GitHub Structure

```
treasure-coast-epoxy-research/
├── PROJECT-BRIEF.md            # This file
├── README.md                   # Overview + How to Use
├── materials/
│   ├── 01-material-taxonomy.md # Agent 1 output
│   └── 02-coverage-rates.md    # Derived from Agent 1
├── suppliers/
│   ├── 02-supplier-list.md     # Agent 2 output
│   └── 03-shipping-matrix.md   # Derived from Agent 2
├── pricing/
│   └── 03-price-matrix.md      # Agent 3 output
├── analysis/
│   └── 04-brand-analysis.md    # Agent 4 output
├── synthesis/
│   └── 05-master-report.md     # Agent 5 output
└── data/
    └── suppliers.json           # Machine-readable supplier data
```

---

## Agent Spawning Sequence

**Due to 1 concurrent agent limit:**

**Phase 1: Material Research (QA Loop)**
1. Spawn Agent 1 (Material Specialist) → Wait for completion
2. Spawn Agent 1-QA (Material QA) → Review Agent 1
3. If QA fails → Send fix list to Agent 1 → Agent 1 fixes → Go to step 2
4. If QA passes → Continue to Phase 2

**Phase 2: Supplier Discovery (QA Loop)**
5. Spawn Agent 2 (Supplier Discovery) → Wait for completion
6. Spawn Agent 2-QA (Supplier QA) → Review Agent 2
7. If QA fails → Send fix list to Agent 2 → Agent 2 fixes → Go to step 6
8. If QA passes → Continue to Phase 3

**Phase 3: Pricing Intelligence (QA Loop)**
9. Spawn Agent 3 (Pricing Intelligence) → Wait for completion
10. Spawn Agent 3-QA (Pricing QA) → Review Agent 3
11. If QA fails → Send fix list to Agent 3 → Agent 3 fixes → Go to step 10
12. If QA passes → Continue to Phase 4

**Phase 4: Brand Analysis (QA Loop)**
13. Spawn Agent 4 (Brand Analyst) → Wait for completion
14. Spawn Agent 4-QA (Brand QA) → Review Agent 4
15. If QA fails → Send fix list to Agent 4 → Agent 4 fixes → Go to step 14
16. If QA passes → Continue to Phase 5

**Phase 5: Master Synthesis (QA Loop)**
17. Spawn Agent 5 (Synthesis Specialist) → Consumes all 4 primary outputs
18. Spawn Agent 5-QA (Master QA) → Review Agent 5
19. If QA fails → Send fix list to Agent 5 → Agent 5 fixes → Go to step 18
20. If QA passes → PROJECT COMPLETE

**Estimated total time:** 8-12 hours (includes QA loops)
**Total agents spawned:** 10 (5 primary + 5 QA agents)

---

## Before Launching

**Question to Chris:**
- Do you want output as markdown only, or also JSON/CSV for future analysis?
- Any specific suppliers you know of or want excluded?
- Priority focus: Price vs Quality vs Availability?

**Prepared by:** Glitch (Spawner)
**Awaiting:** Launch approval
