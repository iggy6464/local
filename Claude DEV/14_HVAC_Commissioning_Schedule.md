# 🌬️ HVAC 시운전 P6 XLSX 템플릿
**태그:** #HVAC #commissioning #P6 #AHU #DHU #cleanroom  
**기간:** 2026-04-09  
**출력:** P6 importable XLSX (2 data sheets + README)

---

## 개요

배터리 공장 클린룸/드라이룸 환경의 AHU(Air Handling Unit) 및 DHU(Desiccant Humidity Unit) 시운전 활동을 P6에 임포트 가능한 XLSX 템플릿으로 정리.

---

## 시운전 단계

### Cold Commissioning (CC-01 ~ CC-99)
정적 점검 단계 — 시스템 가동 전 확인

| Code | Activity | Duration | Key Deliverable |
|---|---|---|---|
| CC-01 | Mechanical Static Check (Alignment, Ductwork LT) | 5d | Leakage Test Report |
| CC-02 | Damper Stroke Test | 2d | Stroke Record |
| CC-03 | Electrical Megger Test | 3d | Megger Report |
| CC-04 | Motor Solo Run | 2d | Rotation Check |
| CC-05 | Instrument Loop Check | 5d | Loop Check Sheet |
| CC-06 | VFD Parameter Setting | 2d | VFD Parameter Log |
| CC-07 | Interlock/Safety Logic Verification | 3d | Interlock Matrix |
| CC-08 | Control Panel FA Test | 2d | Panel Test Record |
| CC-99 | Cold Commissioning Complete (Milestone) | 0d | Punch-out Closure |

### Hot Commissioning (HC-01 ~ HC-99)
성능 시험 단계 — 실제 운전 중 검증

| Code | Activity | Duration | Key Deliverable |
|---|---|---|---|
| HC-01 | TAB Balancing (Air/Water) | 5d | TAB Report |
| HC-02 | Cooling/Heating Coil Capacity Test | 5d | Coil Performance Report |
| HC-03 | Desiccant DP Pull-Down Test (드라이룸 전용) | **10d** | DP Log (-40°C ~ -45°C) |
| HC-04 | HEPA Filter Integrity Scan | 3d | DOP/PAO Scan Report |
| HC-05 | Fan Performance Verification (BEP) | 3d | Fan Curve |
| HC-06 | PID Loop Tuning | 3d | Tuning Log |
| HC-07 | Sequence of Operation Verification | 3d | SOP Walkthrough |
| HC-08 | Room Pressure Cascade Test | 3d | Pressure Map |
| HC-09 | Particle Count Test (ISO Class) | 3d | ISO Classification Report |
| HC-10 | Temperature Uniformity Test | 2d | Temp Map |
| HC-11 | 72-Hour Reliability Run | **9d** | System Reliability Log |
| HC-99 | Hot Commissioning Complete (Milestone) | 0d | Certificate of Completion |

---

## Critical Path

```
CC-01 → CC-02 → CC-99 → HC-01 → HC-02 → HC-03 → HC-05 → HC-07 → HC-09 → HC-11 → HC-99
```

**주요 near-zero Float 활동:** HC-05 (DP Pull-down Test, 드라이룸 특수)  
**총 순차 기간:** 약 32 working days (단위: 1 AHU 또는 DHU)

---

## P6 XLSX 구조

### Sheet 1: TASK (21개 활동 + 2 마일스톤)
P6 표준 컬럼:
- `task_code`, `task_name`, `wbs_code`
- `task_type`, `duration_type`, `orig_dur_hr_cnt`
- `act_start_date`, `act_end_date` (빈칸 — P6에서 계산)

### Sheet 2: TASKPRED (27개 FS 로직 링크)
- `pred_task_id`, `task_id`, `pred_type`, `lag_hr_cnt`

### Sheet 3: README
- 사용 방법, 주의사항, 스케줄 기준 설명

---

## 캘린더 설정

| 캘린더 | 적용 활동 |
|---|---|
| `5d_8h` | 표준 활동 (Cold Comm 전체, Hot Comm 대부분) |
| `7d_24h` | Utility 연속 운전 필요 (HC-01, HC-02, HC-05, HC-11) |

---

## 관련 Claude.ai 채팅 링크

- [배터리 공장 클린룸 HVAC 시운전](https://claude.ai/chat/767e021b-c656-4398-a7ce-7c51a5a60267)

---

## 관련 노트
- [[13_Battery_Factory_Clean_Room_Schedule]]
- [[12_Schedule_Conflict_Optimization]]
