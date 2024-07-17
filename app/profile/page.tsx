'use client';

import Header from '@/components/common/Header';
import PagePadding from '@/styles/ui/pagePadding';
import Image from 'next/image';
import React from 'react';

import Logo01 from '@/styles/logo/type01.png';
import Logo02 from '@/styles/logo/type02.png';
import Logo03 from '@/styles/logo/type03.png';
import Button from '@/styles/ui/button';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { push } = useRouter();
  return (
    <>
      <Header />
      <PagePadding>
        <div className='mt-[60px] flex flex-col justify-center items-center text-center'>
          <Image src={Logo01} alt={'logo'} width={200} />
          {/* 아직 아티즘의 정식 릴리즈 전입니다.
          로그인과 나의 작업실은 곧 이용하실 수 있습니다. */}
          <p className='mt-3'>아직 아티즘의 정식 릴리즈가 되지 않았습니다.</p>
          <p>작업실과 '나'의 활동 서비스는 곧 이용하실 수 있습니다.</p>
          <p>영감을 찾고 계시면 곧 아티즘에서 만나뵙겠습니다.</p>
          <Button onClick={() => push('/gallery')}>아티즘으로 돌아가기</Button>
        </div>
      </PagePadding>
    </>
  );
};

export default Profile;
