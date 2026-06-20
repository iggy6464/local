# 🔄 Trade Sequencing Analyzer (V1 → V2)
**태그:** #CPM #schedule #clashing #html #MEP  
**기간:** 2026-02-20 ~ 2026-03-04  
**버전:** Trade_Sequencing_Analysis_V1 → V2  
**데이터 소스:** PAE Master Schedule Excel (Aconex), Synergy Work Schedule Excel

---

## 개요

MEP 공종 간 Trade Sequence를 분석하고 CPM(Critical Path Method) 기반 Float 계산, 충돌 감지, 최적 작업 순서를 시각화하는 HTML 툴.

---

## 핵심 기능

### CPM Forward/Backward Pass
```
ES (Early Start) / EF (Early Finish): Forward Pass
LS (Late Start) / LF (Late Finish): Backward Pass
Total Float = LS - ES
Free Float = min(ES_successor) - EF
```

- P6 파일: 실제 Predecessor 링크 (1,790개) 기반 계산
- Synergy 파일: 그룹 내 순차 + 크로스존 연결 가정

### 공종 의존성 체인 (가정)
```
Arc (Ceiling) → Mec (Duct) → Ele/Elc → Ins → Alc → Oth
```

> **핵심 제약:** Ceiling Panel 완료 후에만 MEP 작업 시작 가능

### MEP Clash Detection
- Step1 미완료 중 Step2 시작: **181건** (P6 파일 기준)
- 삭제된 오탐: 선행관계 위반(747건), 이종 공종 병행(2,874건)

### View Modes (3가지)
1. **Gantt Timeline** — 활동별 기간 바
2. **Critical Path Table** — Float 기준 정렬 테이블
3. **Zone Impact** — 존별 Impact 매트릭스

### Sort Modes (5가지)
- CP-First / Span / Float / Finish / Default

---

## 파서 자동감지 (V2)

| 파일 유형 | 감지 기준 | 파서 |
|---|---|---|
| P6 Excel (Aconex) | Col A에 `BSI` prefix | P6 모드 |
| Synergy Excel | BSI prefix 없음 | SYNERGY 모드 |

### 파싱 결과 (P6 파일)
- **787개 활동** 파싱 성공
- Date suffix 제거: `02-Apr-25 A` → `02-Apr-25`
- `Name*` 헤더: `*` 제거 후 인식
- Start 컬럼 중복(E열/R열): First-match 로직 → E열(col 4)만 사용

---

## V1 → V2 주요 변경사항

| 항목 | V1 | V2 |
|---|---|---|
| 파서 | 단일 모드 | P6 / Synergy 자동 감지 |
| 충돌 감지 | 모든 overlap 탐지 | Step-sequence 위반만 (181건) |
| CPM 계산 | 가정 순차 의존성 | P6 Predecessor 링크 실제 반영 |
| Building 감지 | 컬럼 기반 | Activity ID 코드 (`C01A`→FA1) 자동 매핑 |
| 데모 모드 | 없음 | `loadDemo()` + DEMO_PREV 비교 |

---

## 관련 Claude.ai 채팅 링크

- [Activity CPM 필터 버튼 FA/CP 작동 오류](https://claude.ai/chat/69d54d33-28c1-45dc-a626-ad2ba0cc158d)
- [타임블록 이동 시 Critical Path 표시 로직](https://claude.ai/chat/a1807892-c34d-4054-aeb0-b47feef273ba)
- [파서 업데이트 및 충돌감지 검증](https://claude.ai/chat/ca99a0c5-1db6-4736-bcc9-5f937f02d070)
- [엑셀 D,E 컬럼 파싱 수정 (V2)](https://claude.ai/chat/b78d882c-22be-4015-b409-bda7d67f67fb)
- [2shift Running 파일 결과 비교](https://claude.ai/chat/ec64ca79-ec4a-4745-bc97-9f17d7a28da8)
- [충돌 최적화 SCN-1/2/3 Word 보고서](https://claude.ai/chat/c7867ff1-fe4e-48c9-8413-e92f2c6d5c66)

---

## 관련 노트
- [[03_SCH_Gantt_Dashboard]]
- [[12_Schedule_Conflict_Optimization]]
