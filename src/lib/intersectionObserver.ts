import * as Styles from "../styles/index.module.scss"

const InterSectionObserver = () => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0%",
    threshold: 0
  }

  const observer = new IntersectionObserver(doWhenIntersect, options)

  // 監視対象にしたい要素
  const elements = document.querySelectorAll<HTMLElement>(`.${Styles.sa}`)

  // それぞれの要素を監視対象にする
  elements.forEach((element: Element) => {
    observer.observe(element)
  })

  // 交差したときに呼び出される関数
  function doWhenIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        addShowClass(entry.target)
      }
    })
  }

  // showクラスを付与する関数
  function addShowClass(element: Element) {
    element?.classList.add(Styles.show)
  }
}

export default InterSectionObserver
