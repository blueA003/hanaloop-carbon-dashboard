# 탄소 배출량 대시보드 (Carbon Emissions Dashboard)

이 프로젝트는 (주)하나루프의 서류 전형 소규모 프로젝트로 제작된 웹 기반 탄소 배출량을 시각화한 대시보드입니다.
기업별/국가별 배출 현황, 예상 탄소세, 연말 배출량을 추정할 수 있도록 설계되었습니다.

## 기술 스택

- Framework: Next.js 14 (App Router) + React 18 + TypeScript
- Css: TailWind CSS
- 차트: Recharts
- 상태 관리: React hooks (`useState`, `useEffect`)
- Icon: React Icons

## 주요 기능

- 대시보드 레이아웃
  - 사이드바: 회사 목록 및 선택
  - 헤더: 네비게이션
  - 메인 영역: 여러가지 차트와 카드 배치

- 배출량 시각화
  - 총 배충량 카드 (목표 대비 %)
  - 예상 탄소세 계산 (가상의 수치 * 배출량 )
  - 연말 예상 배출량 (선택된 회사의 Total Emissions / emissions.length * 12)
  - 월별 추세 라인 차트와 파이 차트
  - 국가별 바 차트

- 게시물(Post) 관리
  - 월별/회사별 가상의 데이터 보고서 목록 표시
  - Post 추가 / 수정 / 삭제 기능
  - Fake backend 연동 
  - 롤백 처리

- 에러/로딩 처리
  - 전역 로딩 스피너
  - 실패 시 에러 UI (빨간 박스 알림)
  - 데이터 없음 상태 처리 (“데이터 없음” 표시)


---

