# 🤖 Construction Maven 시스템
**태그:** #AI #maven #palantir #construction-PM #HTML  
**기간:** 2026-03-10 ~ 2026-03-23  
**버전:** V1 → V4  
**파일명:** `construction-maven-v2.html`, `Maven_WorkPlatform_V4.html`  
**참고 아키텍처:** US DoD Maven Smart System + Palantir AIP + Palantir Foundry Ontology

---

## 개요

DoD Maven 아키텍처를 벤치마킹하여 건설 프로젝트 관리에 특화된 AI-powered 플랫폼 설계 및 구현.  
**제로 외부 의존성** — 순수 HTML/CSS/JS, React/JSX 없음, CDN 없음.

---

## Maven vs Construction Maven 비교

| 차원 | Military Maven | Construction Maven |
|---|---|---|
| 입력 소스 | 위성/드론 영상 | P&ID, ISO 도면, DPR |
| 처리 엔진 | Claude Vision + Palantir AIP | Claude Vision + Claude Sonnet |
| 온톨로지 | 군사 목표물 분류 | Activity/Zone/Material/Resource |
| Kill Chain | 6단계 (감지→결정→교전) | 5단계 (OCR→Validate→Score→Recommend→Confirm) |
| Human-in-the-Loop | 교전 승인 | Risk 조치 승인 |

**유사도 점수:** 현재 52% → 목표 87% → 이론 최대 96%  
*(Maven Similarity Analysis Dashboard 기준)*

---

## 아키텍처 (6 Layers)

### Layer 1: Drawing OCR
- Claude Vision API로 P&ID/ISO 도면에서 태그 추출
- 추출 대상: 용접부 수, 피팅, 플랜지, 배관 길이

### Layer 2: Data Pipeline (4단계)
```
Ingest → Validate → Cross-map → Ontology Sync
```
- MCAA/NECA/AISC 생산성 기준 자동 Man-Hour 계산

### Layer 3: Ontology (10 Object Types)
```
Project → Building → Zone → Activity → Resource
Material → Risk → FIDIC_Event → ProductionRate → DailyReport
```

### Layer 4: Claude AI Engine
System Prompt에 내장된 도메인 지식:
- FIDIC Silver Book 조문 (Clause 8.4, 8.6, 20.1)
- 생산성 기준 DB (배관 직경별 용접 시간 등)
- 공간 제약 (scissor lift footprint)
- 학습 곡선 (Learning Curve Factor)
- 기후 조정 계수 (Climate Adjustment)
- 출력: JSON verdict `{status: PASS/WARNING/FAIL, confidence: P50/P70/P85}`

### Layer 5: Dashboard
- Schedule Analysis
- Work Front Simulation (Zone Rolling Matrix)
- Risk Management (FIDIC 28일 notice 추적)
- Duration Adequacy (Monte Carlo 3 시나리오)

### Layer 6: Google Sheets Sync
- Apps Script Web App (doGet/doPost)
- Upsert 로직
- FIDIC notice 이메일 알림
- Pipeline run 로그

---

## V4 단독 HTML 구조

```javascript
// 전역 상태 단일 객체
const M = {
    project: {},
    schedule: [],
    risks: [],
    sheets_url: localStorage.getItem('maven_sheets_url')
};
```

사이드바 메뉴 순서 = 워크플로우 순서:
1. Drawing OCR Upload
2. Data Pipeline
3. AI Analysis
4. Schedule Monitor
5. Risk Board
6. Sheets Sync

---

## 관련 Claude.ai 채팅 링크

- [Maven 우선순위 분석 로직 (V1/V2)](https://claude.ai/chat/fded898c-5bdb-4390-a139-957ca2141214)
- [Construction Maven 시스템 설계 (V4)](https://claude.ai/chat/c89c5ec8-f9b8-4bfe-a5a9-05e58c5ba184)

---

## 관련 노트
- [[31_Colleague_Skill_EPC_Adaptation]]
- [[12_Schedule_Conflict_Optimization]]
