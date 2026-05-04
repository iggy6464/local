# 🏗️ 배터리 공장 건설 스케줄 관리 웹앱
**태그:** #gantt #html #webapp #schedule-management  
**기간:** 2026-02-09  
**파일명:** `배터리공장_건설스케줄.html`  
**기능:** Gantt 차트 시각화, 공정별 진행률, 일정 입력/편집, 대시보드, CSV 업로드

---

## 개요

배터리 공장 건설공사 스케줄을 관리하는 경량 웹앱. HTML 단독 파일, 서버 불필요.

## 핵심 기능

- **Gantt 차트:** SVG 기반 드래그-에딧 가능 바차트
- **공정별 진행률:** Phase별 % 추적 (토건/철골/마감/기계/전기/시운전)
- **데이터 관리:** CSV/Excel 업로드
- **대시보드:** KPI 카드, 달성률 요약

## 디자인 방향

- 다크 테마 (`#0a0e17` 배경)
- JetBrains Mono 폰트 (타임라인 영역)
- Noto Sans KR (한국어 레이블)
- Accent 색상: `#00d4aa` (청록)

## 관련 Claude.ai 채팅 링크
- [배터리 공장 건설공사 스케줄 관리 웹앱](https://claude.ai/chat/0023ae69-8d35-4eb2-b4e0-6abb4f321c4f)

---

# 🔍 BOQ Extractor (OCR 기반)
**태그:** #OCR #BOQ #piping #mechanical #tesseract  
**기간:** 2026-04-13  
**파일명:** `BOQ_Extractor_Step2.html`  
**기술:** Tesseract.js v5 + PDF.js + SheetJS

---

## 개요

P&ID 또는 ISO 도면 이미지/PDF에서 Piping/Mechanical BOQ 항목을 자동 추출하는 OCR 툴.

## 구현 단계

### Step 1: 이미지 OCR (기본)
- Tesseract.js `eng` 언어팩으로 텍스트 추출
- 정규식 패턴으로 BOQ 아이템 파싱 (Description, Unit, Qty)
- 매칭 실패 라인 별도 표시 (Unmatched List)

### Step 2: PDF 지원 추가
- pdf.js `scale: 2.0` (144 DPI) → 고품질 렌더링
- 페이지 네비게이션 (◀ ▶ 버튼)
- 동일한 Tesseract 파이프라인 재활용
- Status 메시지: `"Extraction Complete (PDF p.1/5) — 12 items matched"`

### Step 3 (계획): CSV Export + 클립보드 복사

## 관련 Claude.ai 채팅 링크
- [건설 BOQ 추출 도구 코드 수정](https://claude.ai/chat/cffb3201-7dea-4056-a8f5-258771ef2b87)

---

# 👥 Construction Team R&R Dashboard
**태그:** #team #RR #google-sheets #apps-script  
**기간:** 2026-03-13  
**파일명:** `Construction_Team_RR_Dashboard.html`  
**아키텍처:** HTML ↔ Google Apps Script Web App ↔ Google Sheets

---

## 개요

20명 건설팀의 역할 분담(R&R) 및 업무 현황을 관리하는 대시보드.  
Google Apps Script를 통해 Sheets와 실시간 연동, 30초 자동 새로고침.

## 팀 구성 (9개 Discipline 그룹)

| Discipline | 인원 |
|---|---|
| Management (CM, Construction Support, Assistance) | 3명 |
| Architecture | 2명 |
| Piping | 2명 |
| Electrical | 2명 |
| FMCS | 2명 |
| Fire Fighting | 2명 |
| HVAC | 2명 |
| HSE | 2명 (HSE Officer 전담) |
| Quality | 2명 |
| **합계** | **21명** |

## 7개 업무 카테고리

시공/설치, 자재/장비, 발주처/Interface, HSE, 품질/Quality, 주기업무, 행정

## 4개 탭 구성

1. **Overview** — KPI 카드, 전체 현황
2. **업무목록** — 필터링 가능한 Task 테이블
3. **Workload** — Discipline별 부하 시각화
4. **R&R** — 직무별 책임 매트릭스

## 수정 포인트 (파일 내 3곳)

```
★ STEP 1: Apps Script Web App URL 입력
★ STEP 2: MEMBERS 배열 (이름/직급/업무)
★ STEP 3: INITIAL_TASKS 샘플 데이터
```

## 관련 Claude.ai 채팅 링크
- [로컬 HTML과 Google Sheets 자동 연동](https://claude.ai/chat/6486a643-efe6-4962-b1e9-252d81f3711a)
