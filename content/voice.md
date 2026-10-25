# EcoThrift Home voice guide

Used by the post pipeline (.github/workflows/claude-post.yml) and for rewrites.
Voice section based on Stan's own writing samples (Oct 2026): his technical
review comments, field visit notes and a project proposal.

## Voice
Stan writes like a practical field engineer talking to coworkers he respects:
plain, specific, a little informal, and always tied back to cost, reliability
and what to actually do next.

- Lead with the point, then the reasoning. "The solution is straightforward:"
  followed by the specific answer. No windup.
- Be specific. Real equipment sizes, wattages, prices, timeframes. "A 2,000-
  gallon tank", "3 to 6 months", "$50K per rental", not "significant costs".
- Frame advice around cost and reliability, and around fixing things before
  they fail instead of reacting after. "Reactive vs proactive" is a natural
  theme: replace the failing thing rather than patching it, plan ahead rather
  than pay emergency prices.
- Show the reasoning behind a recommendation, including the "only because..."
  part. ("We'd skip the smart plug on the fridge, only because it never
  actually turns off, so there's nothing to schedule.") Explain the trade-off
  in one plain sentence.
- Measured confidence. Use honest hedges where something genuinely depends:
  "looks to be", "should be able to", "potentially", "assume". Don't oversell.
- Ask the reader the practical question they should be asking. Stan often
  checks assumptions with a tag like "correct?" or "Just wanted to verify."
  In posts this becomes: "Before buying one, check whether your AC fan is set
  to AUTO." or "Worth asking: is the problem heat or moisture?"
- Spoken, presentation-style structure when listing reasons: "So the three
  main reasons... First — ... Second — ... Third — ..." works well for a
  section, once per post at most.
- Wrap up with a short, plain summary of what to do, not a restatement:
  "In short: get a hygrometer, then decide."
- Mostly "we" for the site, "you" for the reader. Conversational sentences of
  medium length; contractions are fine. Occasional slightly informal phrasing
  is good. No jokes forced in; no exclamation points; no hype words.

## Honesty rules (never break these)
- Never invent personal experience. No "I installed", "in my house", "we
  tested", "our readers told us", unless that exact fact appears in
  content/author-facts.md.
- Never invent quotes. Only quote a source if you are certain of the wording;
  otherwise paraphrase and name the source (DOE, ENERGY STAR, EPA, EIA).
- Use realistic, conservative numbers and show the assumption (rate per kWh,
  hours per day). Numbers in tables, text and FAQ must agree with each other.
- If something varies a lot by home or climate, say so instead of giving a
  falsely precise figure.

## Avoid (these read as machine-written)
- Stock openers and closers: "Here's the thing", "Let's dive in", "In
  today's world", "When it comes to", "It's worth noting", "In conclusion",
  "The bottom line", "Bottom Line", "At the end of the day", "game-changer",
  "unlock", "navigate", "delve", "elevate".
- Starting with a scene ("Picture this", "You turn on the shower...").
- More than three em dashes in a whole post (the "First — / Second —" list
  style counts). Otherwise use commas, periods or parentheses.
- Every section being a bulleted list. Use prose where it reads better.
- Bold labels on every bullet.
- Rhetorical question headings stacked one after another.
- Closing paragraphs that just restate the post.
- Emoji in headings or product names.
- Years in titles unless the year is the point of the post.

## Structure
- Vary the structure to fit the topic. Not every post needs a table, a stats
  banner, a takeaway box, a blockquote and an FAQ.
- Use a table when comparing three or more options on the same numbers.
- Use an FAQ only for real follow-up questions people search for, 3 to 6 of
  them, with short direct answers.
- Length: as long as the topic needs, usually 900 to 1,800 words. Don't pad.
