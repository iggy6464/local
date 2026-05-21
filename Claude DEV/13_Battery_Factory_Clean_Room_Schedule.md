# 🏭 배터리 공장 Clean Room 공정 스케줄
**태그:** #schedule #FA1 #CP1 #cleanroom #dryroom #MEP #v15  
**기간:** 2026-03-19 ~ 2026-03-21  
**버전:** v1 → v15 (15회 반복)  
**데이터:** Master Schedule Excel + SK Battery Formation Building PDF (154페이지 한국어)  
**마감:** FA1 = 2026-09-01, CP1 = 2026-10-12

---

## 개요

FA1/CP1 클린룸·드라이룸 건설의 공종 시퀀스를 산업 레퍼런스 기반으로 재조정한 작업 스케줄.  
SK Battery 실적 M/D 데이터로 회귀분석하여 공기 적정성 검증까지 포함.

---

## 2-Track Parallel System

### Architectural Track (FA: CW49 시작, CP: CW01 시작)
- Wall Structure → Wall Panel → Ceiling Structure → Ceiling Panel

### MEP Track (FA/CP 공통: May 1 이후)
- Duct → Utility Piping → Cable Tray → Raceway → UPS → FMCS

---

## 스케줄 규칙 (v15 확정본)

| 규칙 | 내용 |
|---|---|
| Wall Structure 시작 | Feb 20 ±5~6일 jitter |
| Wall Panel 시작 | Wall Structure +4~5일 |
| Ceiling Structure 시작 | Wall Panel 2/3 완료 시점 (≥30% overlap 보장) |
| Arc_Ceiling Panel | Ceiling Structure 1주 전 시작 → Flooring -1일 까지 |
| Mec_Duct | mid-April 시작 |
| 공종 간 overlap | 15% (MEP 체인 전반) |
| MEP 기간 | 12~14주 (2x 확장) |
| Level별 기간 감소 | 6% per floor level (자원 stagger 18~21일) |
| Flooring 시작 조건 | **모든 MEP 완료 후** (hard constraint) |
| Flooring 완료 | 마감일 -15일 |
| Clean-Up | 절대 마지막, 마감일에 종료 |

> **CP Building 특이사항:**
> - Mixing/Coating Zone: +17~18% 기간 연장 (우선 공정)
> - Level +9.10 이상: Mec_HVAC Equipment + Chimney 명칭 적용

---

## v15 검증 결과

| 지표 | 결과 |
|---|---|
| Flooring 전 MEP 완료 위반 | **0건** (전 Zone) |
| FA1 완료일 | 2026-09-01 이하 |
| CP1 완료일 | 2026-10-12 이하 |
| Human-like jitter 적용 | ✅ (결정적 해시 기반 ±10% 기간, ±1~2일 시작) |

---

## SK Battery 회귀분석 결과

**25개 Room 데이터 포인트 기반:**

```
Duration = 0.0067 × Qty(㎡) − 18.8 × Ceiling(0/1) + 39.3   (R²=0.606)
Total M/D = 0.3737 × Qty(㎡) − 106 × Ceiling(0/1) + 103      (R²=0.978)
```

**스케일 비교:**
- SK Battery: 95,538 M/D (총 프로젝트)
- PowerCo CRDR 추정: ~45,000 M/D (47% 규모)
- Piping 비중: SK의 48% → PowerCo에서도 리스크 구간

**검증:** v15 기간 중 70%가 허용 범위 내 ✅

---

## 관련 Claude.ai 채팅 링크

- [배터리 공장 공정 스케줄 최적화 분석 (PowerCo CRDR)](https://claude.ai/chat/dd538217-4574-4c44-b793-3a1a0f70e7e5)
- [배터리공장 클린룸 공정일정 재조정 v1~v15](https://claude.ai/chat/67fe10db-1d2b-4abf-8eb1-79a90e5709b3)

---

## 관련 노트
- [[12_Schedule_Conflict_Optimization]]
- [[14_HVAC_Commissioning_Schedule]]
- [[03_SCH_Gantt_Dashboard]]
