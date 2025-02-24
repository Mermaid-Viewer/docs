# 요구사항 다이어그램

요구사항 다이어그램은 시스템 요구사항을 시각화하고 요구사항 간의 관계와 의존성을 보여주는 데 사용됩니다. 이를 통해 팀은 프로젝트 요구사항을 더 잘 이해하고 관리할 수 있습니다.

## 문법

### 기본 요소
- 요구사항: `requirement [이름] {[ID]}`
- 요소: `element [이름]`
- 관계: 화살표를 사용하여 요구사항과 요소 연결
- 위험 수준: `risk [level]`
- 검증 방법: `verifyMethod [method]`

## 기본 예제

```mermaid
requirementDiagram
    requirement 사용자인증 {
        id: REQ-001
        text: 시스템은 사용자 인증 기능을 구현해야 함
        risk: high
        verifyMethod: test
    }

    element 로그인시스템 {
        type: system
    }

    사용자인증 - 로그인시스템
```

## 고급 예제

더 복잡한 요구사항 다이어그램의 예:

```mermaid
requirementDiagram
    requirement 사용자관리시스템 {
        id: REQ-100
        text: 시스템은 완전한 사용자 관리 기능을 제공해야 함
        risk: medium
        verifyMethod: test
    }

    requirement 사용자등록 {
        id: REQ-101
        text: 신규 사용자가 계정을 생성할 수 있음
        risk: low
        verifyMethod: test
    }

    requirement 비밀번호보안 {
        id: REQ-102
        text: 비밀번호는 보안 기준을 충족해야 함
        risk: high
        verifyMethod: inspection
    }

    requirement 사용자역할 {
        id: REQ-103
        text: 시스템은 다양한 사용자 역할을 지원함
        risk: medium
        verifyMethod: demonstration
    }

    element 인증모듈 {
        type: module
    }

    element 데이터베이스 {
        type: database
    }

    사용자관리시스템 contains 사용자등록
    사용자관리시스템 contains 비밀번호보안
    사용자관리시스템 contains 사용자역할
    
    사용자등록 - 인증모듈
    비밀번호보안 - 인증모듈
    사용자역할 - 데이터베이스
```

## 관계 유형

- `contains`: 포함 관계
- `copies`: 복사 관계
- `derives`: 파생 관계
- `satisfies`: 만족 관계
- `verifies`: 검증 관계
- `refines`: 상세화 관계
- `traces`: 추적 관계

## 검증 방법

사용 가능한 검증 방법:
- `test`: 테스트 검증
- `inspection`: 검사 검증
- `demonstration`: 시연 검증
- `analysis`: 분석 검증

## 위험 수준

설정 가능한 위험 수준:
- `low`: 낮은 위험
- `medium`: 중간 위험
- `high`: 높은 위험

## 스타일 설정

요구사항 다이어그램은 자동으로:
- 다른 요소 유형에 다른 모양 사용
- 요구사항 ID와 설명 표시
- 위험 수준과 검증 방법 표시
- 관계를 나타내는 다른 유형의 연결선 사용

## 유용한 팁
- 명확한 요구사항 ID 체계 사용
- 간결하고 명확한 요구사항 설명 작성
- 적절한 위험 수준 설정
- 적합한 검증 방법 선택
- 요구사항 간의 관계를 명확히 표시
- 다이어그램 구조를 명확하게 유지
- 복잡한 관계 네트워크 피하기

## 일반적인 문제 해결

1. **구조 문제**
   - 요구사항 계층을 적절히 구성
   - 과도한 교차 관계 피하기
   - 하위 요구사항으로 관련 항목 그룹화

2. **가독성 문제**
   - 요구사항 설명을 간결하게 유지
   - 의미 있는 ID 사용
   - 적절한 공간 레이아웃 사용

3. **관계 문제**
   - 관계 유형의 정확성 확보
   - 순환 의존성 피하기
   - 의존 방향을 명확히 표시

## 모범 사례
- 각 요구사항에 고유 ID 부여
- 요구사항 설명은 구체적이고 검증 가능하게
- 위험 수준을 명확히 표시
- 적절한 검증 방법 선택
- 요구사항 간의 관계를 명확하게 유지
- 정기적인 요구사항 검토와 업데이트
- 요구사항 추적성 확보

## 다음 단계
- [Git 그래프](/ko/diagrams/git)
- [C4 다이어그램](/ko/diagrams/c4)
- [마인드맵](/ko/diagrams/mindmap) 