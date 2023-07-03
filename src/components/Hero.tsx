import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <section className='flex flex-col items-center my-0 mx-auto'>
        <Image 
            className="rounded-full"
            src={profileImage} 
            alt='프로필 사진' 
            width={180}
            height={180}
            priority
        />
        <h2 className="text-3xl font-bold mt-2">{"Hi I'm Gyuyeop"}</h2>
        <h3 className="text-xl font-semibold">Frontend Developer</h3>
        <p>Next.js를 공부하고 있어요~</p>
        <Link href="/contact" className="">
          <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
        </Link>
    </section>
  )
}
