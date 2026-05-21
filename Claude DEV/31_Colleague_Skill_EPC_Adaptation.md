# 👥 colleague.skill EPC 적용 분석
**태그:** #AI #skill #EPC #knowledge-management #HR  
**기간:** 2026-04-13  
**소스:** [titanwings/colleague-skill GitHub](https://github.com/titanwings/colleague-skill.git)  
**출력:** `work_analyzer_epc.md` (EPC 특화 확장판)

---

## colleague.skill 개요

동료의 지식·판단 방식을 AI Skill로 증류(Distill)하는 프레임워크.

```
원자료(메시지·이메일·문서) → work_analyzer.md + persona_analyzer.md → SKILL.md
```

**핵심 철학:** 인재 이직 시 tacit knowledge 손실 방지

---

## EPC Construction 적용 영역 (4개 도메인)

### C1: 신규 PM 온보딩 가속
- 전임 PM의 Vendor 대응 패턴, 계약 판단 기준 skill화
- 적용 Phase: Week 1 (현장 인수인계) 직전

### C2: Vendor/Subcon 커뮤니케이션 DB
- 특정 인물 대신 Vendor/Subcon 자체를 대상
- `vendors/`, `subcons/` 디렉토리 구조 사용
- "유효한 커뮤니케이션 방식 + 무효한 방식" 쌍으로 기록

### C3: 현장 암묵지 문서화
- 퇴직 예정자 인터뷰 → A-3(기술 판단 기준), A-5(경험 지식 창고) 우선 추출
- FIDIC 판단 기준, 클레임 발행 시점, Vendor 대응 전략

### C4: AI PM 보조 시스템 (Construction Maven 연계)
- Maven의 Claude AI 엔진에 colleague.skill 주입
- "이 상황에서 선임 PM이라면?" 질의응답 가능

---

## EPC 전용 Persona 태그 10개

| 태그 | 행동 패턴 |
|---|---|
| FIDIC 조문 애독자 | 이슈 발생 시 즉시 해당 조항 찾음. "28일 안에 notice" |
| 현장 우선주의자 | 도면보다 현장 실측 신뢰 |
| 보수적 시방서 해석자 | 애매한 spec은 더 엄격한 쪽으로 해석 |
| 일정 우선 타협자 | 품질-일정 충돌 시 일정 우선 |
| 클레임 회피자 | 구두 합의 선호, 공식 claim 회피 |
| 클레임 적극 활용자 | 불이익 즉시 notice 발행, "기록 없으면 존재 없음" |
| 멀티 vendor 분산주의자 | LLI 모두에 alternate 자동 검토 |
| 현장 인화력형 | Subcon 팀장과 인간적 관계를 레버리지로 활용 |
| 데이터 드리븐 보고형 | 수치 없는 보고는 보고가 아님 |
| 리스크 조기 경보형 | 문제 작을 때 먼저 보고, 나쁜 소식 숨기지 않음 |

---

## 관련 Claude.ai 채팅 링크

- [colleague-skill GitHub 분석 및 EPC 적용](https://claude.ai/chat/71c598a1-3e31-47fc-9fc9-9ae19b640c74)

---

## 관련 노트
- [[07_Construction_Maven_System]]
