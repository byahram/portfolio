# Next.js Portfolio

이 프로젝트는 **Next.js Portfolio**는 **Next.js** 프레임워크를 기반으로 구축된 포트폴리오 웹사이트입니다. 이 웹사이트는 다크 모드와 다국어 지원 기능(예정)을 제공하며, 애니메이션 효과를 통해 사용자 경험을 개선하고 있습니다. 또한, 실시간 콘텐츠 관리 기능을 제공하기 위해 Notion API와 연동되어, 사용자는 Notion에서 관리하는 데이터를 동적으로 웹사이트에 불러올 수 있습니다.

- [Demo](https://ahramkim-nextjs-portfolio.vercel.app/)

<br>

## 🛠 기술 스택

- **프레임워크**: `Next.js 15`
- **프론트엔드**: `React 19`, `Tailwind CSS`
- **애니메이션**: `Framer Motion`
- **다크 모드 지원**: `next-themes`
- **다국어 지원**: `next-intl`
- **백엔드 및 API**: `Notion API` (`@notionhq/client`, `@notion-render/client`)
- **HTTP 요청**: `Axios`
- **아이콘**: `react-icons`

<br>

## 🛠 사용 라이브러리 설명

- **`Framer Motion`**: 부드러운 애니메이션 구현을 위해 사용. 특히 팝업 효과와 페이지 전환 애니메이션에 활용됩니다.
- **`next-themes`**: 다크 모드와 라이트 모드를 쉽게 구현할 수 있도록 도와주는 라이브러리입.
- **`next-intl`**: 다국어 지원을 위한 라이브러리로, `React` 애플리케이션에서 국제화(i18n)를 손쉽게 처리할 수 있습니다.
- **`Axios`**: API 요청 및 데이터 관리를 위한 HTTP 클라이언트 라이브러리입니다.
- **`Notion API`**: Notion에서 관리하는 콘텐츠를 웹사이트에서 실시간으로 불러오기 위해 사용됩니다.

<br>

## 📦 설치 및 실행 방법

### 1️⃣ 프로젝트 클론

```sh
git clone <저장소 URL>
cd portfolio
```

### 2️⃣ 패키지 설치

```sh
npm install
```

### 3️⃣ 개발 서버 실행

```sh
npm run dev
```

### 4️⃣ 프로덕션 빌드 및 실행

```sh
npm run build
npm run start
```

<br>

## 🚀 주요 기능

### 1. **반응형 디자인**

- 모바일, 태블릿, 데스크톱 등 다양한 화면 크기에 맞춰 UI가 자동으로 조정됩니다. `Tailwind CSS`를 사용해 빠르게 반응형 디자인을 구현하고, 화면 크기에 따라 레이아웃, 글자 크기, 이미지 크기를 동적으로 조정하여 최적의 사용자 경험을 제공합니다. 또한, 모바일 화면에서는 간결하고 직관적인 헤더 디자인을 적용하여 작은 화면에서도 메뉴와 네비게이션을 쉽게 이용할 수 있도록 최적화했습니다.

| Desktop                                                        | Tablet                                            | Mobile                                             |
| -------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- |
| ![Desktop Image](/public/images/readme/light_desktop_main.png) | ![Tablet Image](/public/images/readme/tablet.png) | ![Mobile Image](/public/images/readme/mobile1.png) |

### 2. **다크 모드 지원**

- `next-themes`를 사용해 사용자가 다크 모드와 라이트 모드를 자유롭게 전환할 수 있습니다. `ThemeProvider`를 활용해 전역적으로 테마를 관리하고, 페이지 렌더링 시 선택된 테마에 맞춰 콘텐츠가 업데이트됩니다. 또한, 다크 모드 활성화 시 배경, 텍스트, 링크 색상 등이 자동으로 변경되어 어두운 배경에 최적화된 색상으로 적용됩니다.

| Light Mode                                                     | Dark Mode                                             |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| ![Desktop Image](/public/images/readme/light_desktop_main.png) | ![Desktop Image](/public/images/readme/dark_mode.png) |

### 3. **다국어 지원** (개발 진행중)

- `next-intl`을 사용하여 사이트의 텍스트 콘텐츠를 다국어로 관리하는 기능을 구현 중입니다. 현재는 한국어와 영어 지원을 준비 중입니다. 언어 선택 기능을 통해 사용자가 원하는 언어로 페이지를 변경할 수 있도록 개발하고 있습니다.

### 4. **Notion API 연동**

- `Notion API`를 사용하여 Notion에서 관리하는 콘텐츠를 실시간으로 불러와 사이트에 표시합니다. 커리어나 사이드 프로젝트 등 다양한 콘텐츠를 손쉽게 관리할 수 있습니다. 데이터는 `@notionhq/client`를 사용해 API 요청을 보내고 받아옵니다.

| Page                                                                  | Notion DB                                                     |
| --------------------------------------------------------------------- | ------------------------------------------------------------- |
| ![CareerList](/public/images/readme/CareerScreen.png)                 | ![CareerList](/public/images/readme/CareerDB.PNG)             |
| ![CareerProjectScreen](/public/images/readme/CareerProjectScreen.png) | ![CareerProjectDB](/public/images/readme/CareerProjectDB.PNG) |
| ![SideProjectScreen](/public/images/readme/SideProjectScreen.png)     | ![SideProjectDB](/public/images/readme/SideProjectDB.PNG)     |

### 5. **애니메이션 효과**

- `Framer Motion`을 사용하여 부드러운 애니메이션을 구현했습니다. 특히 메인 페이지에서 사진을 클릭하면 팝업처럼 이미지가 나타나는 효과를 적용하여, 사용자에게 자연스럽고 인터랙티브한 경험을 제공합니다. 페이지 로딩 시에는 `Skeleton` 화면을 사용하여 로딩 중에도 사용자에게 원활한 경험을 제공하며, 콘텐츠 전환, 요소의 등장 및 사라짐 등 다양한 애니메이션 효과로 몰입감 있는 웹사이트 만들었습니다.

<br>

## 📝 코드 스타일

- `ESLint` 및 `Prettier` 적용
- `TypeScript` 사용
- `Tailwind CSS` 로 스타일 관리

<br>

## 🏗 디렉토리 구조

```sh
portfolio/
├── public/          # 정적 파일 보관
├── src/
│   ├── app/         # Next.js 페이지 라우트
│   ├── components/  # 재사용 가능한 UI 컴포넌트
│   ├── lib/         # API 통신 및 데이터 관리 (apiList.ts, notionhq.ts 등)
│   ├── provider/    # 전역 상태 및 테마 관리 (ThemeProvider 등)
│   ├── store/       # API 데이터 외의 전역 상태 관리
│   ├── types/       # TypeScript 타입 정의 파일 보관
│   ├── utils/       # 공통 유틸리티 함수 (common.ts, error.ts 등)
├── eslint.config.mjs   # ESLint 설정 파일
├── next.config.ts      # Next.js 환경설정 파일
├── package.json        # 프로젝트 종속성 및 스크립트 관리
├── tailwind.config.ts  # Tailwind CSS 설정 파일
└── tsconfig.json       # TypeScript 설정 파일
```

<br>

## 🤝 기여 방법

기여를 원하시면 다음 절차를 따라주세요:

1. 이 프로젝트를 포크(fork)한 후, 새로운 브랜치를 생성합니다.
2. 기능을 추가하거나 버그를 수정한 뒤, 해당 브랜치에서 Pull Request를 생성합니다.
3. 프로젝트에 대한 피드백은 언제든지 환영합니다!

<br>

## ✉️ 피드백

이 프로젝트에 대한 피드백은 [이메일 주소]로 보내주세요. 어떤 의견이든 감사히 받겠습니다!

<br>

## 📅 미래 계획

- 다국어 지원 (현재 한국어 및 영어 작업 중)
- 사용자 피드백을 기반으로 더 나은 UI/UX 개선
- 더 많은 애니메이션 효과와 전환 추가
- 모든 페이지를 Notion DB로 관리

<br>

## 🚀 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자유롭게 사용하고 개선할 수 있습니다!
