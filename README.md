# TRHI — Touch-Responsive Humanoid Interaction

제공된 **CoRe GitHub Pages 양식**을 바탕으로 만든 Humanoids 2026 프로젝트 페이지입니다. CoRe의 스타일을 유지하고 기관 로고 정렬, 반응형 이미지 배치, 시나리오 영상 캐러셀을 추가했습니다.

프로젝트 페이지: <https://tmjeong1103.github.io/TRHI/>

## 열기

`index.html`을 브라우저에서 열면 됩니다. 로컬 서버를 사용하려면 이 폴더에서 아래 명령을 실행하세요. Node.js 외에 추가 설치는 필요하지 않습니다.

```sh
node scripts/preview.mjs
```

<http://127.0.0.1:8000>에서 확인할 수 있습니다. 서버 종료는 `Ctrl+C`입니다.

## 데모 영상

상단 대문 영상은 Attentive 영상으로, CoRe의 teaser 형식에 맞춰 음소거 자동 재생·반복 재생됩니다.

Scenario 1은 큰 영상 하나를 표시하고 좌우 화살표로 Attentive → Awakening → Guidance 순서로 넘깁니다. 영상 제목과 현재 순번을 표시하며, 전환하면 이전 영상은 일시정지합니다. 캐러셀 또는 화살표에 포커스가 있으면 키보드 좌우 키로도 이동할 수 있습니다. 영상 자체에 포커스가 있으면 기본 영상 탐색 키가 유지됩니다. 자동 슬라이드 전환은 하지 않습니다.

Scenario 2도 같은 캐러셀 형식으로 Positive → Recovery → Soothing 순서로 넘깁니다. 두 캐러셀은 독립적으로 동작합니다. 시나리오 이미지와 설명은 표시하지 않으며, 두 시나리오 다음에 Paper가 이어집니다.

| 시나리오 | 첫 번째 영상 | 두 번째 영상 | 세 번째 영상 |
| --- | --- | --- | --- |
| Scenario 1 | Attentive | Awakening | Guidance |
| Scenario 2 | Positive | Recovery | Soothing |

voxel 영상 두 개는 별도 섹션에 2열로 배치했습니다. 각 영상은 기본 비디오 플레이어로 독립 재생하며, 여러 영상을 동시에 재생할 수 있습니다. 웹 호환성을 위해 원본 MOV를 최대 1280×720 H.264/AAC MP4로 변환했습니다. 재생 속도와 전체 프레임을 유지했으며 원본 파일은 수정하지 않았습니다.

## 내용 및 자료

- 기준 원고: `../_2026_Humanoids__sHRI/Humanoids2026_camera_ready_revised.tex`
- 저자, 소속, 공동 제1저자 및 교신저자, 초록, 시스템 설명, 평가 수치와 그림을 원고에 맞게 반영했습니다.
- 핵심 구조도는 플랫폼과 센싱 소개 뒤의 `Temporally Decoupled Interaction Architecture` 섹션에 배치했습니다. 그림의 (a)·(b)·(c)에 맞춰 센싱 입력, 비동기 스트림, 행동 선택과 앵커 기반 실행을 설명합니다.
- 기관 로고는 제공된 `ku.png`와 `dgist.png`입니다.
- 원본 `root.pdf`는 IEEE 예제 템플릿이므로 논문 링크로 사용하지 않았습니다. 대신 실제 원고, 참고문헌, 클래스 파일, 그림을 `static/paper/trhi-manuscript-source.zip`에 묶었습니다.
- 초록의 약 14 ms 수치는 분석적 추정치로 명시했습니다. 별도의 Experiments 섹션은 표시하지 않습니다.
- 학회 문구는 요청에 따라 `Accepted to Humanoids 2026`로 표시했습니다. 현재 BibTeX는 제공된 2026년 원고를 가리키는 `@misc`입니다.
- 상단 버튼은 `Paper`(CoRe와 동일한 PDF 아이콘)와 `Demos`입니다. 실제 논문 PDF가 제공되지 않아 `Paper`는 논문 자료 섹션(`#paper`)으로 연결했습니다. PDF 또는 공개 논문 URL이 준비되면 해당 버튼의 `href`를 교체하면 됩니다.

## 수정 및 GitHub Pages 배포

본문은 `index.html`, 이미지는 `static/images/`, 영상은 `static/videos/`, 논문 자료는 `static/paper/`에 있습니다. GitHub Pages는 `main` 브랜치의 루트(`/`)를 사용합니다. 변경 사항을 커밋하고 `main`에 푸시하면 자동으로 배포됩니다. `.nojekyll`을 포함한 빌드가 필요 없는 정적 페이지이며, Google Fonts와 아이콘 등 외부 의존성은 CoRe의 원래 설정을 유지합니다.

## 템플릿 출처

CoRe의 원본 푸터 및 Academic Project Page Template / Nerfies 출처와 CC BY-SA 4.0 고지를 유지했습니다. Bulma CSS의 MIT 라이선스 헤더도 보존했습니다. 논문, 영상, 기관 로고 등 연구 자료의 권리는 각 권리자에게 있습니다.
