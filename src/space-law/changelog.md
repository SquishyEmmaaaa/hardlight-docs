# Space Law Changelog

Changes to Space Law are logged here in reverse chronological order.

---

## May 25, 2026 (revision 3)

### Legal Standards — Reasonable Suspicion Example Updated

The Reasonable Suspicion example was replaced with a more instructive scenario. The new example illustrates an intercepted-communication situation in which a Scientist is observed circling the bridge and carrying a crew scanner — each factor innocent in isolation, but collectively sufficient to establish RS under the **Totality of the Circumstances** doctrine.

A new **Totality of the Circumstances** subsection was added to the *How Reasonable Suspicion May Be Established* section, defining:
- No single factor needs to be sufficient on its own; RS is assessed by weighing all observable facts together
- The objective standard: *would a reasonable, trained officer confronted with the same facts conclude that criminal activity was afoot?*
- Personal hunches untethered from articulable facts are insufficient
- Each contributing factor should be documented individually in the officer's report

---

### New Pages

**Alert Statuses** (`alert-statuses.md`)
A new standalone page defining the three alert statuses (Green, Blue, Red). Covers:
- Criteria for declaring each status
- What changes under each status: search authority, ID requirements, C3 equipment, crew obligations, CEDT rules
- Protocol for lifting an alert
- Quick-reference table

**Security Policies & Guidebook** (`security-guidebook.md`)
A new standalone reference for Security personnel. Covers:
- Security roles: Cadet, Officer, Warden, Detective, Head of Security — responsibilities and authorities for each
- Terminology glossary: AOS, KOS, Brig, Timer, Perma, Processing, Stun, C1/C2/C3, CEDT, Warrant, RS, PC, Alert Status
- CEDT policy: deployment authorization, evidentiary standard for CEDT firing (RS only, not search authority; Blue Alert exception), Totality of the Circumstances application
- Escalation ladder and exceptions (merged from former `escalation.md`)
- Standard procedures: arrest procedure, sentencing rules, search authorization table, permabrig requirements, use of force table (merged from former `legal-procedures.md`)

---

### Site Structure — Renamed & Reorganized

- **Section renamed:** `Space Law` → `Security Operations` in SUMMARY.md to reflect the broader scope of the section
- `Escalation Policy` (`escalation.md`) and `Legal Procedures` (`legal-procedures.md`) removed from navigation; content merged into Security Policies & Guidebook
- `Alert Statuses` and `Security Policies & Guidebook` added as new entries

---

## May 25, 2026 (revision 2)

### Crimes & Punishments — Guidance Corrections & Expansions

**003 — Superficial Vandalism**
Officer guidance clarified: station property and items belonging to any other crew member or individual are covered. Defacing one's *own* property is explicitly not chargeable under this offense.

**006 — Drug Possession**
Standard of Proof note corrected. Reasonable Suspicion does *not* authorize a search on Green Alert — that requires a warrant (backed by PC) or the individual's consent. On Blue or Red Alert the warrant requirement is waived for individuals exhibiting suspicious behavior, but PC for the charge still must be established by what is found.

**104 — Vigilantism**
Officer notes updated: crew who assist Security during a Red Alert but fail to follow officer commands are acting outside their authorization and may be charged under this offense. Code Red authorization is contingent on following Security orders.

**107 — Disturbing the Peace**
Fully rewritten. Prior version required "knowingly organizing or leading a movement." New version applies a **reasonable-person standard** covering any conduct that disrupts public order, including:
- Excessive noise in shared spaces
- Public fighting
- Abusive language likely to incite confrontation
- Organized activity that disrupts normal department operations

Punishment updated to: *Warning; 5–10 min brig or 15k speso fine.* Related Offenses updated to reference 207 — Rioting (↓ Greater). Officer guidance expanded with references to 011 (Disruptive Comms) and 007 (Disorderly Conduct) for edge cases.

**118 — Failure to Identify**
Third element added: *failing to wear a valid ID card while on Blue Alert or higher.* Officer guidance updated to reflect the Blue/Red Alert visible ID requirement — verbal name is insufficient during heightened alert if the crew member refuses to produce/wear their ID card.

**119 — Obstruction of Justice → Resist, Delay, or Obstruct Justice**
Charge renamed and expanded. New elements cover:
- Physically impeding officers or prisoner transport
- Providing false information during an investigation
- "Slipping" officers (game-mechanical interference)
- Failing to comply with reasonable requests to vacate or create space near officers or a crime scene
- Any conduct that distracts or hinders Security response

Officer guidance corrected: **silence and non-cooperation are not illegal.** The prior note ("silence or non-cooperation is 118") was removed. The 118 cross-reference now correctly states that 118 requires an *active refusal* to identify when lawfully asked. Minor non-compliance (slow to move) warrants a verbal warning before a charge is filed.

---

### Crimes & Punishments — Sentencing Reference Table Added

A **Sentencing Reference** table was added to the Modifiers section, between the Modifiers table and the Infractions tier. It defines baseline sentencing ranges per tier to give **M02 — Elevated Sentencing** ("elevated by one level") concrete meaning:

| Tier | Typical Sentence |
|:-----|:----------------|
| Infraction | Fine only: 10–25k speso |
| Minor Crime | Up to 10 min brig; fine optional |
| Misdemeanor | 5–15 min brig; 20–45k speso fine |
| Felony | 10–20 min brig; 35–85k speso fine; possible demotion |
| Capital Crime | Permanent Confinement, Execution, or Force Borgification |

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
