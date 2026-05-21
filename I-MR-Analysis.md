---
title: "I-MR Analysis"
type: concept
tags: [SPC, statistics, forecasting, quality-control]
sources: [pms-progress-curve-dashboard]
last_updated: 2026-04-26
---

# I-MR (Individual-Moving Range) Analysis

## Definition
통계적 공정 관리(SPC) 기법으로, 개별 관측값(I)과 연속 관측값 간 이동범위(MR)를 분석.

## Application in Construction
최근 5주 Actual 진행률 데이터로 I-MR 분석 수행:
- **X̄ (Mean)**: 평균 주간 진행률
- **MR̄**: 평균 Moving Range
- **UCL**: X̄ + 2.66 × MR̄
- **LCL**: X̄ - 2.66 × MR̄

## Forecast Integration
Forecast = Current Cumulative + X̄ × Remaining Weeks
100% 도달 시점 = (100% - Current%) / X̄

## Related
- [[S-Curve-Forecasting]]
- [[PMS-Progress-Curve]]
