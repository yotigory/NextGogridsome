import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      <NextSeo
        title="わたしについて"
        description="このサイト「Gridsomeでいこう！」を制作している私についてのページです。"
        openGraph={{
          type: "website",
          url: `https://gogridsome.work/me`,
          title: "わたしについて",
          description:
            "このサイト「Gridsomeでいこう！」を制作している私についてのページです。",
          images: [
            {
              url: `https://gogridsome.work/og.png`,
              width: 1200,
              height: 700,
              alt: "わたしについて",
            },
          ],
        }}
      />
      <article className="prose container mx-auto p-5">
        <h1>私について</h1>
        <div className="flex justify-center">
          <Image
            src={`/yotigory_01.png`}
            width={200}
            height={282}
            alt="画像：ヨチゴリーのアイコン"
          />
        </div>
        <p>
          Web制作会社で HTML, CSS, JS, PHP, WordPress
          …いろいろやってますw。最近は React 楽しいですね～
          <br />
          とはいえまだまだわからないことが多いです (;^_^A
        </p>
        <p>
          テクノ図工部、カメラとお散歩部、チェアリング部。
          <br />
          趣味は睡眠。みんなでワイワイ飲んだりするのが好きです♪
        </p>
        <p>気分でフラリとおでかけします。</p>
        <ul>
          <li>
            <Link href="https://www.facebook.com/yoshiko.sarakai">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/yotigory">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.tekunozukoubu.net/">テクノ図工部</Link>
          </li>
          <li>
            <Link href="https://codingmania.net/">CodingMania</Link>
          </li>
          <li>
            <Link href="https://sentimental.space/">ポエミーサイト</Link>
          </li>
        </ul>
      </article>
    </>
  );
}
