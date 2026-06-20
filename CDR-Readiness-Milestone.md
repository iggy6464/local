---
title: "CDR Readiness Milestone"
type: concept
tags: [CDR, milestone, invariant, start-date]
sources: [cdr-status-dashboard, mtl-dashboard-development]
last_updated: 2026-04-26
---

# CDR Readiness Milestone

## Domain Invariant (반드시 준수)
> CDR Readiness Milestone은 항상 **Start Date** 사용. Finish Date 아님.

## Rationale
- Start Date = 건설이 장비 반입을 위해 준비 완료된 시점
- 이것이 Milestone의 정의와 일치
- Float 계산: Driver Activity Finish → CDR Start 기준

## Violation History
초기 대시보드 버전에서 Finish Date를 사용하여 Float 계산 오류 발생. 이후 invariant로 등록.

## Related
- [[CDR-Status-Dashboard]]
- [[EPC-Domain-Invariants]]
