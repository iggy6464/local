# 📊 BSI CDR Status Dashboard
**태그:** #dashboard #html #CDR #procurement  
**기간:** 2026-01-27 ~ 2026-04-01  
**최종 버전:** v15 (standalone) + MTL v115 통합본  
**데이터 소스:** `Master_MTL__Dataset_Ordering_R*.xlsx` (sheet: Rev.01 CP+FA)

---

## 개요

BSI K-ENSOL 자재 납기 파이프라인을 Discipline × Stage 방식으로 시각화하는 독립형 HTML 대시보드. 이후 MTL Dashboard v113에 세 번째 탭으로 통합됨.

---

## 핵심 기능

### Pipeline Bar Chart (Discipline별)
- 6단계 파이프라인: Not Ordered → Ordered → At Vendor → On Delivery → On-Site → Installed
- **Ordered / At vendor / On-site:** Item-count 기반 %
- **Installed:** Qty 기반 % (Σ Col S / Σ Col G)
- 숫자 컬럼 어노테이션 삭제 (가독성), Installed S/G% 상태 라벨만 유지

### Building Filter
- ALL / FA빌딩 / CP빌딩 드롭다운 필터
- `getRows()` helper function으로 구현 (모든 렌더 함수 공통 사용)

### Catch-up Plan Simulator
- H < G 부분 발주 포함한 qty-weighted 계산
- 패널 가시성 버그: `overflow-y: auto` + `flex: 1` 추가로 해결

### Manual CW Range Display
- X축 Display CW 범위를 수동으로 설정 가능
- Full range는 항상 todayCW → catch-up 100% CW로 고정
- `hideFrom` 로직 버그 수정 (Onsite 바 invisible 문제 → 모든 바 white 됐던 것)

### PDF Export
- html2canvas + jsPDF CDN 사용

---

## MTL 통합 (v113~) 방식

```javascript
// IIFE로 네임스페이스 격리
(function() {
    // CDR 전용 변수 및 함수 (cdr- prefix)
    window.cdrProcessFile = processFile;  // MTL upload handler에서 호출
})();
```

- HTML element ID 전부 `cdr-` prefix
- CSS class 전부 `cdr-` prefix  
- `ChartDataLabels` 플러그인 충돌 방지: `datalabels: { display: false }`
- `chartMain`, `allRows`, `todayCW` 등 MTL global 변수와 격리

---

## 주요 버그 이력

| 버그 | 원인 | 수정 |
|---|---|---|
| Onsite 바 안 보임 (50.1% 데이터 있음) | hideFrom 로직이 In-progress=0 시 전체 흰색 | hideFrom 분기 수정 |
| 빌딩 필터 적용 안 됨 | 각 함수 내 독립 데이터 로드 | getRows() helper 통일 |
| Catch-up Simulator 패널 안 보임 | cdrView container overflow 미설정 | flex:1, overflow-y:auto |
| v110 버전 번호 오표시 | 타이틀 미업데이트 | CDR 내부 버전 분리 관리 |

---

## 관련 Claude.ai 채팅 링크

- [도착기준 자재 시각화 (초기 개발)](https://claude.ai/chat/fac91b51-e47e-4502-a1b1-a34e451eb65e)
- [엑셀 업로드 후 대시보드 미표시](https://claude.ai/chat/f30ab8bb-21ac-4a96-9ce5-f905983af98e)
- [빌딩별 드롭다운 메뉴 추가 (1)](https://claude.ai/chat/697aaeba-b4df-46a1-ab6c-787d9101d3b5)
- [빌딩별 드롭다운 메뉴 추가 (2)](https://claude.ai/chat/8d0f5a43-eb03-4b9c-8037-401fd1fb22f7)
- [V11 발주현황 시각화 개선](https://claude.ai/chat/3592857e-faca-4b9c-94d8-e730137a73f2)
- [주문 비율 로직 검증 (v112→v115 통합)](https://claude.ai/chat/092a8c70-fe06-481c-a54d-42a2b79742bb)

---

## 관련 노트
- [[01_MTL_Dashboard_개발이력]]
- [[10_CW16_CW20_Catchup_Plan_Analysis]]
