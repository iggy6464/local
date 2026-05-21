# 🚨 CW16/CW20 Catch-Up Plan 분석
**태그:** #catchup #FA1 #CP1 #manpower #procurement #analysis  
**기간:** 2026-04-12  
**데이터:** `Master_MTL__Dataset_Ordering_R6_8Apr26.xlsx` + `Daily Progress PDF (3장)`  
**마감:** FA1 = 2026-08-18, CP1 = 2026-09-19

---

## 개요

CW16 → CW20 기간의 자재 납기 현황과 Manpower Loading을 대조 분석하고, FA1/CP1 건물별 Catch-Up Plan을 수립한 종합 분석 보고서.

---

## 1. 데이터 구조 파악

### Excel (R6, CW20 기준)
- 총 3,388 line items
- Sheet: `Rev.01 (CP+FA)`
- 컬럼 F: Lead Time (weeks)
- 컬럼 N: Construction Required CW

### PDF 인력 그래프
- 총 3장: 전체 빌딩 / FA1 MP loading / CP1 MP loading

---

## 2. 자재-인력 일치도 분석

| 구분 | 자재 입고 CW | MP 피크 CW | 일치도 |
|---|---|---|---|
| FA1 Steel Structure | CW5~CW10 | CW6~CW11 | ✅ 일치 |
| FA1 HVAC/Duct | CW14~CW20 | CW15~CW22 | ✅ 일치 |
| FA1 Electrical | CW16~CW22 | CW18~CW25 | ⚠️ 2주 lag |
| CP1 PIPING | CW18~CW25 | CW20~CW28 | ⚠️ 2주 lag |

> **진단:** 전반적으로 Electrical/Piping 공종에서 자재가 2주 늦게 입고되어 인력 투입 대비 자재 공급이 지연되는 패턴 확인.

---

## 3. 핵심 위기 지표 (CW16 → CW20 변화)

| 지표 | CW16 | CW20 | 변화 |
|---|---|---|---|
| 미발주 아이템 | ~3,000 | ~2,800 | -200 (불충분) |
| FA1 Electrical LLI | 8개 | 6개 해결 | 여전히 2개 미해결 |
| CP1 PIPING 미발주 | 46% | 41% | 5%p 개선 |
| 전체 On-Site % | 5.5% | ~8% (추정) | 인력 투입 대비 여전히 낮음 |

---

## 4. 5개 전략 (선정: A+B+D)

| ID | 전략명 | 내용 | 선정 |
|---|---|---|---|
| A | Drawing Blocker 해소 | 미확정 도면 TOP-25 우선 처리 | ✅ |
| B | 조기 발주 + 분할 납기 | Long Lead Item 즉시 발주 | ✅ |
| C | Zone Rolling 가속 | Scissor lift 구역 분리 병행 | (검토) |
| D | Subcon 생산성 강화 | 2-shift, 추가 인력 | ✅ |
| E | Air Freight | 항공 운송 76 LLI | ❌ (Owner-side 현실 고려 제외) |

---

## 5. CW28 Sprint Target (8주)

| Building | 지표 | CW20 현재 | CW28 목표 |
|---|---|---|---|
| FA1 | Ordered % | ~60% | 85% |
| FA1 | On-Site % | ~8% | 35% |
| CP1 | Ordered % | ~55% | 80% |
| CP1 | On-Site % | ~5% | 25% |

---

## 6. 산출 deliverable

- `BSI_CatchUp_CW20_v2.pdf` — 임원보고 Deck 12 slides
- `CatchUp_Plan_CW20_DeepDive.docx` — 영문 24p (Section 1~9 + Appendix A/B)
- `CatchUp_Plan_CW20_DeepDive_KR.docx` — 한글 12p
- `MTL_CatchUp_R7.xlsx` — 5 tabs (R7 baseline + FA1/CP1 비교)

### Deck Slide 구성 (12 slides)
| Slide | 내용 |
|---|---|
| 1~7 | CW16 baseline 분석 (Status Mix, MP Alignment, Critical Paths) |
| 8 | CW20 Catch-Up Plan Overview |
| 9~10 | FA1 Catch-Up Plan (Diagnosis + 8주 Roadmap) |
| 11~12 | CP1 Catch-Up Plan (Diagnosis + 8주 Roadmap) |

---

## 관련 Claude.ai 채팅 링크

- [현장 자재 납기 및 인력 현황 분석](https://claude.ai/chat/ac5da8a0-a5d7-4c07-8643-90ea9da44283)

---

## 관련 노트
- [[01_MTL_Dashboard_개발이력]]
- [[02_CDR_Status_Dashboard]]
- [[15_Manpower_Daily_Report_Analysis]]
