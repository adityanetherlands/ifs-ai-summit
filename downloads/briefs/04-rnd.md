---
number: "04"
title: "Future of R&D"
subtitle: "Rethinking the Specify-Build-Ship Pipeline with AI"
tagline: "Pre-Read & Action Brief for the IFS Leadership Team"
---

# Future of R&D

**Subtitle:** Rethinking the Specify-Build-Ship Pipeline with AI

---

## 1. The Current State

Every R&D -- Product & Engineering function runs on the same lifecycle: specify, then build, then ship. The Specify-Build-Ship process is the operational backbone. And right now, it is broken at every stage.

**Specify is inefficient.** Engineers spend 55% of time on boilerplate, plumbing, and testing -- not differentiated logic.

**Build is structurally neglected.** Documentation written after the fact, often stale by the time it's published.

**Ship is reactive.** Feature cycle time is 6-12 weeks from spec to production.

### Key Statistics

| Metric | Value | Detail |
|--------|-------|--------|
| Revenue per R&D Head | ~$400K | IFS today -- cloud-native peers average $800K-$1.2M |
| Code Written by AI | 40-60% | At companies using AI coding assistants (GitHub data, 2025) |
| Time on Boilerplate | 55% | Engineering time on repetitive, non-differentiating code |
| Spec-to-Deploy | 6-12 weeks | Average feature cycle time at enterprise software companies |

### Traditional vs AI-Native

**Traditional Specify-Build-Ship:**
- Engineers spend 55% of time on boilerplate, plumbing, and testing -- not differentiated logic
- Product specs are ambiguous; engineers reverse-engineer intent from Jira tickets
- QA is a bottleneck: manual test suites lag behind development velocity
- Documentation written after the fact, often stale by the time it's published
- Feature cycle time is 6-12 weeks from spec to production
- Revenue per R&D head is ~$400K -- half the cloud-native benchmark

**AI-Native Specify-Build-Ship:**
- Engineers write specifications; AI generates implementation, tests, and documentation
- Specs are machine-readable contracts that AI validates before code is written
- AI generates and maintains test suites continuously -- QA shifts to edge cases and UX validation
- Documentation auto-generated from specs and code, always current
- Feature cycle time drops to 1-3 weeks with AI-accelerated development
- Revenue per R&D head reaches $1M+ without adding headcount

---

## 2. How to Think About the Future of R&D -- Product & Engineering

The Specify-Build-Ship lifecycle forces specificity. Not "AI will transform R&D -- Product & Engineering" but exactly how each stage changes when AI agents handle the operational layer end-to-end.

### The Specify Stage: From Jira Tickets to Machine-Readable Contracts

Spec-Driven Development (SDD) is the thesis that the next computing abstraction layer is natural language. Just as high-level languages abstracted machine code, and frameworks abstracted languages, SDD abstracts code with specifications. A product manager writes a structured spec -- inputs, outputs, constraints, edge cases, acceptance criteria -- and an AI harness generates the implementation. IFS is already exploring this with tools like Traycer, Kiro, and Augment Code. The spec becomes the single source of truth: it drives code generation, test generation, documentation, and deployment. The engineer's job shifts from 'write code' to 'define intent precisely and review AI output.' This is the biggest productivity lever in IFS's entire transformation agenda.

### The Build Stage: From Coding to Reviewing

Today, an IFS engineer writes code, writes tests, writes documentation, reviews PRs, and debugs. AI collapses most of this. Cursor, GitHub Copilot, and purpose-built SDD tools generate code from specs. AI writes unit tests, integration tests, and regression suites. AI generates technical documentation. The engineer becomes a reviewer and architect: ensuring the AI's output meets the spec, handles edge cases, and integrates correctly with IFS Cloud's existing codebase. This is not speculative -- GitHub's own data shows AI-assisted developers complete tasks 55% faster. At IFS's scale (1,600 engineers), that's the equivalent of adding 880 engineers without hiring anyone.

### The Ship Stage: From Release Trains to Continuous Delivery

Shipping enterprise software (especially to regulated industries like A&D and energy) requires rigorous testing, compliance validation, and release management. AI transforms this: automated regression testing catches issues before humans review them. AI-powered deployment pipelines validate compliance requirements (ITAR, SOC2, FedRAMP) automatically. Release notes are auto-generated from commit history and specs. The release train becomes continuous because the gates are automated. IFS Cloud's composable architecture is ideally suited for this -- individual components can ship independently when AI validates they don't break integration contracts.

### Specify-Build-Ship as a Continuous Loop

