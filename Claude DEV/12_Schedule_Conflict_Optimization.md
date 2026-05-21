# 🔧 스케줄 충돌 최적화 (SCN-1/2/3)
**태그:** #schedule #conflict #optimization #SCN #MEP  
**기간:** 2026-03 ~ 2026-04  
**데이터:** `SCH_Clashing_check.xlsx`, `2_shift_SYN.xlsx`  
**출력:** `SCH_Optimization_Scenarios.docx`, `Schedule_Optimization_Scenarios.xlsx`

---

## 개요

건설공사 스케줄에서 공종 간 충돌(Clashing)을 분석하고, 3가지 최적화 시나리오(SCN-1/2/3)를 도출한 분석 작업.

---

## 기본 제약 조건

1. **Step 1 & Step 2:** 동시 작업 가능 (같은 Zone에서 병행)
2. **Ceiling Panel 완료 후:** Mechanical, Electrical 작업 시작 가능
3. **Scissor lift:** 바닥 footprint 점유 → 같은 Zone 동시 작업 불가 (어느 높이 작업이라도)
4. **Zone Rolling:** 인접 Zone 순차 staggering이 유일한 가속 전략

---

## 충돌 감지 로직

### 실제 충돌 (V2 기준: 181건)
- **Step1 완료 전 Step2 시작:** 같은 공종 내 단계 순서 위반
- **Ceiling 미완료 중 MEP 시작:** 물리적 시공 불가

### 제거된 오탐
| 오탐 유형 | 건수 | 제거 이유 |
|---|---|---|
| P6 선행관계 "위반" | 747건 | P6가 이미 SS/FF 계산 완료 |
| 다른 공종 동시 작업 | 2,874건 | Elec+Duct+Piping 병행은 정상 |

---

## 3가지 시나리오 비교

### SCN-1: Ceiling Rule만 적용
- **결과:** 0 ceiling 위반, 스케줄 지연 없음
- **충돌 감소:** 기준 대비 일부 감소
- **단점:** 근본적인 공기 단축 효과 없음

### SCN-2: Ceiling Rule + S1→S2 순차 강제
- **결과:** 26% 충돌 감소, Ceiling 재위반 발생 (논리 결함)
- **문제:** S1→S2 순차 강제가 Ceiling finish 이전 시작을 유발
- **결론:** 권장 불가

### SCN-3: Full Optimization (권장)
- **결과:**
  - 충돌 31.6% 감소
  - Overlap-days 39.7% 감소
  - 0 ceiling 위반
  - **단, 일부 Zone +56~113일 지연 발생**
- **액션:** Owner 재협상 필요 (FIDIC 8.4 EOT 클레임 준비)

---

## 배터리 공장 Clean Room 실제 시퀀스

```
Wall Structure (FA: CW49~)
  ↓ +4~5일
Wall Panel
  ↓ 2/3 완료 시점
Ceiling Structure (≥30% overlap)
  ↓ 1주 전
Arc_Ceiling Panel ──────────────────→ (Flooring -1일까지)
  ↓ (Ceiling Panel 완료 후)
Mec_Duct ──────────────────→ (+15% overlap with next)
  ↓ +14일
Mec_Utility Piping
  ↓ (mid-May)
Ele_Cable Tray
  ↓ +14일
Ele_Raceway
  ↓
UPS / FMCS
  ↓
Arc_Flooring (마감 -15일 전 완료)
  ↓
Clean-Up (마감일 = deadline)
```

---

## 관련 Claude.ai 채팅 링크

- [액티비티 충돌 최적화 SCN-3 개발 (1)](https://claude.ai/chat/a091c219-e30c-48b3-8077-80b1f1cefe1a)
- [액티비티 충돌 최적화 SCN-3 개발 (2)](https://claude.ai/chat/ec64ca79-ec4a-4745-bc97-9f17d7a28da8)
- [Undo Stack + SCH_Optimization_Scenarios.docx](https://claude.ai/chat/c7867ff1-fe4e-48c9-8413-e92f2c6d5c66)

---

## 관련 노트
- [[03_SCH_Gantt_Dashboard]]
- [[05_Trade_Sequencing_Analyzer]]
- [[13_Battery_Factory_Clean_Room_Schedule]]
