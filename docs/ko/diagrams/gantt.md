# 간트 차트

간트 차트는 프로젝트 계획과 일정 관리에 사용됩니다. 작업, 기간, 의존성을 시각화할 수 있습니다.

## 문법

### 기본 요소
- 제목: `title [차트 제목]`
- 날짜 형식: `dateFormat YYYY-MM-DD`
- 섹션: `section [섹션 이름]`
- 작업: `[작업 이름] : [작업 ID], [시작일], [기간]`
- 의존성: `after [작업 ID]`

### 시간 단위
- 분: `1m`
- 시간: `1h`
- 일: `1d`
- 주: `1w`
- 월: `1M`

## 기본 예제

```mermaid
gantt
    title 간단한 프로젝트 일정
    dateFormat  YYYY-MM-DD
    section 계획
    프로젝트 시작    :a1, 2024-01-01, 1w
    요구사항 수집    :a2, after a1, 2w
    section 개발
    구현        :a3, after a2, 4w
    테스트        :a4, after a3, 2w
```

## 고급 예제

```mermaid
gantt
    title 소프트웨어 개발 프로젝트
    dateFormat  YYYY-MM-DD
    
    section 계획
    프로젝트 시작       :done, a1, 2024-01-01, 2d
    요구사항 분석       :active, a2, after a1, 1w
    시스템 설계       :a3, after a2, 2w
    
    section 개발
    백엔드 개발      :crit, a4, after a3, 4w
    프론트엔드 개발      :a5, after a3, 4w
    API 통합       :a6, after a4, 1w
```

## 작업 상태

작업에는 다양한 상태를 설정할 수 있습니다:
- `done` - 완료된 작업
- `active` - 현재 진행 중인 작업
- `crit` - 중요 작업

## 실용적인 팁
- 작업 이름은 간결하고 설명적으로
- 의미 있는 섹션 이름 사용
- 중요한 의존성 표시
- 중요한 마일스톤 포함
- 관련 작업을 섹션으로 그룹화

## 일반적인 문제 해결

1. **레이아웃 문제**
   - 작업 수를 적절히 조정
   - 적절한 시간 단위 사용
   - 작업을 적절히 그룹화

2. **의존성 문제**
   - 의존성의 정확성 확인
   - 순환 의존성 피하기
   - 작업 ID의 고유성 확인

## 모범 사례
- 대규모 프로젝트를 관리 가능한 작업으로 분할
- 일관된 명명 규칙 사용
- 진행 상황 정기적 업데이트
- 중요 경로 강조
- 차트를 단순하고 명확하게 유지

## 다음 단계
- [사용자 여정 다이어그램](/ko/diagrams/user-journey)
- [파이 차트](/ko/diagrams/pie)
- [Git 그래프](/ko/diagrams/git) 