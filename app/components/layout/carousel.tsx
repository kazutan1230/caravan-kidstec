"use client"

import type { Indicator } from "@/app/interfaces/indicator"
import type { Carousel, Picture } from "@/app/interfaces/picture"
import type { Review } from "@/app/interfaces/review"
import { cloudfrontLoader } from "@/app/lib/loader"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"

export function TopCarousel(): JSX.Element {
  const topPictures: Carousel[] = [
    {
      alt: "自然学習",
      src: "/202407/hiroshima_university/capture_insect.avif",
      key: 1,
    },
    {
      alt: "ロボサバ大会",
      src: "/202407/wedding/enjoy_robot_with_family.avif",
      key: 2,
    },
    {
      alt: "結婚式体験",
      src: "/202407/wedding/bubbles_entrance.avif",
      key: 3,
    },
    {
      alt: "ブーケ作成",
      src: "/202311/wedding/select_flowers.avif",
      key: 4,
    },
    {
      alt: "プログラミング",
      src: "/202407/wedding/typing_with_mother.avif",
      key: 5,
    },
  ]
  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [pictures, setPictures] = useState<Carousel[]>([...topPictures])
  const [isBusy, setIsBusy] = useState<boolean>(false)
  let timeoutId: globalThis.Timer

  useEffect(() => {
    const leftPictures: Carousel[] = topPictures.map((picture) => {
      return {
        ...picture,
        key: picture.key - topPictures.length,
      }
    })
    setPictures([...leftPictures, ...topPictures])
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += carousel.scrollWidth / (topPictures.length * 2)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = carousel.scrollWidth / topPictures.length

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (maxScrollLeft < scrollLeft + buffer) {
        const nextPictures: Carousel[] = pictures.map((picture) => {
          return {
            ...picture,
            key: picture.key + topPictures.length,
          }
        })
        setPictures([...nextPictures])
      }
      if (scrollLeft < buffer) {
        const nextPictures: Carousel[] = pictures.map((picture) => {
          return {
            ...picture,
            key: picture.key - topPictures.length,
          }
        })
        setPictures([...nextPictures])
      }
    }, 100)
  }

  return (
    <>
      <div
        ref={carouselRef}
        className="carousel rounded-2xl shadow-lg w-full"
        onMouseEnter={() => setIsBusy(true)}
        onMouseLeave={() => setIsBusy(false)}
        onTouchStart={() => setIsBusy(true)}
        onTouchEnd={() => setIsBusy(false)}
        onScroll={() => ScrollEvent()}
      >
        {pictures.map((picture) => (
          <Image
            key={picture.key}
            loader={cloudfrontLoader}
            src={picture.src}
            height={1000}
            width={1000}
            alt={picture.alt}
            className="aspect-square carousel-item object-cover w-full"
          />
        ))}
      </div>
      <p className="text-center text-xs">
        ※&nbsp;写真は過去開催時のものです。
        <br />
        体験学習はイベントごとに異なります。
      </p>
    </>
  )
}

export function ReviewCarousel(): JSX.Element {
  const reviewLists: Review[] = [
    {
      description:
        "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
      areaAndUser: "第1回 広島 小4",
      key: 1,
    },
    {
      description:
        "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
      areaAndUser: "第1回 広島 小5",
      key: 2,
    },
    {
      description:
        "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
      areaAndUser: "第2回 広島 小5",
      key: 3,
    },
    {
      description:
        "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
      areaAndUser: "第2回 広島 小5、小6",
      key: 4,
    },
    {
      description:
        "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
      areaAndUser: "第2回 広島 小6",
      key: 5,
    },
    {
      description:
        "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
      areaAndUser: "第2回 広島 小5、中1",
      key: 6,
    },
    {
      description:
        "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
      areaAndUser: "第3回 広島 小4",
      key: 7,
    },
    {
      description:
        "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
      areaAndUser: "第3回 広島 小5",
      key: 8,
    },
    {
      description:
        "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
      areaAndUser: "第3回 広島 小4、小6",
      key: 9,
    },
    {
      description:
        "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
      areaAndUser: "第3回 広島 小4、中2",
      key: 10,
    },
    {
      description: "本当に素敵な体験を\nすることができました。",
      areaAndUser: "第4回 広島 小5",
      key: 11,
    },
    {
      description:
        "最初から最後まで子供自身が\n「やれた!できた!」の気持ちを\n少しでも感じられるように\n応援&フォローをしてくださり、\n本当にありがとうございました。\n特にハンダ付け、プロの技術の\nおかげでふさがってしまった穴を\nあけて下さり「自分のもの」で\n挑戦することができたことに\nとても感謝しています。\nお料理もすごくおいしかったです。\n幸せになりました！",
      areaAndUser: "第4回 広島 小2、小5",
      key: 12,
    },
    {
      description:
        "とても素晴らしい体験を\nありがとうございました。\n\nまた次回も\n参加したいと思います。\n\n皆様お疲れ様でした。",
      areaAndUser: "第4回 広島 小5、中2",
      key: 13,
    },
  ]
  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [reviews, setReviews] = useState<Review[]>([...reviewLists])
  const [isBusy, setIsBusy] = useState<boolean>(false)
  let timeoutId: globalThis.Timer

  useEffect(() => {
    const leftReviews: Review[] = reviewLists.map((review) => {
      return {
        ...review,
        key: review.key - reviewLists.length,
      }
    })
    setReviews([...leftReviews, ...reviewLists])
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += carousel.scrollWidth / (reviewLists.length * 2)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = carousel.scrollWidth / 5

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (maxScrollLeft < scrollLeft + buffer) {
        const nextPictures: Review[] = reviews.map((review) => {
          return {
            ...review,
            key: review.key + reviewLists.length,
          }
        })
        setReviews([...nextPictures])
      }
      if (scrollLeft < buffer) {
        const nextPictures: Review[] = reviews.map((review) => {
          return {
            ...review,
            key: review.key - reviewLists.length,
          }
        })
        setReviews([...nextPictures])
      }
    }, 100)
  }

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-center relative space-x-4"
      onMouseEnter={() => setIsBusy(true)}
      onMouseLeave={() => setIsBusy(false)}
      onTouchStart={() => setIsBusy(true)}
      onTouchEnd={() => setIsBusy(false)}
      onScroll={() => ScrollEvent()}
    >
      {reviews.map((review) => (
        <div
          key={review.key}
          className="bg-blue-100 carousel-item content-between grid m-2 p-2 rounded-2xl shadow-lg w-56"
        >
          <p className="my-auto text-sm whitespace-pre">{review.description}</p>
          <p className="flex h-fit items-center justify-center text-sm whitespace-pre">
            <UserCircleIcon className="text-rose-400 size-6 mr-1" />
            {review.areaAndUser}
          </p>
        </div>
      ))}
    </div>
  )
}

