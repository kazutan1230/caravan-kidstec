import { LineApply } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import { EventPanels } from "@/app/components/layout/menuPanel"
import { ScheduleTablist } from "@/app/components/layout/tablist"
import { Register } from "@/app/event/register"
import { Schedules } from "@/app/event/schedules"
import type { Guideline } from "@/app/interfaces/guideline"
import type { Schedule } from "@/app/interfaces/schedule"
import {
  EVENT,
  KANTO,
  KANTO_DEADLINE,
  KANTO_LINE,
  KANTO_START_DATE,
} from "@/app/lib/constant"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: `${KANTO.name}イベントの応募・スケジュール`,
}

export default function Kanto(): JSX.Element {
  const guideline: Guideline = {
    anchorLink: "requirement",
    participantsNumber: "２０組程（６０名）",
    startDate: KANTO_START_DATE,
    deadline: KANTO_DEADLINE,
    lineLink: KANTO_LINE,
  }
  const schedules: Schedule[] = [
    {
      alt: "Day 1",
      date: { year: "2024", month: "10", day: "26", dayOfWeek: "土" },
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      googleMapLink: "https://maps.app.goo.gl/o73uHVntuoTg3aym9",
      src: {
        am: "/202407/hiroshima_university/soldering_with_father.avif",
        pm: "/content/sheep_with_boy.avif",
      },
      title: {
        am: "ロボット製作",
        pm: "自然学習（農と食、いのちのてざわり）",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "クルックフィールズ",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://kurkkufields.jp/",
      },
      tags: { am: ["電子工作", "ロボット"], pm: ["自然学習"] },
    },
    {
      alt: "Day 2",
      date: { year: "2024", month: "11", day: "9", dayOfWeek: "土" },
      venue: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
      googleMapLink: "https://maps.app.goo.gl/98KzCvCeFggZY88P6",
      src: {
        am: "/202407/wedding/typing_boy.avif",
        pm: "/content/rays-blog_girl.avif",
      },
      title: {
        am: "プログラミング体験",
        pm: "謎解き体験！",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "レイのブログ",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://www.classroom-adventure.com/rays-blog-jpn",
      },
      tags: { am: ["ロボット", "プログラミング"], pm: ["ネットリテラシー"] },
    },
    {
      alt: "Day 3",
      date: { year: "2024", month: "11", day: "10", dayOfWeek: "日" },
      venue: "アクアテラス迎賓館 新横浜",
      address: "神奈川県横浜市港北区新横浜3-7-15",
      googleMapLink: "https://maps.app.goo.gl/yUm7wrRfMm1veozm6",
      src: {
        am: "/202407/wedding/smile_challenge.avif",
        pm: "/202407/wedding/bubbles_entrance.avif",
      },
      title: {
        am: "ロボット競技大会",
        pm: "結婚式体験",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "アクアテラス迎賓館 新横浜",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://www.tgn.co.jp/wedding/yokohama/aqy/",
      },
      tags: { am: ["ロボット", "プログラミング"], pm: ["結婚式体験"] },
    },
  ] as const

  return (
    <>
      <Heading menu={EVENT} submenus={[KANTO]} />
      <Image
        src={"/202410_kanto.avif"}
        width={540}
        height={540}
        alt="こどもテックキャラバン-関東イベント"
        priority={true}
        className="w-full"
      />
      <Schedules schedules={schedules} />
      <section className="mx-auto p-2 text-center w-max">
        <p className="font-bold text-sm md:text-xl">
          全日程参加が必須となります。
        </p>
        <p className="mb-3">
          <Link
            href={`#${guideline.anchorLink}`}
            className="font-bold link text-sky-400"
          >
            応募要項
          </Link>
          をご確認の上、
          <br />
          応募画面からお申し込みください。
        </p>
        <LineApply lineLink={KANTO_LINE} />
      </section>
      <ScheduleTablist schedules={schedules} />
      <Register guideline={guideline} />
      <LineApply lineLink={KANTO_LINE} classname="text-center" />
      <EventPanels menu={EVENT} submenu={KANTO} />
    </>
  )
}
