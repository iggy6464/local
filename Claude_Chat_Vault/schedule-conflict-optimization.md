---
title: "Schedule Conflict Optimization"
type: source
tags: [schedule, clash-detection, trade-sequencing, SCN]
sources: []
last_updated: 2026-04-26
---

# Schedule Conflict Optimization (SCN-1/2/3)

## Summary
Excel 기반 스케줄 파일(2_shift_SYN.xlsx, 2shift_Running.xlsx)의 Clash Detection 분석. Trade Sequencing Analysis 대시보드 생성.

## Key Analysis
- 초기 분석: **22개 충돌** 발견 (동일 zone에서 복수 MEP trade 동시 작업)
- Full Sequential MEP ordering: Fire Fighting → Duct → Electrical → Lighting → Piping
- 결과: 모든 22개 충돌 해소, 단 스케줄 **~147일 연장**

## Three Scenarios
- **SCN-1**: Partial overlap 허용, 충돌 12개 → 10개 감소
- **SCN-2**: Zone-based rolling, 충돌 22개 → 5개 감소  
- **SCN-3**: Full sequential, 충돌 0개, +147일

## Related
- [[Trade-Sequencing]]
- [[SCN-Analysis]]
- [[Zone-Rolling-Strategy]]
