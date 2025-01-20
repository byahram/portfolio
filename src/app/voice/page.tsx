import Giscus from "@/components/voice/Giscus";

export default function Voice() {
  return (
    <section id="voice" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Share Your Thoughts 🙌
      </h1>

      <div id="giscus_wrap" className="max-w-4xl mx-auto">
        <Giscus />
      </div>
    </section>
  );
}
