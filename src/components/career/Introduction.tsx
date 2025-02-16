import { useEffect } from "react";

export default function Introduction() {
  const resumeUrl = process.env.NEXT_PUBLIC_GOOGLE_DOCS_RESUME_URL as string;

  const handlePortfolioClick = () => {
    alert("준비 중입니다!");
  };

  useEffect(() => {
    console.log("resumeUrl :: ", resumeUrl);
  });

  return (
    <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-300 text-base">
      <p>
        저는 2019년부터 현재까지 IT 솔루션 및 웹/앱 서비스 분야에서 프론트엔드
        개발자로 다양한 프로젝트를 수행하며 기술력과 문제 해결 능력을
        쌓아왔습니다. <strong>Vue.js</strong>, <strong>Nuxt.js</strong>
        등의 최신 프레임워크를 활용해 사용자 경험(UX)과 인터페이스(UI)를
        개선하고, SEO 최적화 및 퍼포먼스 향상에 기여했습니다. 특히, LS엠트론
        아카데미 리뉴얼과 CTK 뷰티 플랫폼 개발을 통해 사용자 편의성과 시스템
        안정성을 크게 향상시켰으며, 글로벌 협업과 데이터 기반 문제 해결을 통해
        팀워크와 기술적 성과를 동시에 달성했습니다. 현재 (주)원스인터랙티브에서
        프론트엔드 개발자로 근무하며 지속적인 기술 성장과 함께 비즈니스 가치
        창출에 기여하고 있습니다.
      </p>
      <p>
        현재는 <strong>React</strong>와 <strong>Next.js</strong>를 개인적으로
        학습하며, 컴포넌트 재사용성과 웹 성능 최적화에 대한 깊이 있는 이해를
        쌓아가고 있습니다. 끊임없이 배우고 성장하며, 더 나은 디지털 경험을
        제공하는 개발자가 되기 위해 노력하고 있습니다.
      </p>

      {/* 경력 기술서 / PDF 포트폴리오 버튼 */}
      <div className="flex space-x-3 mt-4 text-sm">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        >
          경력 기술서 보기
        </a>
        <a
          href="#"
          onClick={handlePortfolioClick}
          rel="noopener noreferrer"
          className="px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        >
          PDF 포트폴리오 보기
        </a>
      </div>
    </div>
  );
}
