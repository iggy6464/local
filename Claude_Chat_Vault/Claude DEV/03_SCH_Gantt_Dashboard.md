# 🗓️ SCH Gantt Dashboard 개발 이력
**태그:** #dashboard #gantt #schedule #html #FA1 #CP1  
**기간:** 2026-02 ~ 2026-03  
**버전:** V3.3 → V4  
**데이터 소스:** Aconex PAE Master Schedule Excel (WBS, Start, Finish, Bldg/Level/Zone)

---

## 개요

FA1/CP1 건설 공사 스케줄을 SVG 기반 Gantt 차트로 시각화하는 단독 HTML 툴.  
Aconex에서 추출한 P6 Excel 파일을 업로드하면 Building / Level / Zone / Discipline 별로 인터랙티브 Gantt 렌더링.

---

## 파싱 로직

### P6 Auto-Detection
- Col A에 `BSI` prefix → P6 모드 (actual date suffix A/C 자동 제거)
- 그 외 → SYNERGY 모드 (기존 헤더 기반)

### 컬럼 매핑 (PAE P6 기준)
- Col D: Start Date
- Col E: Finish Date
- Col A: Activity ID (`C01A`, `C02B` 형식 → Bldg/Level/Zone 자동 파싱)

### Building/Zone 자동 매핑
```
C01A → FA1 / L0.00 / MS1 (Injection & Closing)
C02B → CP1 / Coating / Zone B
FA-Injection & Closing → 섹션 헤더 파싱 방식 (Synergy 파일)
```

---

## 주요 기능

### Elevation Multi-Select Sidebar (V3.3)
- Level 기반 그룹핑으로 다중 elevation 선택 가능
- ALL 버튼 + 개별 레벨 토글 (selectedElevations Set 관리)
- `refreshElevButtons()` → `renderZone(bldg, null)` 연동

### Undo Stack (V4)
- 50단계 undo 히스토리 (`undoStack` 배열)
- Ctrl+Z / Cmd+Z 키보드 단축키
- `_pushUndo()`: drag commit + manual date edit 전 호출
- 파일 재업로드 시 스택 리셋

### XLSX/PDF Export & Import
- SheetJS: 모든 활동 + `userOverrides` 포함 XLSX 내보내기
- jsPDF + AutoTable: PDF 내보내기
- Import Mode A (Override): 이미 마스터 데이터 로드된 상태에서 변경사항만 적용
- Import Mode B (Full Rebuild): export 파일만으로 SCHEDULE_DATA 재구성
- **Auto-detection:** 업로드된 파일이 export 형식이면 자동으로 import 핸들러로 리다이렉트

### Conflict Detection
- **제거된 오탐:** 선행관계 위반(747건), 다른 공종 병행(2,874건)
- **유지된 실제 충돌:** Step1 미완료 중 Step2 시작 (181건)
- P6 Predecessor 링크 기반 ES/EF/LS/LF 계산

### Smart Scale
- 줌 레벨에 따라 자동으로 CW/Month/Quarter 표시 전환

---

## V3.3 → V4 주요 변경사항

| 항목 | V3.3 | V4 |
|---|---|---|
| Elevation 선택 | currentZone 단일 | selectedElevations Set 다중 |
| Undo | 없음 | 50단계 스택 |
| Export/Import | 없음 | XLSX + PDF 양방향 |
| 충돌 감지 | 모든 overlap | Step-sequence 위반만 |
| Print | 있었으나 삭제 | 삭제 (A3 가독성 불가) |

---

## 관련 Claude.ai 채팅 링크

- [Activity CPM FA/CP 필터 버그 수정](https://claude.ai/chat/69d54d33-28c1-45dc-a626-ad2ba0cc158d)
- [마일스톤 CW 범위 선택 기능](https://claude.ai/chat/d67c52a0-8fb2-4a2c-b749-1a74be4c8e16)
- [파서 업데이트 및 충돌 감지 검증](https://claude.ai/chat/ca99a0c5-1db6-4736-bcc9-5f937f02d070)
- [타임블록 이동 Critical Path 표시](https://claude.ai/chat/a1807892-c34d-4054-aeb0-b47feef273ba)
- [Undo 기능 + 스케줄 충돌 최적화 Word 보고서](https://claude.ai/chat/c7867ff1-fe4e-48c9-8413-e92f2c6d5c66)
- [타임라인 액티비티 XLSX/PDF Export-Import](https://claude.ai/chat/3925abce-aa4b-4776-a754-57a58eb15d4a)
- [Work Zone 이동 모드](https://claude.ai/chat/d67c52a0-8fb2-4a2c-b749-1a74be4c8e16)
- [스케줄 버전 비교 (엑셀 D,E 컬럼)](https://claude.ai/chat/b78d882c-22be-4015-b409-bda7d67f67fb)
- [밀스톤 기간 강조 표시](https://claude.ai/chat/32429d9c-93cb-453b-81f1-7b80176bba01)
- [액티비티 충돌 최적화 SCN-1/2/3](https://claude.ai/chat/ec64ca79-ec4a-4745-bc97-9f17d7a28da8)
- [액티비티 바 폰트 가독성](https://claude.ai/chat/a091c219-e30c-48b3-8077-80b1f1cefe1a)

---

## 관련 노트
- [[05_Trade_Sequencing_Analyzer]]
- [[12_Schedule_Conflict_Optimization]]
- [[13_Battery_Factory_Clean_Room_Schedule]]
