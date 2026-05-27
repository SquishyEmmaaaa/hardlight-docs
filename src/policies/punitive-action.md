# Punitive Action

This page defines how punitive and administrative actions should escalate in practice.

```admonish info
Use the least severe intervention that still protects current player experience, restores round integrity, and sets a clear expectation.
```

## Escalation Path

| Level | Primary Tool | Use When | Required Follow-Through |
|:------|:-------------|:---------|:------------------------|
| 0 | Coaching / clarification | Confusion, first-time low-impact issue, no clear bad faith | Explain expectation and desired correction |
| 1 | Message | Important non-punitive profile context should be preserved for staff awareness | Record concise, factual context and avoid punitive framing |
| 2 | Note | Rule violation or incident needs accountability record | Keep it brief; log facts, context, admin action, and player response |
| 3 | Watchlist | Patterned concerns need cross-admin visibility | Document what to monitor and why; reassess periodically |
| 4 | Role/game punitive action | Repetition, refusal, severe impact, or bad faith | Apply proportionate action and document rationale in notes |
| 5 | Whitelist revocation consideration | Persistent bad fit despite correction/escalation | Seek concurrence when practical and document internal rationale |

## Tool Standards

![Message, Note, and Watchlist reference](note_message_watchlist.png)

### Direct Staff Message (`message`)

Use a message as a non-punitive profile note for important context staff should remember.

Example: "This player performs as an excellent ERT role or CC guard when required. Very robust."

| Do | Avoid |
|:---|:------|
| Be concise, factual, and useful for future staff context | Vague, emotional, or editorial language |
| Record noteworthy positive or neutral context that is relevant to moderation operations | Using `message` as a punishment record |
| Keep it informational and non-disciplinary | Mixing disciplinary conclusions into profile context |

### Player Note (`note`)

Use notes as the durable staff record.

Notes should be brief and are typically applied for a rule violation.

| Must Include | Why |
|:-------------|:----|
| What happened (objective facts) | Future staff can quickly understand incident context |
| What action was taken | Escalation history remains consistent |
| Why action was chosen | Makes review/appeal decisions coherent |
| Player response/intent signals | Distinguishes confusion from bad faith |

### Watchlist (`watchlist`)

Watchlist sends a login notification to online admins whenever the flagged player joins.

| Apply Watchlist When | Remove/Review When |
|:---------------------|:-------------------|
| Repeated edge-case conduct across rounds | Behavior stabilizes for a meaningful period |
| Prior incidents show pattern risk | Original concern is no longer current |
| Staff needs continuity on a known issue | New evidence changes risk assessment |

```admonish info
Watchlist is for coordinated awareness, not pre-judgment.
```

## Applied Enforcement Escalation

Use this as the single escalation ladder from least severe to most severe.

| Stage | Action | Severity Guidance | Expires In (Typical) | Use When |
|:------|:-------|:------------------|:---------------------|:---------|
| 1 | Coaching / clarification | Lowest | N/A | First-time, low-impact confusion; clear correction path exists |
| 2 | Message (non-punitive profile context) | Low | N/A | Important staff context should be preserved without punitive framing |
| 3 | Note (warning/accountability record) | Low to medium | N/A | Rule violation needs brief durable documentation |
| 4 | Watchlist | Medium | N/A | Pattern concerns require cross-admin visibility on login |
| 5 | Role Ban | Medium to high | 12h, 3d, 7d, 15d, perm | Misconduct is role-specific (for example recurring Rule 10.1 failures in Security/Command roles) |
| 6 | Server/Game Ban | High to critical | 12h, 3d, 7d, 15d, perm | Behavior is severe, repeated, bad-faith, or not contained to a single role |
| 7 | Combined Ban Action | Highest | Usually 7d, 15d, or perm | Both role misuse and broader game-impact concerns are present |

![Banning panel reference](banningpanel.png)

When using the panel, set fields in this order: **Type** -> **Severity** -> **Expires In**.

| Panel Option | What It Means | Typical Use |
|:-------------|:--------------|:------------|
| Type: Role Ban | Restricts specific jobs or departments only | Role-scoped issues (for example recurring Rule 10.1 performance failures) |
| Type: Server/Game Ban | Removes access to the server as a whole | Severe, repeated, or broad bad-faith behavior not limited to one role |
| Severity | Internal seriousness marker for the action | Keep proportional to impact, intent, and history |
| Expires In: 12h | Short timeout-style ban | Immediate cooling-off period for lower-severity incidents |
| Expires In: 3d | Medium short-term ban | Repeated lower-severity issues or a stronger first punitive step |
| Expires In: 7d | Medium-term ban | Significant disruption, refusal to correct, or repeated misconduct |
| Expires In: 15d | Long-term ban | Serious or persistent behavior with high player-impact |
| Expires In: Perm | Permanent ban | Extreme harm, persistent bad fit, or repeated failure across prior escalation |

Default to the least severe option that still protects player experience and round integrity.

## Example Scenarios

```admonish example
**Captain Overreach (Complaint-Led, Role-Specific)**

Complaint: HoS reports that a Captain executed a player for stealing from the bar.

Response:
- Investigate first and speak directly with the Captain to understand their reasoning.
- If the player demonstrates they do not understand the issue and are not remorseful, escalate to a temporary **Captain Role Ban**.
- Document the complaint source, findings, conversation outcome, and role-ban rationale in the staff action record.
```

```admonish example
**Security Officer Repeat Behavior (Complaint-Led Progression)**

Complaint 1: Security Officer shoots a Xenoqueen boarding evac. This is the player's first offense of any type and they are remorseful and understanding.

Response 1:
- Apply a **brief note** with a 1-week expiry as the proportional first response.

Complaint 2 (3 days later): Same player is fighting on the evac shuttle with someone they claim is a syndicate traitor.

Response 2:
- Treat as repeated role-performance misconduct.
- Escalate to a temporary **Security Role Ban**.
- Document the recurrence window (3 days), prior corrective action, and why role restriction is now necessary.
```

```admonish example
**Self-Antag Escalation from Watchlist to Ban**

Incident 1: Player breaks into Security to steal from the Security Vendor, claiming they need the nullspace flasher. They are understanding and cooperative.

Response 1:
- Apply a **watchlist** due to apparent repeat-attempt risk.
- Give a clear stop instruction and confirm understanding.

Incident 2: Player repeats the behavior (self-antagging).

Response 2:
- Escalate to a **12-hour Server/Game Ban**.
- Record the prior warning/watchlist context and the repeated conduct.
```

## Escalation Modifiers

Use these modifiers to move up or down the path:

| Modifier | Direction | Effect |
|:---------|:----------|:-------|
| New player confusion with good-faith correction | De-escalate | Prefer coaching; use message only for useful non-punitive context |
| Prompt compliance after contact | De-escalate | Stop at minimal necessary action |
| Repeat behavior after prior notice | Escalate | Move to note/watchlist or stronger action |
| Refusal, evasion, or bad faith conduct | Escalate | Skip levels where needed |
| Severe round-integrity harm | Escalate | Immediate stronger intervention is appropriate |


## Relationship to Other Policies

- Core enforcement context: [Rule Enforcement](rule-enforcement.md)
- Role and conduct expectations: [Admin Expectations](admin-expectations.md)
- Interpretation and precedent workflow: [Precedent Information](precedent-information.md)
