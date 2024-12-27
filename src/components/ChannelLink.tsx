import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";
import summit from "/public/images/home/summit.jpg";
import vercel from "/public/images/home/vercel.jpg";

interface ChannelLinkProps {
  img: any;
  name: string;
  link: string;
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

async function Subs({ name }: { name: string }) {
  noStore();
  let subscribers;
  // if (name === "@leerob") {
  //   subscribers = await getLeeYouTubeSubs();
  // } else {
  //   subscribers = await getVercelYouTubeSubs();
  // }

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {subscribers} subscribers
    </p>
  );
}

const ChannelLink = (props: ChannelLinkProps) => {
  return (
    <div className="group flex w-full">
      <a
        href={props.link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={props.name}
              src={props.img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            {/* <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div> */}
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {props.name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              <Subs name={props.name} />
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
};

export default ChannelLink;
