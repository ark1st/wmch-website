# PLAN.md

## Night goals

1. 안정적인 검증 게이트 확보 (`npm run verify` 중심)
2. 프론트엔드 보안/프라이버시 기본선 강화
3. 테스트 진입점(`npm test`) 최소 기준 수립
4. 접근성(A11y) 빠른 개선
5. 성능 힌트 및 지연 로딩 적용
6. 통합 보고서로 머지 순서/리스크 명확화

## Priorities

- P0: Tooling/DX, Security
- P1: Test/Quality
- P2: UI/UX + Performance
- P0 (Integrator): 머지 순서 및 실행 커맨드 정리

## Ticket list

[Ticket] chore: verify 게이트 표준화
• Scope: `site/package.json` 검증 스크립트 정리, CONTRIBUTING 규칙 추가
• Constraints: 기존 빌드 동작 변경 금지, 문서 최소화
• Acceptance Criteria:
  • 명령: npm run verify 통과
  • 변경 효과/근거 1줄: 야간 자동 작업의 공통 게이트를 명확히 고정함
  • 리스크/롤백 방법 1줄: 스크립트 변경 문제 시 package.json 스크립트 한 커밋 롤백
• Deliverable: PR 1개 + 문서(있으면)

[Ticket] security: 외부 임베드/에셋 프론트 보안 강화
• Scope: 로고 로컬 서빙, iframe sandbox/referrerpolicy 적용, SECURITY.md 작성
• Constraints: UI 변화 최소화
• Acceptance Criteria:
  • 명령: npm run verify 통과
  • 변경 효과/근거 1줄: 외부 의존/리퍼러 노출을 줄여 프라이버시·공급망 리스크 완화
  • 리스크/롤백 방법 1줄: iframe 권한 이슈 시 해당 속성만 부분 롤백
• Deliverable: PR 1개 + 문서(있으면)

[Ticket] test: 품질 게이트용 smoke test 도입
• Scope: `npm test` 스크립트 및 TESTING.md
• Constraints: 신규 프레임워크 대규모 도입 금지
• Acceptance Criteria:
  • 명령: npm run verify 통과
  • 변경 효과/근거 1줄: CI/로컬에서 check 기반 테스트 명령 통일
  • 리스크/롤백 방법 1줄: test 스크립트 충돌 시 해당 스크립트 커밋 롤백
• Deliverable: PR 1개 + 문서(있으면)

[Ticket] feat: UI 접근성 기본선 보강
• Scope: skip link, 버튼 type 명시, 메뉴 aria 상태값, docs/ui-guidelines.md
• Constraints: 디자인 의도 유지
• Acceptance Criteria:
  • 명령: npm run verify 통과
  • 변경 효과/근거 1줄: 키보드 사용자 이동성과 스크린리더 해석 개선
  • 리스크/롤백 방법 1줄: 레이아웃 영향 발생 시 a11y 속성만 선택 롤백
• Deliverable: PR 1개 + 문서(있으면)

[Ticket] perf: 비핵심 미디어 로딩 최적화
• Scope: preconnect/dns-prefetch, lazy-loading, PERF_NOTES.md
• Constraints: 핵심 콘텐츠 LCP 악화 금지
• Acceptance Criteria:
  • 명령: npm run verify 통과
  • 변경 효과/근거 1줄: 초기 연결/디코딩 비용 감소로 체감 로딩 개선 기대
  • 리스크/롤백 방법 1줄: 회귀 시 loading/resource hint 변경만 롤백
• Deliverable: PR 1개 + 문서(있으면)

[Ticket] docs: 통합 MORNING_REPORT 작성
• Scope: 머지 순서, 테스트 방법, 리스크, 푸시/PR 커맨드, 충돌기록
• Constraints: 실제 원격 PR 미생성 전제
• Acceptance Criteria:
  • 명령: npm run verify 통과
  • 변경 효과/근거 1줄: 오전 인수인계 시 즉시 머지 가능한 상태 제공
  • 리스크/롤백 방법 1줄: 보고서 오류 시 문서 커밋만 수정/재작성
• Deliverable: PR 1개 + 문서(있으면)
