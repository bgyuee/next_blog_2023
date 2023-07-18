import Hero from "@/components/Hero";

export default function AboutPage() {
  const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2"
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          꾸준히 발전하고 있는 프론트엔드 개발자
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          {`이젠아카데미 평생교육원 'UI/UX 웹&앱 디자인&프론트엔드(React.js)'과정 수료`}<br />
          (2022-12-14 ~ 2023-5-24)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          Html, Css, Javascript<br /> 
          Sass, Styled Components, Tailwind Css<br /> 
          React, Next, Firebase, Mongodb<br />
          VS Code, Git, Figma, Photoshop
        </p>
      </section>
    </>
  )
}
