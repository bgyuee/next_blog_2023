import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  )
}