In the SDD model, the boundaries dissolve. A spec change triggers a build, which triggers tests, which trigger deployment, which generates usage data, which informs the next spec. The entire pipeline is an AI harness with human checkpoints for judgement calls. Engineers spend their time on what humans do best: understanding customer problems, defining elegant solutions, and making architectural trade-offs. AI handles the mechanical translation of intent into production software. IFS's NGA programme and IFS Zero are early proving grounds for this model.

### North Star Target

> **From ~1,600 (Engineers, Product Managers, Designers, QA, DevOps, Architects, Tech Writers) -> 1,600 (same headcount, 3-4x output) people**
>
> Revenue per R&D employee: from ~$400K to ~$1.2M+
>
> R&D is the one function where the north star is not fewer people but radically more output per person. IFS's 1,600 R&D staff currently deliver output comparable to much larger engineering orgs. With AI, the same 1,600 should deliver the output of 5,000-6,000 engineers. This is the SDD (Spec-Driven Development) thesis: engineers define 'what' via specifications, AI handles 'how' via code generation, testing, and deployment. The headcount stays -- the capability multiplies.

### Target KPIs

| KPI | Target | Context |
|-----|--------|---------|
| Revenue per R&D Head | $1M+ | Up from ~$400K today |
| Feature Cycle Time | 1-3 weeks | Down from 6-12 weeks |
| R&D Headcount | 1,600 (unchanged) | Same people, 3-4x output |
| AI-Generated Code | >60% | Of production code AI-generated, human-reviewed |
| Test Coverage | >95% | AI-generated and maintained test suites |
| Spec-to-Deploy Automation | >80% | Of pipeline steps executed by AI agents |

---

## 3. Challenging Questions for the Room

These are not abstract thought experiments. They are the outcomes your organisation needs to engineer in the next 12 to 24 months.

### Specify
- How do we make every feature request arrive as a machine-readable specification -- with inputs, outputs, constraints, and acceptance criteria -- so AI can generate the implementation without an engineer interpreting ambiguous Jira tickets?
- What has to be true for IFS's product managers to write specs that are precise enough for AI to implement, but flexible enough for engineers to exercise judgement on architecture and edge cases?

### Build
- How do we achieve a state where 60%+ of IFS Cloud production code is AI-generated and human-reviewed -- with the same or better quality, security, and compliance as hand-written code?
- If AI handles code generation, test writing, documentation, and PR review, what does a senior engineer at IFS actually do -- and is the answer 'system architecture and customer problem-solving' or something else entirely?

### Ship
- How do we make continuous deployment to IFS Cloud the default -- where AI validates compliance, runs regression, and ships features automatically -- without compromising the reliability that A&D and energy customers require?
- What has to be true for IFS to ship features weekly instead of quarterly, with AI handling the entire release pipeline from spec to production, while maintaining the security and auditability that regulated industries demand?

### North Star
- If the same 1,600 R&D people deliver 3-4x the output, how does IFS decide what to build with that surplus capacity -- and who makes those prioritisation decisions?
- How do we reskill an engineering org that was hired to write code into one that's hired to define specifications, review AI output, and make architectural trade-offs?
- If SDD works as theorised, IFS's revenue-per-R&D-head goes from $400K to $1.2M+ -- matching cloud-native benchmarks. What does that do to the board-level R&D investment thesis, and does R&D become a profit centre?

---

## 4. AI Companies Reshaping R&D -- Product & Engineering

The market has moved from experimental to production-grade. Spend time on these websites: watch demos, read case studies. Understanding what is possible is the prerequisite for deciding what is right for IFS.

### Specify: SDD & AI-Assisted Specs

**Traycer** -- Spec-Driven Development
Purpose-built SDD platform. Engineers write specifications; AI generates implementation, tests, and documentation. Designed for enterprise codebases.
traycer.ai

**Kiro (AWS)** -- Spec-Driven IDE
AWS's spec-driven coding tool. Converts requirements into structured specs, then generates implementation plans and code with built-in verification.
kiro.dev

**Augment Code** -- AI Code Platform
AI platform for large enterprise codebases. Context-aware code generation that understands your entire monorepo, not just the open file.
augmentcode.com

### Build: AI-Assisted Engineering

**Cursor** -- AI Code Editor
AI-native IDE. Code generation, refactoring, and debugging with full codebase context. The default tool for AI-augmented development.
cursor.com

**GitHub Copilot** -- AI Pair Programmer
AI code completion and generation integrated into VS Code and JetBrains. 55% faster task completion in GitHub's own studies.
github.com/features/copilot

**Codium (QodoAI)** -- AI Testing & Quality
AI-generated test suites: unit tests, integration tests, edge cases. Continuously analyses code changes and generates corresponding tests.
qodo.ai

