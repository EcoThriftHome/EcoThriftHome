# Indexing fix plan — 2026-10-31

Search Console (Oct 30): 110 indexed, 71 not indexed. 32 are "Discovered – currently not indexed",
all appearing ~Oct 13, never crawled.

## Diagnosis (from the repo)

1. **The 32 appeared when the placeholder `post-2026-*` URLs were renamed to real slugs (Oct 2026).**
   Google got ~46 new URLs at once and queued them. The 33 posts with no impressions in
   `seo/baseline-2026-10-24.tsv` line up with the Search Console examples.
2. **101 of 132 posts have zero in-text links from other posts.** `internal-linking.yml` has a hardcoded
   `POST_MAP` of the original 20 posts, so only those 20 ever receive links. The sidebar links the same
   3 posts (LED upgrade, thermostat habits, power strips) on every page.
3. **Most internal links point at `.html` URLs that 301 redirect.** Homepage: 118 of 131 post links.
   Post-to-post: 149 of 221. Every one is a redirect hop and feeds the "Page with redirect" bucket.
4. **Duplicate topics** split signals and make Google crawl the site less eagerly (clusters below).

## Batch A — safe, no URL changes (done 2026-10-31)

- [x] Strip `.html` from every internal `/blog/` link (index.html, all posts, sidebars).
- [x] Add in-text links (49 added; wrapped existing phrases, no new text). Not linked yet: solar security cameras (no natural spot) into each never-crawled post from related posts that already get impressions (table below).
- [x] Make `internal-linking.yml` build its post list from `blog/*.html` instead of the hardcoded 20.
- [x] Topic dedupe: the 40 remaining topics in topics.txt were checked against existing slugs; no close duplicates. The post prompt already tells the model to take a different angle on overlaps. Homepage cards and footer links now written without .html.
- [ ] Manually request indexing in Search Console, ~10/day, "best X" posts first.

### Link plan (target ← link from these indexed posts)

| Never-crawled post | Link from (impressions, 28d) |
|---|---|
| best-door-draft-stoppers-ranked | weatherstripping-door-seals-stop-drafts (63), stop-cold-air-coming-through-electrical-outlets (444) |
| best-led-bulbs-every-room-brightness-color-guide | smart-bulbs-vs-led-bulbs-which-saves-more-electricity (304), dimmer-switches-electricity-savings (115), natural-light-hacks-reduce-daytime-lighting-costs (55) |
| best-smart-plugs-energy-monitoring-reviewed | unplug-phone-charger-save-energy-money (523), extension-cord-vs-smart-plug-safety-efficiency (214), stop-vampire-power-save-150-per-year (172) |
| best-outdoor-solar-lights-replace-electric-pathway-lighting | small-solar-panel-kits-home-beginners-guide (234), solar-phone-chargers-small-devices (107) |
| best-solar-powered-outdoor-security-cameras-save-electricity | small-solar-panel-kits-home-beginners-guide (234), solar-phone-chargers-small-devices (107) |
| best-solar-generators-home-backup-power-reviewed | small-solar-panel-kits-home-beginners-guide (234), how-much-do-solar-panels-save-on-electricity-bills (90) |
| best-window-insulation-kits-for-winter | energy-efficient-window-treatments-save-heating-cooling (205), window-film-solar-shades-reduce-heat-gain-save-ac (37) |
| best-low-flow-showerheads-that-dont-sacrifice-pressure | how-long-run-hot-water-before-showering-wasted-energy (646), low-flow-showerheads-save-water-heating (61) |
| best-under-cabinet-led-lighting-save-kitchen-bills | smart-bulbs-vs-led-bulbs-which-saves-more-electricity (304), reduce-lighting-costs-room-by-room-guide (30) |
| average-electric-bill-by-home-size | does-leaving-fan-on-waste-electricity (3070), negotiate-lower-electricity-rate-utility-company (94) |
| average-household-electricity-cost-per-year | desktop-vs-laptop-power-consumption (2775), how-much-electricity-does-a-tv-use (1268) |
| why-is-my-electric-bill-so-high | microwave-vs-oven-vs-stove-energy-use (3124), does-leaving-fan-on-waste-electricity (3070) |
| biggest-energy-wasters-home-ranked-by-cost | how-much-electricity-does-a-gaming-console-use-per-year (2206), smart-tv-vs-regular-tv-energy-consumption (1301) |
| basement-rim-joist-insulation-energy-leak | air-sealing-crawl-space-basement-cut-heating-bills (137), best-energy-efficient-dehumidifiers-basement (103) |
| attic-hatch-pull-down-stairs-insulation-cover-worth-it | attic-insulation-save-40-percent-heating-costs (72), whole-house-fan-vs-air-conditioner-cost-comparison (176) |
| solar-attic-fan-vs-electric-attic-fan-cost-savings | whole-house-fan-vs-air-conditioner-cost-comparison (176), how-to-keep-house-cool-without-ac (229) |
| find-air-leaks-candle-incense-test | stop-cold-air-coming-through-electrical-outlets (444), diy-home-energy-audit-step-by-step (79) |
| spray-foam-vs-caulk-air-leaks | stop-cold-air-coming-through-electrical-outlets (444), air-sealing-crawl-space-basement-cut-heating-bills (137) |
| how-to-insulate-windows-for-winter-without-replacing-them | heat-one-room-efficiently-without-heating-whole-house (123), energy-efficient-window-treatments-save-heating-cooling (205) |
| energy-star-refrigerator-savings-worth-the-cost | clean-refrigerator-coils-save-energy (100), microwave-vs-oven-vs-stove-energy-use (3124) |
| home-energy-rebates-tax-credits-2025 | induction-cooktop-vs-gas-stove-energy-cost (1105), heat-pump-water-heater-vs-traditional-savings (228) |
| tankless-vs-tank-water-heater-cost-savings | heat-pump-water-heater-vs-traditional-savings (228), water-heater-120-degrees-save-money (173) |
| shower-timer-cut-water-heating-bills | how-long-run-hot-water-before-showering-wasted-energy (646), how-many-gallons-hot-water-shower-uses (22) |
| clean-dryer-vent-duct-save-energy-prevent-fires | how-much-does-it-cost-to-run-a-dryer (268) |
| dryer-balls-vs-dryer-sheets-wool-balls-cut-drying-time | how-much-does-it-cost-to-run-a-dryer (268), cold-water-washing-savings-per-year (332) |
| drying-rack-vs-clothes-dryer-air-drying-savings | how-much-does-it-cost-to-run-a-dryer (268), cold-water-washing-savings-per-year (332) |
| summer-vs-winter-utility-savings | best-winter-thermostat-temperature-save-money (154), electric-blanket-vs-space-heater-savings (924) |
| led-bulb-upgrade-save-200-per-year | smart-bulbs-vs-led-bulbs-which-saves-more-electricity (304), dimmer-switches-electricity-savings (115) |

