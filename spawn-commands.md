# Spawn Commands - Epoxy Research Swarm

**Use these to launch agents sequentially**

---

## Agent 1: Material Specialist

```
Spawn RES-DEEP with model=zai/glm-4.7, thinking=high to research epoxy flooring flake/quartz materials.

Task: Complete research on epoxy flake types, sizes, applications, and performance data.

Focus areas:
- Flake taxonomy: solid colors, metallics, blends, custom mixes, size ranges
- Application matrix: garage, commercial, residential, outdoor, pool decks
- Performance specs: durability, UV resistance, chemical resistance, slip resistance
- Coverage rates: sq ft per 50lb bag at different thicknesses
- Mixing ratios and preparation notes

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/materials/01-material-taxonomy.md
Also update: data/materials.json

Use templates from PROJECT-BRIEF.md for consistent formatting.

TIME BUDGET: 15 minutes
TARGET: 10,000+ words
```

---

## Agent 1-QA: Material QA Specialist

```
Spawn ANA-CODE with model=zai/glm-4.7, thinking=high to review Material Specialist research.

Task: Quality assurance review of material research output.

Methodology:
1. Read materials/01-material-taxonomy.md thoroughly
2. Check word count (minimum 10,000)
3. Verify 15+ material types documented
4. Check for gaps: missing performance specs, incomplete applications
5. Validate coverage rates and calculations
6. Identify factual errors or contradictions
7. Create detailed fix list with line references
8. Send fix list back to Material Specialist for corrections

Quality Gates:
- Minimum 10,000 words
- 15+ material types with full specs
- Performance data for each material
- Coverage rates with multiple thicknesses
- Sources cited with URLs
- JSON data populated correctly in data/materials.json

If QA FAILS: Send fix list, wait for corrections, re-review until passes.
If QA PASSES: Report "QA PASSED" and continue to Agent 2.

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/materials/01-material-qa-report.md

TIME BUDGET: 10 minutes
MAX REVISION LOOPS: 3
```

---

## Agent 2: Supplier Discovery

```
Spawn RES-DEEP with model=zai/glm-4.7, thinking=high to discover all epoxy flake suppliers that ship to Stuart, FL.

Task: Comprehensive supplier research with shipping verification.

Focus areas:
- All epoxy flake suppliers (Tier 1: Major brands, Tier 2: Mid-market, Tier 3: Budget)
- Shipping verification to zip codes 34994/34997 (Stuart, FL)
- Minimum order quantities
- Lead times (standard vs expedited)
- Geographic distribution (regional FL suppliers vs national)

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/suppliers/02-supplier-list.md
Also update: data/suppliers.json

Must include at least 15-20 suppliers across all tiers.

TIME BUDGET: 20 minutes
TARGET: 10,000+ words
```

---

## Agent 2-QA: Supplier QA Specialist

```
Spawn ANA-CODE with model=zai/glm-4.7, thinking=high to review Supplier Discovery research.

Task: Quality assurance review of supplier research output.

Methodology:
1. Read suppliers/02-supplier-list.md thoroughly
2. Check word count (minimum 10,000)
3. Verify 20+ suppliers listed
4. Validate each supplier ships to Stuart, FL (with evidence)
5. Check contact info accuracy (websites, phones, emails)
6. Verify MOQs and lead times
7. Identify duplicates or missing major suppliers
8. Create fix list, send back for corrections

Quality Gates:
- Minimum 10,000 words
- 20+ suppliers across all tiers
- Every supplier verified for Stuart, FL shipping
- Complete contact info for each
- No duplicate entries
- Sources cited with URLs
- JSON data populated correctly in data/suppliers.json

If QA FAILS: Send fix list, wait for corrections, re-review until passes.
If QA PASSES: Report "QA PASSED" and continue to Agent 3.

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/suppliers/02-supplier-qa-report.md

TIME BUDGET: 10 minutes
MAX REVISION LOOPS: 3
```

---

## Agent 3: Pricing Intelligence