### Ship: CI/CD & Compliance

**Harness** -- AI-Powered CI/CD
Intelligent deployment pipelines with AI-driven rollback, canary analysis, and compliance validation. Purpose-built for enterprise release management.
harness.io

**Snyk** -- AI Security & Compliance
Automated security scanning across code, dependencies, containers, and infrastructure. AI identifies and fixes vulnerabilities before deployment.
snyk.io

### Full Lifecycle: Engineering Intelligence

**LinearB** -- Engineering Analytics
Measures engineering efficiency: cycle time, DORA metrics, team velocity. AI identifies bottlenecks and recommends process improvements.
linearb.io

**Swimm** -- AI Documentation
Auto-generates and maintains code documentation. Keeps docs in sync with code changes. Eliminates stale documentation.
swimm.io

---

## 5. Hands-On Automation Exercises

Do at least one before the session. Do all four if you want to arrive with a working prototype, not an opinion.

### Exercise 1: The SDD Proof-of-Concept

Take a real IFS feature request from the backlog. Write a structured specification: inputs, outputs, constraints, edge cases, acceptance criteria. Feed it into Cursor or Claude and ask it to generate the implementation. Have an engineer review the output. Measure: How long did the spec take to write? How long did AI take to generate? How much did the engineer need to modify? What would the same feature have taken to hand-code?

- **Output:** A working implementation generated from a specification, with a measured time comparison against traditional development.
- **Tools:** Cursor, Claude, IFS codebase · **Effort:** 60 min

### Exercise 2: The AI Test Suite Generator

Pick a module in IFS Cloud with known quality issues or low test coverage. Feed the source code into AI and ask it to generate a comprehensive test suite: unit tests, integration tests, and edge case tests. Run the generated tests. Measure: How many pass? How many catch real bugs? How does coverage compare to the existing manual test suite?

- **Output:** An AI-generated test suite with coverage metrics and a comparison to the existing manual tests.
- **Tools:** Cursor, QodoAI, IFS Cloud codebase · **Effort:** 90 min

### Exercise 3: The R&D Productivity Dashboard

Build an interactive dashboard that visualises IFS R&D productivity: revenue per R&D head (current vs. target), feature cycle time trends, AI-generated code percentage, test coverage by module, and deployment frequency. Pull data from Jira, GitHub, and financial metrics. Make it update-ready for monthly board reporting.

- **Output:** A live R&D productivity dashboard that the CPTO can show to the board, demonstrating the SDD thesis with real IFS data.
- **Tools:** Python, Jira/GitHub APIs, HTML/ECharts · **Effort:** 2 hours

### Exercise 4: The Documentation Automator

Pick 3 IFS Cloud APIs or modules with outdated or missing documentation. Feed the source code into AI and ask it to generate complete developer documentation: API reference, usage examples, integration guide, and troubleshooting. Compare to existing docs. Deploy as a searchable internal doc site.

- **Output:** Auto-generated API documentation for 3 IFS Cloud modules, deployed as a searchable internal reference.
- **Tools:** Claude, IFS Cloud source code, Markdown/HTML · **Effort:** 90 min

---

## 6. What to Research Before the Session

Four tasks to ground the discussion in your reality.

### 1. Measure Your Revenue-per-R&D-Head

Calculate IFS's current revenue per R&D employee. Compare to ServiceNow (~$1.2M), Atlassian (~$900K), and Veeva (~$1.1M). The gap tells you the productivity opportunity -- and SDD is the lever to close it.

### 2. Time Your Feature Cycle

Pick 5 features shipped in the last quarter. Measure elapsed time from 'spec approved' to 'in production.' Then break it down: how much was waiting (for review, for dependencies, for QA) vs. actual development time? The wait time is where AI creates the most value.

### 3. Explore One SDD Tool

Spend 20 minutes on Traycer or Kiro. Watch a demo, read the docs. These represent the production-grade state of spec-driven development -- the thesis that engineers write 'what' and AI writes 'how.' Start with Traycer if you want enterprise-focused SDD.

### 4. Ask the Uncomfortable Question

Ask the engineering leadership: 'If AI generates 60% of our code and the same 1,600 people deliver 3-4x the output, what do we build with the surplus capacity -- and how do we decide?' If the answer is clear, the SDD roadmap writes itself. If there's a pause, that's the strategic conversation.

> The R&D organisations that win the next decade of enterprise software will not be the ones with the most engineers. They will be the ones where every engineer defines intent with precision and AI handles the mechanical translation -- because the bottleneck was never coding speed, it was specification clarity.
