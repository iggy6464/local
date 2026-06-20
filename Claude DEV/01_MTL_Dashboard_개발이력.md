# 📊 MTL Dashboard 개발 이력
**태그:** #dashboard #html #procurement #MTL  
**기간:** 2026-01-16 ~ 2026-04-10  
**최종 버전:** v116  
**데이터 소스:** `Master_MTL__Dataset_Ordering_R*.xlsx`

---

## 개요

BSI K-ENSOL EPC 프로젝트의 자재 구매 추적 (3,388 line items, FA1+CP1 빌딩, 9개 공종)을 위한 단독 HTML 대시보드. Excel 업로드 → 브라우저 렌더링, 서버 불필요.

---

## 버전 계보

```
v40  →  v95  →  v98  →  v100  →  v104  →  v107  →  v110  →  v111  →  v113  →  v114  →  v115  →  v116
```

---

## 핵심 설계 결정 사항

### 1. 계산 기준: Item Count vs Qty
- **잘못된 초기 방식:** Qty 기반 평균 → KG 등 대형 단위가 수치 왜곡
- **확정 기준:** **Item Count 기반** (발주 아이템 수 / 전체 3,388)
- 단, Installed % 만 예외적으로 Qty 기반 (Σ Col S / Σ Col G)

> 🔑 **invariant:** 전체 KPI 수치는 item-count 기준. 이종 단위(M2, KG, MZ, EA) 혼합 평균은 무의미.

### 2. Stage 분류 로직 (5단계)
```
itemActualStage(item):
  if S > 0      → Installed (Col S: 현장 설치량)
  if K > 0      → On-Site (Col K: 현장 입고량)
  if L > 0      → In-Transit (Col L: 운송 중)
  if H > 0      → Ordered (Col H: 발주량)
  else          → Not Yet Ordered
```

> **주의:** 부분 발주 (H < G) 포함 시 `ord < qty` 조건 사용

### 3. 컬럼 인덱스 매핑 (Rev.01 기준, 0-indexed)
| Col Letter | Index | 내용 |
|---|---|---|
| A | 0 | Discipline |
| B | 1 | Building (FA/CP) |
| F | 5 | Lead Time (weeks) |
| G | 6 | Total Qty |
| H | 7 | Ordered Qty |
| I | 8 | Not Ordered (= G - H) |
| K | 10 | Delivered at Site |
| L | 11 | In Transit / Preparation |
| N | 13 | Required CW (현장 필요 주차) |
| O | 14 | Plan Order CW |
| P | 15 | ETA CW (= O + Lead Time) |
| S | 18 | Installed at Site |

---

## 탭 구성 (v115 기준)

### Tab 1: Dashboard
- 4개 Unit Card (EA/M2/MZ/KG): Total / Ordered / In-Transit / On-Site / Installed item count
- Material Progress Curve: 2×2 그리드 (EA/M2/MZ/KG), CW 기반 누적 라인
  - Plan (빨간 점선) / Ordered / In-Transit / On-Site / Installed
- Pie Chart: 5단계 stage 분포
- Overdue Items Analysis: planCW < TODAY_CW AND ord < qty 기준 바차트
- 3-Week Ordering Plan: 프린트 가능, 서명란 포함

### Tab 2: AI Analysis (AI Mode)
- 초기에는 Unit Trend + LLI 그래프 존재 → v107.6에서 삭제됨

### Tab 3: CDR Status (v113 통합)
- BSI CDR Status Dashboard 내장
- 단일 엑셀 업로드 시 MTL + CDR 동시 렌더링
- IIFE로 네임스페이스 격리, `window.cdrProcessFile`로 외부 노출

### Tab 4: Diagnostics (v115 신규)
- Discipline Plan vs Actual 파이프라인 테이블
- Full Pipeline Achievement 4단계 바차트 (Qty 기반)
- Bulk Item Order-to-Arrival Simulator

---

## 주요 버그 및 수정 이력

| 버전 | 버그 | 원인 | 수정 |
|---|---|---|---|
| v110 | On-Site % 100% 오류 | In-Transit + Delivered 합산 | Delivered only로 수정 |
| v113 | CDR 탭 안 보임 | processFile IIFE 스코프 밖 불가 | window.cdrProcessFile 노출 |
| v114 | "Site Arrived 5.5%" 오류 | 구 버전 데이터 + Qty 평균 방식 | Item count basis로 전환 |
| v115 | Diagnostics 로딩 스피너 무한 | `let rawData` → window 미노출 | window.rawData 할당 추가 |
| v115 | Forecast 100% 초과 | Overdue 아이템 중복 집계 | 중복 제거 로직 추가 |
| v116 | In-Transit + On-Site 합 오류 | Col K/L 컬럼 혼용 | 검증 후 수정 |

---

## 관련 Claude.ai 채팅 링크

- [초기 v40 개발](https://claude.ai/chat/1830d8ba-80ef-4b98-896d-a510a80b0a90)
- [v95 오류 분석](https://claude.ai/chat/d049f1db-1119-4965-a8ec-e97999c7b918)
- [v100 오류 수정](https://claude.ai/chat/014e93d5-75e0-4a58-91b4-8407ce4942d0)
- [Arrival at Site 자재 시각화](https://claude.ai/chat/fac91b51-e47e-4502-a1b1-a34e451eb65e)
- [Material Progress Curve forecasting 검증](https://claude.ai/chat/d4936e73-2efb-4f23-bb2e-688437fdcbc7)
- [3주 선행계획 발주품목 상세](https://claude.ai/chat/1b639d7f-e7bc-4d2c-a758-efdea7ebc226)
- [프린트 서명란 추가](https://claude.ai/chat/7d190f21-5c1f-431c-82d0-3b23b44921aa)
- [CW7 발주지연 1827 검증](https://claude.ai/chat/aa29009b-6f79-4b59-b060-3f564024d0f1)
- [Site arrived % 검증](https://claude.ai/chat/dfb9e25d-a169-4894-b0f7-9ca76167ec8e)
- [좌측 발주현황 수정](https://claude.ai/chat/c2088ac8-7e07-456c-a02d-c49e1afb154a)
- [MTL v115 Diagnostics Tab](https://claude.ai/chat/c2088ac8-7e07-456c-a02d-c49e1afb154a)
- [In transit/On site 합계 검증](https://claude.ai/chat/3cb65319-1cae-43d6-ac21-24c3856e7a14)

---

## 관련 노트
- [[02_CDR_Status_Dashboard]]
- [[10_CW16_CW20_Catchup_Plan_Analysis]]
