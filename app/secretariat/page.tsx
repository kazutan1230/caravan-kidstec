import { Heading } from "@/app/components/layout/heading"
import { SECRETARIAT } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function Secretariat(): JSX.Element {
  const organizations = [
    {
      company: "株式会社オープンアップグループ",
      href: "https://www.openupgroup.co.jp/",
      description: "(東証プライム市場上場)",
    },
    {
      company: "株式会社テイクアンドギヴ・ニーズ",
      href: "https://www.tgn.co.jp/",
      description: "(東証プライム市場上場)",
    },
    {
      company: "ICHI COMMONS株式会社",
      href: "https://corp.ichicommons.com/",
      description: "(スタートアップ企業)",
    },
    {
      company: "ロボットサバイバルプロジェクト（ロボサバ）",
      href: "https://robosava.jp/",
      description: "(プログラミング体験の創出普及活動)",
    },
  ]

  return (
    <>
      <Heading menu={SECRETARIAT} />
      <section className="px-2 space-y-4 text-center md:text-sm">
        <h2 className="font-bold font-zenMaruGothic text-2xl">
          こどもテックキャラバン
          <br className="sm:hidden" />
          事務局について
        </h2>
        <div className="flex gap-2 items-center justify-center">
          <p>
            事務局はSDGs目標の17
            <br className="sm:hidden" />「
            <b>パートナーシップで目標を達成しよう</b>」
            <br className="sm:hidden" />
            を目指しています。
            <br />
            ※国や企業・団体・専門家・個人などが
            <br className="sm:hidden" />
            相互に協力し合うことを示しています。
          </p>
          <Image
            loader={cloudfrontLoader}
            src="/content/sdg_icon_17_ja_2.avif"
            width={58}
            height={58}
            alt="17 パートナーシップで目標を達成しよう"
            className="h-full"
          />
        </div>
      </section>
      <section className="px-2 space-y-4 text-center">
        <p>
          以下の企業・団体が事務局として非営利で
          <br className="sm:hidden" />
          運営しており、
          <br className="hidden sm:block" />
          『パートナーシップ』だからこそ
          <br className="sm:hidden" />
          実現できる社会貢献活動として
          <br />
          こどもテックキャラバンを行っています。
        </p>
        <ul className="space-y-2 sm:mx-auto sm:text-left sm:w-max">
          {organizations.map((organization) => (
            <li
              key={organization.company}
              className="flex items-center justify-center sm:block"
            >
              <span className="pl-4 sm:hidden">・</span>
              <div className="grow before:sm:content-['・'] sm:grow-0">
                <Link
                  href={organization.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold link text-sky-400"
                >
                  {organization.company}&nbsp;
                </Link>
                <br className="sm:hidden" />
                {organization.description}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="px-2 space-y-4 text-center md:text-sm">
        <h2 className="font-bold font-zenMaruGothic text-2xl">
          こどもテックキャラバンの
          <br className="sm:hidden" />
          ビジョン
        </h2>
        <p>
          このイベントでは、個人や単体の企業だけでは
          <br className="sm:hidden" />
          出来ないことをお互いに協力、共創することで、
          <br />
          社会や人、企業の可能性を広げようという
          <br className="sm:hidden" />
          想いからこの活動はスタートしています。
        </p>
        <p>
          主役は子どもですが、親子でプログラミング体験や
          <br className="sm:hidden" />
          自然学習などを挑戦し学ぶことで、
          <br />
          親子それぞれで新しい気づきが
          <br className="sm:hidden" />
          生まれると考えています。
        </p>
        <p>
          そこでパートナーとなる、NPOや地元企業、
          <br className="sm:hidden" />
          大学生などと協力をして
          <br />「<b>ここでしかできない体験</b>」を創出しています。
        </p>
        <p>
          イベントを通して参加者だけではなく、関係した
          <br className="sm:hidden" />
          すべての人に
          <br className="hidden sm:block" />
          心が湧き立つような瞬間があること、
          <br className="sm:hidden" />
          新しい可能性が広がることを目指しています。
        </p>
        <p>
          さらに開催する地域を増やし、たくさんの
          <br className="sm:hidden" />
          パートナーと共創し、
          <br className="hidden sm:block" />
          ポジティブな社会が
          <br className="sm:hidden" />
          広がるようにこの活動をを進めていきます。
        </p>
      </section>
    </>
  )
}