```
Spawn ANA-DATA with model=zai/glm-4.7, thinking=high to compile pricing data for epoxy flake suppliers.

Task: Price comparison matrix with shipping costs.

Focus areas:
- Price per 50lb bag for each supplier/material
- Shipping costs to 34994/34997 (calculate total landed cost)
- Volume discount structures
- Seasonal pricing trends
- Hidden costs: hazmat fees, pallet requirements, bulk discounts
- Total cost of ownership analysis

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/pricing/03-price-matrix.md
Also update: data/pricing.json

Format as comparison table:
Supplier | Material Type | List Price | Shipping | Total Cost | MOQ | Lead Time

TIME BUDGET: 25 minutes
TARGET: 10,000+ words
```

---

## Agent 3-QA: Pricing QA Specialist

```
Spawn ANA-CODE with model=zai/glm-4.7, thinking=high to review Pricing Intelligence research.

Task: Quality assurance review of pricing data.

Methodology:
1. Read pricing/03-price-matrix.md thoroughly
2. Check word count (minimum 10,000)
3. Verify all prices against source websites
4. Check shipping cost calculations to 34994/34997
5. Validate total landed cost math (price + shipping)
6. Identify missing pricing data for any supplier
7. Check for mathematical errors
8. Create fix list, send back for corrections

Quality Gates:
- Minimum 10,000 words
- All suppliers from Agent 2 have pricing
- Total landed cost calculated for each
- Hidden costs identified and quantified
- No mathematical errors
- Sources with URLs for each price point
- JSON data populated correctly in data/pricing.json

If QA FAILS: Send fix list, wait for corrections, re-review until passes.
If QA PASSES: Report "QA PASSED" and continue to Agent 4.

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/pricing/03-pricing-qa-report.md

TIME BUDGET: 15 minutes
MAX REVISION LOOPS: 3
```

---

## Agent 4: Brand Analyst

```
Spawn RES-MARKET with model=zai/glm-4.7, thinking=high to analyze epoxy flake supplier brands.

Task: Brand reputation, pros/cons, quality assessment.

Focus areas:
- Brand profiles for major suppliers only
- Customer sentiment: reviews, forums, Reddit, case studies
- Quality tier ranking: Premium | Mid-Range | Budget
- Red flags: consistency issues, shipping problems, customer service
- Warranty and support comparison
- Longevity and company stability

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/analysis/04-brand-analysis.md
Also update: data/brands.json

For each brand: Pros, Cons, Quality Score, Reputation Summary, Risk Assessment.

TIME BUDGET: 20 minutes
TARGET: 10,000+ words
```

---

## Agent 4-QA: Brand QA Specialist

```
Spawn ANA-CODE with model=zai/glm-4.7, thinking=high to review Brand Analyst research.

Task: Quality assurance review of brand analysis.

Methodology:
1. Read analysis/04-brand-analysis.md thoroughly
2. Check word count (minimum 10,000)
3. Verify each brand profile has sufficient depth
4. Check customer sentiment evidence (quotes, links to reviews)
5. Validate quality tier rankings with justification
6. Ensure red flags are substantiated with evidence
7. Identify gaps: major brands missing, insufficient depth
8. Create fix list, send back for corrections

Quality Gates:
- Minimum 10,000 words
- All major suppliers profiled
- Customer sentiment with source links
- Quality tiers clearly justified
- Red flags documented with evidence
- No speculation without evidence
- JSON data populated correctly in data/brands.json

If QA FAILS: Send fix list, wait for corrections, re-review until passes.
If QA PASSES: Report "QA PASSED" and continue to Agent 5.

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/analysis/04-brand-qa-report.md

TIME BUDGET: 15 minutes
MAX REVISION LOOPS: 3
```

---

## Agent 5: Synthesis Specialist

```
Spawn BIZ-STRAT with model=zai/glm-4.7, thinking=high to synthesize all research into actionable business recommendations.

Task: Combine materials, suppliers, pricing, and brand analysis into master report.

Focus areas:
- Situational decision matrix:
  * Budget jobs → Which materials/suppliers?
  * High-end residential → Which materials/suppliers?
  * Commercial/Industrial → Which materials/suppliers?
  * Outdoor/Pool decks → Which materials/suppliers?

- Supplier recommendations:
  * Top 3 partnerships with detailed justification
  * Backup suppliers for each tier
  * Negotiation playbook: what to ask, where to push
  * Risk mitigation strategies

Read inputs from:
- materials/01-material-taxonomy.md
- suppliers/02-supplier-list.md
- pricing/03-price-matrix.md
- analysis/04-brand-analysis.md

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/synthesis/05-master-report.md
Also update: data/recommendations.json

This is the final deliverable that will inform business decisions.

TIME BUDGET: 30 minutes
TARGET: 15,000+ words
```

