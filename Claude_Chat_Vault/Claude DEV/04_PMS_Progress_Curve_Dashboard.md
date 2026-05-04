# 📈 PMS Progress Curve Dashboard
**태그:** #dashboard #html #progress #S-curve #IMR  
**기간:** 2026-01-29 ~ 2026-02-10  
**버전:** v19 → v38  
**데이터 소스:** `Master_MTL__Dataset_*.xlsx` (Schedule - Planned / Schedule - Actual sheets)

---

## 개요

Material 납기 진도를 누적 S-Curve로 표시하는 독립형 HTML 대시보드. Plan / Actual / Forecast 세 라인과 I-MR 기반 생산성 분석 기능 포함.

---

## 핵심 기능

### S-Curve 3-Line Chart
- **Plan (파란선):** Planned 시트의 CW별 누적 %
- **Actual (초록선):** Actual 시트의 CW별 누적 %
- **Forecast (보라 점선):** 현재 Actual에서 I-MR 기반 미래 예측

### I-MR Forecasting (v9.3+)
```
최근 5주 Actual 데이터 → I-MR 분석
X̄ = 평균 주간 진행률
MR̄ = 평균 Moving Range
UCL = X̄ + 3 × (MR̄/1.128)
LCL = max(0, X̄ - 3 × (MR̄/1.128))
Forecast = 현재 누적% + X̄ × 잔여 주차
```

> **검증 결과:** 기존 Linear Forecast는 CW4→CW11에서 3.7%→79.6% 급등 (KG 5개 아이템 2,200,000 KG이 CW11에 집중됨). Item Count 기반으로 전환 후 자연스러운 S-curve 확보.

### Unit Selection
- EA / M2 / MZ / KG 단위별 개별 필터링
- 이종 단위 혼합 방지 → 수치 왜곡 제거

### CW Range Selector
- CW01~CW52 범위 수동 선택
- CW25 종료 균등분포 Plan 자동 생성
- Editor(Handsontable)에 데이터 기록 → 사용자 수정 가능

### Excel Export
- SheetJS XLSX 내보내기

### Holiday Factor UI
- 사용자 직접 입력 가능 (하드코딩 제거)
- 주차별 Holiday Factor 적용 후 Forecast 재계산

---

## 핵심 버그 수정

| 버그 | 수정 |
|---|---|
| Forecast 선이 급격히 상승 | Item count 기반으로 전환 + KG 단위 분리 |
| S-curve 안 보임 | 엑셀 헤더 행 위치 (Row 3, Col AM-BG) 정확히 파싱 |
| localStorage Save Error | 5MB 초과 시 try-catch + silent 모드 |
| Handsontable 필터링 오류 | isMtlMode 분기 제거, 단일 데이터 소스 사용 |

---

## 엑셀 파싱 구조 (검증됨)

| 위치 | 내용 |
|---|---|
| Row 2, Col AM-BG | CW 라벨 (CW1~CW21) |
| Row 3, Col AM-BG | 날짜 |
| Rows 5-81, Col AM-BG | Weight Factor 데이터 |
| 정규화 | 전체 WF 합계(~4.99875)로 나눠 100% 기준 |

---

## 관련 Claude.ai 채팅 링크

- [Material Progress Curve forecast trend 수정](https://claude.ai/chat/0715728c-71a9-4e6a-abe6-97960ffc8861)
- [엑셀 업로드 후 save error 해결](https://claude.ai/chat/e946f53f-9e29-46a5-88de-c4e0d0ee3af4)
- [Forecast 검증 및 급등 문제](https://claude.ai/chat/d4936e73-2efb-4f23-bb2e-688437fdcbc7)
- [Overdue Items Analysis 개발](https://claude.ai/chat/0715728c-71a9-4e6a-abe6-97960ffc8861)
- [Progress chart 주차 선택 + CW25 자동 생성](https://claude.ai/chat/a96c0094-eb27-4fd6-8b1e-a81b415bcc82)
- [Forecast S-curve 수정 v19→v23](https://claude.ai/chat/d02ddc64-0794-46a6-b8cf-f58faa1486f4)
- [I-MR + Excel Export + Holiday Factor (v9.3)](https://claude.ai/chat/338af1d7-f61a-4c73-ae01-8a2334670715)
- [Progress curve Forecast line 검증](https://claude.ai/chat/e1bff7cf-6e10-44fd-8024-3a591bb2aa98)
- [그래프 숫자 표시 오류 수정](https://claude.ai/chat/d4936e73-2efb-4f23-bb2e-688437fdcbc7)

---

## 관련 노트
- [[01_MTL_Dashboard_개발이력]]
- [[10_CW16_CW20_Catchup_Plan_Analysis]]
