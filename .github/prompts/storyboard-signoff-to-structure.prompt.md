---
name: Storyboard Sign-Off To Presentation Structure
description: "Run after narrative approval to convert storyboard content into an implementation-ready presentation website structure and file-targeted handoff."
argument-hint: "Paste approved storyboard plus audience, duration, and delivery context."
agent: "Storyboard To Presentation Structure Architect"
---
Convert the approved storyboard into a build-ready presentation website structure.

Use this input context:
- Product/Service: ${input:product_or_service}
- Approved storyboard content: ${input:approved_storyboard}
- Audience: ${input:audience}
- Presentation duration target: ${input:duration}
- Delivery context (live pitch, async, landing-page style): ${input:delivery_context}
- Primary CTA: ${input:primary_cta}
- Required proof assets available: ${input:available_assets}
- Constraints (brand, legal, technical, timeline): ${input:constraints}
- Sign-off status confirmation: ${input:signoff_status}

Required output sections:
1. Sign-off Check (status + assumptions)
2. Presentation IA (ordered section list)
3. Scene -> Section Mapping (table)
4. Section Blueprints
5. Motion + Transition Plan (structural only)
6. Responsive + Accessibility Requirements
7. Build Handoff Checklist
8. File Targeting Plan for `presentation.html`, `presentation-styles.css`, and `presentation-script.js`

Rules:
- Preserve approved narrative intent.
- Do not introduce unverified claims or metrics.
- Do not generate final visual design or full code unless explicitly requested.