---

## Agent 5-QA: Master QA Specialist

```
Spawn ANA-CODE with model=zai/glm-4.7, thinking=high for final quality assurance on master synthesis.

Task: Final quality assurance on master synthesis report.

Methodology:
1. Read all 5 primary outputs + 4 QA reports
2. Check word count on synthesis report (minimum 15,000)
3. Verify synthesis incorporates all findings from materials/suppliers/pricing/brands
4. Check that every recommendation is backed by data
5. Ensure decision matrices are actionable and specific
6. Validate logic flow: data → conclusions → recommendations
7. Check for contradictions within the report
8. Verify executive summary captures key insights
9. Ensure implementation roadmap has clear steps
10. Create fix list, send back to Synthesis Specialist

Quality Gates:
- Minimum 15,000 words
- All 4 research inputs properly integrated
- Every recommendation backed by data
- Decision matrices are actionable and specific
- No contradictions within the report
- Executive summary captures key insights
- Implementation roadmap with clear steps
- JSON data populated correctly in data/recommendations.json

If QA FAILS: Send fix list, wait for corrections, re-review until passes.
If QA PASSES: Report "PROJECT COMPLETE - ALL QA PASSED" and prepare for GitHub push.

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/synthesis/05-master-qa-report.md

TIME BUDGET: 15 minutes
MAX REVISION LOOPS: 3
```

---

## Execution Order

Due to 1 concurrent agent limit:

**Phase 1: Material Research (QA Loop)**
1. Spawn Agent 1 (Material Specialist) → Wait for completion
2. Spawn Agent 1-QA → Review Agent 1
3. If QA fails → Send fix list to Agent 1 → Agent 1 fixes → Go to step 2
4. If QA passes → Continue to Phase 2

**Phase 2: Supplier Discovery (QA Loop)**
5. Spawn Agent 2 (Supplier Discovery) → Wait for completion
6. Spawn Agent 2-QA → Review Agent 2
7. If QA fails → Send fix list to Agent 2 → Agent 2 fixes → Go to step 6
8. If QA passes → Continue to Phase 3

**Phase 3: Pricing Intelligence (QA Loop)**
9. Spawn Agent 3 (Pricing Intelligence) → Wait for completion
10. Spawn Agent 3-QA → Review Agent 3
11. If QA fails → Send fix list to Agent 3 → Agent 3 fixes → Go to step 10
12. If QA passes → Continue to Phase 4

**Phase 4: Brand Analysis (QA Loop)**
13. Spawn Agent 4 (Brand Analyst) → Wait for completion
14. Spawn Agent 4-QA → Review Agent 4
15. If QA fails → Send fix list to Agent 4 → Agent 4 fixes → Go to step 14
16. If QA passes → Continue to Phase 5

**Phase 5: Master Synthesis (QA Loop)**
17. Spawn Agent 5 (Synthesis Specialist) → Consumes all 4 outputs
18. Spawn Agent 5-QA → Review Agent 5
19. If QA fails → Send fix list to Agent 5 → Agent 5 fixes → Go to step 18
20. If QA passes → PROJECT COMPLETE

Each agent will report back when complete. Update `swarm-status.md` as we go.

---

## GitHub Push (After Agent 5-QA Passes)

```
cd /home/chris/clawd/projects/treasure-coast-epoxy-research
git add .
git commit -m "Complete: Epoxy research - 10-agent swarm with QA loops"
git push origin master
```

---

## Model Configuration

**All agents use:**
- model: zai/glm-4.7 (no quota issues)
- thinking: high (for deep research)
- tools: web_search, web_fetch, memory_search (varies by agent)

**DO NOT use:** google/gemini-3-flash-preview (quota exhausted)

---

**Ready to launch:** Yes
**Prepared by:** Glitch (Spawner)
