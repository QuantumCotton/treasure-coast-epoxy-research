# Spawn Commands - Epoxy Research Swarm

**Use these to launch agents sequentially**

---

## Agent 1: Material Specialist

```
Spawn RES-DEEP to research epoxy flooring flake/quartz materials.

Task: Complete research on epoxy flake types, sizes, applications, and performance data.

Focus areas:
- Flake taxonomy: solid colors, metallics, blends, custom mixes, size ranges
- Application matrix: garage, commercial, residential, outdoor, pool decks
- Performance specs: durability, UV resistance, chemical resistance, slip resistance
- Coverage rates: sq ft per 50lb bag at different thicknesses
- Mixing ratios and preparation notes

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/materials/01-material-taxonomy.md

Use templates from PROJECT-BRIEF.md for consistent formatting.
```

---

## Agent 2: Supplier Discovery

```
Spawn RES-DEEP to discover all epoxy flake suppliers that ship to Stuart, FL.

Task: Comprehensive supplier research with shipping verification.

Focus areas:
- All epoxy flake suppliers (Tier 1: Major brands, Tier 2: Mid-market, Tier 3: Budget)
- Shipping verification to zip codes 34994/34997 (Stuart, FL)
- Minimum order quantities
- Lead times (standard vs expedited)
- Geographic distribution (regional FL suppliers vs national)

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/suppliers/02-supplier-list.md

Must include at least 15-20 suppliers across all tiers.
```

---

## Agent 3: Pricing Intelligence

```
Spawn a specialized agent to compile pricing data for epoxy flake suppliers.

Task: Price comparison matrix with shipping costs.

Focus areas:
- Price per 50lb bag for each supplier/material
- Shipping costs to 34994/34997 (calculate total landed cost)
- Volume discount structures
- Seasonal pricing trends
- Hidden costs: hazmat fees, pallet requirements, bulk discounts
- Total cost of ownership analysis

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/pricing/03-price-matrix.md

Format as comparison table with:
Supplier | Material Type | List Price | Shipping | Total Cost | MOQ | Lead Time
```

---

## Agent 4: Brand Analyst

```
Spawn RES-MARKET to analyze epoxy flake supplier brands.

Task: Brand reputation, pros/cons, quality assessment.

Focus areas:
- Brand profiles for major suppliers only
- Customer sentiment: reviews, forums, Reddit, case studies
- Quality tier ranking: Premium | Mid-Range | Budget
- Red flags: consistency issues, shipping problems, customer service
- Warranty and support comparison
- Longevity and company stability

Deliver to: /home/chris/clawd/projects/treasure-coast-epoxy-research/analysis/04-brand-analysis.md

For each brand: Pros, Cons, Quality Score, Reputation Summary, Risk Assessment.
```

---

## Agent 5: Synthesis Specialist

```
Spawn BIZ-STRAT to synthesize all research into actionable business recommendations.

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

This is the final deliverable that will inform business decisions.
```

---

## Execution Order

Due to 1 concurrent agent limit:

1. **Spawn Agent 1** → Wait for completion
2. **Spawn Agent 2** → Wait for completion
3. **Spawn Agent 3** → Wait for completion
4. **Spawn Agent 4** → Wait for completion
5. **Spawn Agent 5** → Consumes all 4 outputs → Final report

Each agent will report back when complete. Update `swarm-status.md` as we go.

---

## GitHub Push (After Agent 5)

```
cd /home/chris/clawd/projects/treasure-coast-epoxy-research
git init
git add .
git commit -m "Initial epoxy research - 5-agent swarm complete"
gh repo create treasure-coast-epoxy-research --public --source=. --remote=origin
git push -u origin main
```

---

**Ready to launch:** Yes
**Prepared by:** Glitch (Spawner)
