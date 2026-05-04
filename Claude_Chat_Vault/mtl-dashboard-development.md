---
title: "MTL Dashboard 개발 이력"
type: source
tags: [dashboard, material, tracking, HTML, JavaScript]
sources: []
last_updated: 2026-04-26
---

# MTL Dashboard 개발 이력 (v40 → v117)

## Summary
BSI K-ENSOL 프로젝트의 자재 추적 및 물류 관리를 위한 HTML 기반 대시보드. 2026년 1월부터 4월까지 약 80개 버전을 거치며 발전.

## Key Milestones
- **v40~v95**: 초기 Excel 파서, Pie/Bar 차트, AI Mode 도입
- **v95~v104**: Handsontable Editor 통합, Overdue Items Analysis, Ordering Plan Side Panel
- **v104~v110**: Progress Curve 개선 (Item Count 기반 S-Curve), 3-Week Look-Ahead Plan, Carry-Over Logic
- **v110~v116**: ARCH/MEP 분리, Multi-stage Pipeline Logic, Diagnostics Tab (Full Pipeline Achievement, Treemap, Bulk Simulator)
- **v116~v117**: CDR Status 내장, Material Progress Curve 2×2 Grid (EA/M2/MZ/KG)

## Core Data Model
Excel 컬럼 매핑: A=Discipline, B=Building, F=Lead Time, G=Total Qty, H=Ordered, I=Not Ordered, N=Required CW, O=Latest Order CW, P=ETA CW

## Domain Invariants
- `Column I (Not Ordered) = Column Q (Remaining to Order)` — 이 등식이 깨지면 data integrity 문제
- On-Site % 계산에서 In-Transit 수량을 이중 카운트하지 않을 것
- Item-count vs Qty-based 로직을 혼용하지 않을 것

## Related
- [[MTL-Dashboard]]
- [[Material-Pipeline-Logic]]
- [[LLI-Criticality]]
- [[CDR-Readiness-Milestone]]
