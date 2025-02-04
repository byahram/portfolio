import BadgeText from "@/components/common/BadgeText";

export default function Introduction() {
  return (
    <div>
      {`I'm a frontend developer, optimist, and community builder. I currently work as the VP of Product at`}
      <span className="not-prose">
        <BadgeText>asdf</BadgeText>
      </span>
      {`, where I help teach the `}
      <BadgeText>asdf</BadgeText>
      {` community, an open-source web framework built with `}
      <BadgeText>asdf</BadgeText>.
    </div>
  );
}
