---
title: "EPC Domain Invariants"
type: concept
tags: [invariant, domain-rule, verification]
sources: [mtl-dashboard-development, cdr-status-dashboard]
last_updated: 2026-04-26
---

# EPC Domain Invariants

## Definition
모든 코드 변경, 대시보드 업데이트에서 반드시 재검증해야 하는 불변 규칙.

## Active Invariants

### INV-1: CDR Start Date Rule
> [[CDR-Readiness-Milestone]]은 반드시 Start Date 사용

### INV-2: Material Balance
> `Column I (Not Ordered) = Column Q (Remaining to Order)`

### INV-3: On-Site Calculation
> On-Site % 계산에서 In-Transit 수량을 이중 카운트하지 않을 것

### INV-4: Unit Consistency
> Item-count 기반 로직과 Qty 기반 로직을 같은 차트에서 혼용하지 않을 것

## Verification Protocol
Bug report 접수 시: Code 문제인지 Data 문제인지 먼저 판별 → Data 문제일 경우 source 수정을 먼저 제안

## Related
- [[Material-Pipeline-Logic]]
- [[CDR-Readiness-Milestone]]
