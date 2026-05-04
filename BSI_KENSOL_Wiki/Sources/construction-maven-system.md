---
title: "Construction Maven System"
type: source
tags: [AI, risk-management, DoD-Maven, OCR]
sources: []
last_updated: 2026-04-26
---

# Construction Maven AI Platform (v1 → v4)

## Summary
DoD Maven에서 영감을 받은 건설 리스크 관리 AI 플랫폼. Claude Vision API 기반 도면 OCR, Palantir Foundry 스타일 온톨로지, FIDIC Silver Book 조항 지식, Google Sheets 양방향 동기화를 포함.

## Architecture (6-Layer)
1. Data Ingestion Layer — PDF/Image OCR
2. Entity Extraction — P&ID, ISO, GA drawing parser
3. Ontology Layer — Equipment/Line/Instrument 관계 매핑
4. Risk Analysis Engine — Critical path impact, delay cost quantification
5. Knowledge Base — [[FIDIC-Silver-Book]] clause library
6. Presentation Layer — Interactive HTML dashboard

## Drawing Types Supported
- P&ID (Process & Instrumentation Diagram)
- ISO (Piping Isometric Drawing) → MTO extraction
- GA (General Arrangement) → Work Front planning

## Related
- [[Construction-Maven]]
- [[Critical-Path-Method]]
- [[FIDIC-Silver-Book]]
