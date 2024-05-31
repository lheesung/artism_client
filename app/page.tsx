'use client';

import Image from 'next/image';
import Logo01 from '@/styles/logo/type01.png';
import Button from '@/styles/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();
  return (
    <div
      className='
        flex w-[100vw] h-[100vh] bg-gradient-to-b from-[#FFCD00] to-[#FFFFFF]
        items-center justify-center
      '
    >
      <div className='flex flex-col items-center gap-8'>
        <Image src={Logo01} alt={'Logo01'} width={400} />
        <h1>아티즘에서 영감을 나누세요.</h1>
        <Button onClickButton={() => push('/gallery')} isColored>
          아티즘 입장하기
        </Button>
      </div>
    </div>
  );
}
