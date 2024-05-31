'use client';

import Image from 'next/image';
import Logo01 from '@/styles/logo/type01.png';
import Logo02 from '@/styles/logo/type02.png';
import Logo03 from '@/styles/logo/type03.png';
import Button from '@/styles/ui/button';
import { useRouter } from 'next/navigation';
import { getRandomInt } from '@/utils/number';
import { useEffect, useState } from 'react';

export default function Home() {
  const { push } = useRouter();
  const [logoNumber, setLogoNumber] = useState(0);
  const Logos = [Logo01, Logo02, Logo03];

  useEffect(() => {
    setLogoNumber(getRandomInt(0, 2));
  }, []);

  return (
    <div
      className='
        flex w-[100vw] h-[100vh] bg-gradient-to-b from-[#FFCD00] to-[#FFFFFF]
        items-center justify-center
      '
    >
      <div className='flex flex-col items-center gap-8'>
        <Image src={Logos[logoNumber]} alt={'artism'} width={400} />
        <h1 className='text-2xl font-bold cursor-grab'>
          아티즘에서 영감을 나누세요.
        </h1>
        <Button onClickButton={() => push('/gallery')} isColored>
          아티즘 입장하기
        </Button>
      </div>
    </div>
  );
}
