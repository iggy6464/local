# 🗃️ 4주 Gantt PPT 툴 (임원보고용)
**태그:** #gantt #html #PPT #execution-plan #BSI  
**기간:** 2026-03-06  
**파일명:** `BSI_Execution_Plan_4Week_Gantt_Tool.html`  
**소스 PPT:** `2026_03_05_Daily_report_BSI_execution_V0_slide_13.pptx`

---

## 개요

임원 보고용 4주 공사 실행 계획을 PPT 슬라이드와 동일한 레이아웃으로 작성·출력하는 HTML 툴.  
브라우저에서 활동 입력 → Gantt 차트 자동 생성 → 이미지 파일로 캡처 → PPT에 붙여넣기 사용.

---

## 슬라이드 원본 분석

PPTX 분석 결과 (python-pptx):

### 구성 요소
- **상단 Timeline:** 4주 CW 헤더 (이번 주/W+1/W+2/W+3)
- **FA 빌딩 섹션:** Zone별 행 (Injection & Closing, Formation & Aging, Wrapping & EOL)
- **CP 빌딩 섹션:** Zone별 행 (Notching & Stacking, Calendering, Slitting, Mixing, Cell Assembly, Coating)
- **Activity Bar 색상:**
  - 파란색(Arch), 주황색(Mec), 노란색(Ele) 등 Discipline별 구분
  - MEP 타입: 별도 색상
- **Blocking Area:** 연한 회색 overlay + ⚡ lightning bolt + memo 텍스트

### 활동 예시 (슬라이드 13)
```
FA1 / Injection & Closing: Duct & Panel, Axis A col 18-26
CP1 / Mixing: Design and installation sequence changes (blocking)
CP1 / Notching: Design changes because of installation line changes (blocking)
```

---

## 툴 기능

### Section 1: Timeline 설정
- 기준 주 (CW 번호) 입력 → W, W+1, W+2, W+3 자동 라벨 생성

### Section 2: Activity 입력
- Building (FA/CP) + Zone 선택
- Discipline 선택 (Arch/Mec/Elec/HVAC/MEP 등)
- Start Day / End Day (1~28 범위)
- Activity 이름 입력
- Completion Milestones 마킹

### Section 3: Blocking Area 입력
- Zone + Blocking Reason (Memo) + Start/End Day
- 해당 zone에 연한 회색 반투명 overlay 자동 생성
- overlay 중앙에 빨간 ⚡ lightning bolt 표시
- Blocking List에서 개별 삭제 가능

### 출력
- 화면 캡처 → 이미지 파일 → PPT에 붙여넣기

---

## playwright 검증 결과

| 테스트 | 결과 |
|---|---|
| 4주 Timeline 렌더링 | ✅ |
| FA/CP 빌딩 Zone 행 | ✅ |
| 다색 Activity Bar | ✅ |
| Blocking overlay + ⚡ | ✅ |
| Memo 텍스트 | ✅ |

---

## 관련 Claude.ai 채팅 링크

- [PPTX 기반 Gantt HTML 툴 개발 계획](https://claude.ai/chat/ffc1afb5-66d7-4fbc-a05e-b21fe0ba9f3a)

---

## 관련 노트
- [[03_SCH_Gantt_Dashboard]]
- [[15_Manpower_Daily_Report_Analysis]]
