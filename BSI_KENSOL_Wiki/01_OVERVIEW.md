---
title: "Overview"
type: overview
last_updated: 2026-04-26
---

# BSI K-ENSOL EPC Project — Knowledge Base Overview

## Project Context

This knowledge base captures 18 months of construction project management knowledge (Nov 2024 – Apr 2026) from the BSI K-ENSOL battery factory cleanroom EPC project in Spain. The project involves two buildings — [[FA1-Building]] (CW33 deadline) and [[CP1-Building]] (CW40 deadline) — spanning nine disciplines from [[Steel-Structure]] through [[Fire-Protection]].

## Core Knowledge Domains

### 1. Material Tracking & Procurement Intelligence

The dominant knowledge stream revolves around the [[MTL-Dashboard]] evolution (v40→v117), which progressed from a simple ordering status viewer to a full pipeline analytics platform with [[Material-Pipeline-Logic]] covering five stages: Scope → Ordered → In-Transit → On-Site → Installed. Key analytical breakthroughs include the discovery that **91.4% of items remain unordered** (W16 analysis), identification of 23/39 [[SOLTEC]] batches as overdue (59%), and the recommendation of air freight for 76 [[LLI-Criticality]] items as the Scenario 3 acceleration strategy.

### 2. Schedule Management & Optimization

The [[Critical-Path-Method]] implementation progressed from textbook theory to practical P6-importable deliverables. The [[Trade-Sequencing]] analysis revealed that full sequential MEP ordering (FF → Duct → Electrical → Lighting → Piping) eliminates all 22 clashes but extends the schedule by ~147 days — establishing the core tension between quality and speed that drives [[SCN-Analysis]] scenario work. The [[HVAC-Commissioning-Schedule]] template (21 activities, 27 FS links, ~32 working days per unit) represents the most granular scheduling deliverable.

### 3. Progress Measurement & Forecasting

The [[PMS-Progress-Curve]] system evolved through multiple iterations to address the fundamental problem of mixed-unit aggregation (KG vs M2 vs EA vs MZ). The [[I-MR-Analysis]] integration enables statistical process control on weekly progress rates, with [[S-Curve-Forecasting]] providing trend-based completion predictions. The [[CDR-Readiness-Milestone]] invariant (always use Start Date, not Finish Date) emerged as a critical domain rule that was initially violated in early dashboard versions.

### 4. AI-Augmented Project Management

Two parallel tracks emerged: the [[Construction-Maven]] system (DoD Maven-inspired, 6-layer architecture) for real-time risk management with Claude Vision API integration, and the [[Tacit-Knowledge-Capture]] framework adapted from colleague.skill for preserving departing engineers' judgment patterns. The [[EPC-Domain-Invariants]] concept formalizes rules like "CDR Start Date = milestone" and "I column = Q column" that must survive across all code changes.

## Cross-Cutting Themes

### Theme A: Data-Driven Decision Making
Every major deliverable anchors to quantified evidence — from the 91.4% unordered rate to the 147-day schedule extension to the $4.5M delay cost per month. The preference for [[Bell-Curve-vs-Plateau]] workforce analysis over qualitative judgment reflects a systematic approach to construction management.

### Theme B: Iterative Dashboard Development
The dashboard development pattern follows a consistent cycle: Excel data analysis → HTML prototype → bug discovery via screenshot comparison → cross-verification against source data → patched release. Version control discipline (independent files, rollback-capable) emerged as a learned practice after early overwriting incidents.

### Theme C: Contract & Risk Awareness
The [[FIDIC-Silver-Book]] framework (Clause 20.1 28-day notice, contractor-bears-risk) underlies all schedule and cost analyses. The [[Catch-Up-Strategy]] work consistently quantifies recovery options against contractual milestone penalties, treating acceleration costs as investments against LD exposure.
