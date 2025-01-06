import Giscus from "@/components/Giscus";

export default function Voice() {
  return (
    <section id="voice" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-center">
        Voice
      </h1>
      <div className="text-center mb-8">
        <p className="text-lg font-semibold text-gray-700">
          Let your voice be heard.
        </p>
        <p className="text-sm text-gray-500">당신의 의견을 들려주세요.</p>
      </div>
      <div id="giscus_wrap" className="max-w-4xl mx-auto">
        <Giscus />
      </div>
    </section>
  );
}