export function IndicatorCarousel(): JSX.Element {
  const programmingPictures: Picture[] = [
    {
      alt: "はんだ確認中…",
      src: "/202311/eda_island/check_solder.avif",
    },
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/202407/eda_island/soldering.avif",
    },
    {
      alt: "最終日のロボサバ大会！優勝目指そう！",
      src: "/202407/wedding/watch_robot_move.avif",
    },
    {
      alt: "ロボットが上手く動くコツを伝授！",
      src: "/202407/wedding/teaching.avif",
    },
    {
      alt: "ロボサバ大会に挑戦！上手に動くかな？",
      src: "/202407/wedding/put_robot_on_course.avif",
    },
    {
      alt: "ロボット作りに挑戦！",
      src: "/202311/eda_island/using_nipper.avif",
    },
  ]
  const eventPictures: Picture[] = [
    {
      alt: "採れたてのお魚に興味津々！",
      src: "/202407/eda_island/holding_fish.avif",
    },
    {
      alt: "広島大学のチェックポイント確認中…",
      src: "/202407/hiroshima_university/checking_course.avif",
    },
    {
      alt: "広島大学で昆虫採集！",
      src: "/202407/hiroshima_university/insect_netting_boy.avif",
    },
    {
      alt: "手作りのオリーブオイル、最初はまだ赤い！",
      src: "/202311/eda_island/olive_pouring.avif",
    },
    {
      alt: "ブーケを持って入場！",
      src: "/202311/wedding/wedding_bouquet.avif",
    },
    {
      alt: "ケーキ作りも自分で挑戦！",
      src: "/202407/wedding/pastry_chef_boy.avif",
    },
  ]
  const indicators: Indicator[] = [
    { title: "プログラミング体験", alt: programmingPictures[0].alt },
    { title: "体験学習", alt: eventPictures[0].alt },
  ] as const
  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [pictures, setPictures] = useState<Picture[]>([...programmingPictures])
  const [activeTab, setActiveTab] = useState<string>(programmingPictures[0].alt)
  const [isBusy, setIsBusy] = useState<boolean>(false)
  let timeoutId: globalThis.Timer

  useEffect(() => {
    setPictures([...eventPictures, ...programmingPictures])
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft +=
          carousel.scrollWidth /
          (programmingPictures.length + eventPictures.length)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function onClick(indicator: Indicator): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    if (indicator.alt === activeTab) {
      return
    }
    carousel.scrollLeft = 0
  }

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = carousel.scrollWidth / 5

    if (pictures[0].alt === programmingPictures[0].alt) {
      if (carousel.scrollLeft < maxScrollLeft / 2) {
        setActiveTab(programmingPictures[0].alt)
      } else {
        setActiveTab(eventPictures[0].alt)
      }
    } else if (pictures[0].alt === eventPictures[0].alt) {
      if (carousel.scrollLeft < maxScrollLeft / 2) {
        setActiveTab(eventPictures[0].alt)
      } else {
        setActiveTab(programmingPictures[0].alt)
      }
    }

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (maxScrollLeft < scrollLeft + buffer || scrollLeft < buffer) {
        if (pictures[0].alt === programmingPictures[0].alt) {
          setPictures([...eventPictures, ...programmingPictures])
        } else if (pictures[0].alt === eventPictures[0].alt) {
          setPictures([...programmingPictures, ...eventPictures])
        }
      }
    }, 100)
  }

  return (
    <>
      <div role="tablist" className="content-end gap-1 grid grid-cols-2">
        {indicators.map((indicator) => (
          <button
            key={indicator.title}
            type="button"
            role="tab"
            onClick={() => onClick(indicator)}
            className={`py-1 rounded-lg shadow-lg ${indicator.alt === activeTab ? "bg-teal-400" : "bg-gray-100"}`}
          >
            <strong>{indicator.title}</strong>
          </button>
        ))}
      </div>
      <div
        ref={carouselRef}
        className="carousel rounded-2xl shadow-lg w-full"
        onMouseEnter={() => setIsBusy(true)}
        onMouseLeave={() => setIsBusy(false)}
        onTouchStart={() => setIsBusy(true)}
        onTouchEnd={() => setIsBusy(false)}
        onScroll={() => ScrollEvent()}
      >
        {pictures.map((picture) => (
          <Image
            key={picture.alt}
            loader={cloudfrontLoader}
            src={picture.src}
            height={1000}
            width={1000}
            alt={picture.alt}
            className="aspect-square carousel-item object-cover w-full"
          />
        ))}
      </div>
      <p className="text-center text-xs">
        ※&nbsp;写真は過去開催時のものです。
        <br />
        体験学習はイベントごとに異なります。
      </p>
    </>
  )
}
