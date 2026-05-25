# Space Law Changelog

Changes to Space Law are logged here in reverse chronological order.

---

## May 25, 2026

### New Pages

**Security Authority** (`security-authority.md`)
A standalone page defining the legal authority of the Security Department. Covers:
- Grant of authority and jurisdictional scope
- Arrest authority in three tiers: crimes in view (warrant waived), non-capital crimes not in view (warrant required, alert-level exception noted), and capital crimes / EotG (warrantless arrest permitted with PC still required)
- Weapons and contraband authority — officers may carry, brandish, and deploy any classification while on duty; authority lapses off-duty; C3 equipment must be returned post-alert
- Use of force standard modeled on NY Penal Law §35.30: general standard (proportionality, minimum force, verbal warning), deadly force standard with subdivisions (a) defense from imminent deadly force, (b) armed/dangerous suspect or imminent lethal threat, (c) capital crime convict or confirmed EotG
- Situational deadly force reference tables (Lethals Authorized, Lethals Recommended, Kill on Sight) incorporated from Crimes & Punishments, with legal framework cross-references

**Legal Standards** (`legal-standards.md`)
A standalone page explaining the three evidentiary standards used in Space Law:
- Reasonable Suspicion — definition, what it permits, how it is established, example
- Probable Cause — definition, what it permits, how it is established, example
- Preponderance of Evidence — definition, what counts as evidence, key principles
- Standards at a Glance quick-reference table
- Applying Standards to Elements of a Crime — connects the standards to the elements system in Crimes & Punishments

---

### Crimes & Punishments — New Charges

**Minor Crimes (100s)**

| Code | Name | Punishment |
|:----:|:-----|:-----------|
| 116 | Harassment | 5–10 min brig, 15k fine |
| 118 | Failure to Identify | Warning; 5 min brig if refusal continues |
| 119 | Obstruction of Justice | 5–10 min brig, fine optional |

**Misdemeanors (200s)**

| Code | Name | Punishment |
|:----:|:-----|:-----------|
| 214 | Evidence Tampering | 10 min brig, 30k fine |
| 216 | False Report | 5–10 min brig, 25k fine |
| 219 | Unlawful Search | 5 min brig, possible demotion |
| 220 | Abuse of Authority | 10 min brig, demotion, possible IC job ban |

**Felonies (300s)**

| Code | Name | Punishment |
|:----:|:-----|:-----------|
| 319 | Unauthorized Implantation / Deimplantation | 10–15 min brig, 40k fine, reversal if possible |
| 320 | Gross Medical Malpractice | 10–15 min brig, demotion, 50k fine |

---

### Crimes & Punishments — Modified Charges

**204 — Conspiracy**
Narrowed in scope to conspiracy toward a *misdemeanor or greater* offense. Previously covered any illegal action. Grand Conspiracy (304) remains the felony/capital tier.

**205 — Hostile Agent**
Elements clarified to explicitly cover only non-combat support roles: recruitment, messaging, smuggling, harboring, or financing. Distinguishes more cleanly from 305 Hostile Activity.

**213 — Mutilation**
"Medical malpractice" qualifier changed to "minor medical malpractice." Related Offenses updated to link to new 319 (Unauthorized Implantation) and 320 (Gross Medical Malpractice) as greater charges.

**215 — False Imprisonment**
Elements expanded to explicitly cover unlawful arrests, detainment, and holding prisoners beyond their lawful sentence — not only physical confinement. Applies to Security Officers who make baseless arrests or over-hold.

**305 — Hostile Activity**
Elements rewritten to require a *direct hostile act* in coordination with a hostile organization. Passive support is 205; direct action is 305.

---

### Crimes & Punishments — Officer Guidance Updates

**211 — Insubordination**
Officer notes updated: *"Orders that violate Space Law, SOP, or present an unreasonable danger are not lawful orders."*

**311 — Dereliction**
Officer guidance expanded with a concrete examples section covering Engineering, Medical, Security, and Command dereliction scenarios.

---

### Crimes & Punishments — Table Restructure (prior session)

All five crime tiers were restructured from a 4-column format to a 5-column format:

`Code | Crime | Elements | Related Offenses | Punishment`

Each crime now has:
- An **Elements** column listing the required elements of the offense using `<br>`-separated bullet points
- A **Related Offenses** column listing lesser and greater offenses with directional links (↑ Lesser / ↓ Greater)
- An expandable **Officer Guidance** `<details>` block with: Elements in Detail, Standard of Proof, and Officer Notes

All anchor tags (`<a id="xxx">`) were preserved for cross-document linking.
