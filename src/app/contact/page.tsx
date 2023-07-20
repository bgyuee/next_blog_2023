import ContactForm from "@/components/ContactForm";
import { AiFillGithub } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";;
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Gyuyeop에게 메일 보내기",
}

export default function ContactPage() {
  const LINKS = [
    {icon: <AiFillGithub />, url:'https://github.com/bgyuee', title:"깃허브 바로가기"},
    {icon: <FaBookOpen />, url:'https://bgyuee.github.io/portfolio/', title:"포트폴리오 바로가기"}
  ]
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>parkgyuyeop@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noreferrer" 
              title={link.title} 
              className="text-5xl hover:text-yellow-400"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  )
}
