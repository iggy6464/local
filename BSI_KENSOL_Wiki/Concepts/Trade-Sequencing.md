---
title: "Trade Sequencing"
type: concept
tags: [MEP, clash-detection, scheduling, zone-rolling]
sources: [schedule-conflict-optimization, trade-sequencing-analyzer]
last_updated: 2026-04-26
---

# Trade Sequencing (MEP Trade Ordering)

## Definition
동일 구역에서 복수 MEP 공종이 작업할 때, 충돌을 최소화하기 위한 작업 순서 결정.

## Standard Sequence
Fire Fighting → Duct → Electrical → Lighting → Piping

## BSI K-ENSOL Analysis
- 초기: **22개 충돌** 발견
- Full sequential: 충돌 0개, +147일
- [[Zone-Rolling-Strategy]]: 구역별 순차 작업으로 충돌 감소 + 일정 영향 최소화

## Related
- [[SCN-Analysis]]
- [[Zone-Rolling-Strategy]]
- [[Critical-Path-Method]]
