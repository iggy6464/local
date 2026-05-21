---
title: "Critical Path Method"
type: concept
tags: [CPM, scheduling, float, forward-pass, backward-pass]
sources: [critical-path-battery-factory, schedule-conflict-optimization]
last_updated: 2026-04-26
---

# Critical Path Method (CPM)

## Definition
네트워크 분석 기법으로 프로젝트의 최장 경로(Critical Path)를 식별하여 최소 프로젝트 기간을 결정.

## Core Calculations
- **Forward Pass**: ES(Early Start), EF(Early Finish) 계산
- **Backward Pass**: LS(Late Start), LF(Late Finish) 계산
- **Total Float**: LS - ES 또는 LF - EF
- **Free Float**: 후속 활동의 ES - 현재 활동의 EF

## BSI K-ENSOL 적용
- MPP 파일 기반 1,515개 활동 분석
- Critical Path 활동: **31개 (2.05%)**
- Critical Path 기간: **230일**
- Total Float: **0일**

## Related
- [[Trade-Sequencing]]
- [[SCN-Analysis]]
- [[CDR-Readiness-Milestone]]