Posts slated for merging in Batch B get no new links.

## Batch B — merges + 301 redirects (needs Stan's OK on each)

Keep = the URL that survives. Useful content from the others gets folded in, then they 301 to it.
Choice is mostly by Search Console impressions/position.

| # | Keep | Merge + redirect | Notes |
|---|---|---|---|
| 1 | cold-water-washing-savings-per-year (332, pos 7.4) | cold-water-laundry-save-90-percent-washing-energy (179), cold-water-laundry-washing-savings (0) | 3 posts, one topic |
| 2 | diy-home-energy-audit-step-by-step (79) | diy-home-energy-audit-room-by-room (0) | |
| 3 | energy-efficient-window-treatments-save-heating-cooling (205, pos 43.8) | energy-efficient-window-treatments-curtains (235, pos 57.2) | thermal-curtains-cellular-shades stays (product angle) |
| 4 | best-smart-power-strips-2025 (261) | best-smart-power-strips-home-office (3), programmable-power-strip-home-office-save-standby-power (0) | update "2025" in title, not slug |
| 5 | insulate-water-heater-save-money (173) | how-to-insulate-hot-water-heater-diy-save-money (50), water-heater-blanket-insulation-worth-it (57) | |
| 6 | best-outdoor-solar-lights-replace-electric-pathway-lighting | solar-outdoor-lighting-replace-electric-pathway-lights (10) | keep the "best" (affiliate) version |
| 7 | stop-cold-air-coming-through-electrical-outlets (444) | insulate-electrical-outlets-switch-plates-stop-drafts (397), wall-outlet-foam-gaskets-vs-child-safety-plugs-drafts (0) | 3 outlet-draft posts |
| 8 | best-power-usage-monitors-track-electricity (99) | best-energy-monitors-home-electricity-tracking-reviewed (0) | |
| 9 | mini-split-vs-window-ac-vs-central-air-cost-comparison (57) | mini-split-heat-pump-vs-central-air-cost-savings (41) | |
| 10 | led-bulb-upgrade-save-200-per-year | how-much-do-led-bulbs-really-save (8) | keep the one the sidebar links sitewide |
| 11 | occupancy-sensor-vs-timer-switch-energy-savings (146) | motion-sensor-light-switches-eliminate-wasted-lighting (0) | |
| 12 | lower-utility-bills-apartment-renters-guide (53) | energy-saving-tips-for-renters-no-landlord-approval (7) | |
| 13 | best-energy-efficient-space-heaters (940) | best-portable-heaters-small-rooms-energy-efficiency-ranked (327) | both rank poorly; one strong page beats two weak |
| 14 | attic-insulation-save-40-percent-heating-costs (72) | ceiling-insulation-diy-guide-save-heating-cooling-bills (13) | |
| 15 | ~~draft stoppers~~ | — | Stan: keep both (2026-10-31) |
| 16 | ~~thermostat~~ | — | Stan: keep both (2026-10-31) |

Left alone on purpose (different search intent): low-flow vs best-low-flow showerheads,
window insulation kits vs how-to-insulate-windows, sense review vs sense-vs-emporia, vampire power vs smart plugs.

Log each merge in `seo/rewrite-log.tsv` with its baseline so it can be checked/reverted in 2–3 weeks.
