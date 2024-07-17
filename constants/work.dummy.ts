import img01 from '@/assets/img01.jpg';
import img02 from '@/assets/img02.jpg';
import img03 from '@/assets/img03.jpg';
import img04 from '@/assets/img04.jpg';
import img05 from '@/assets/img05.jpg';
import img06 from '@/assets/img06.jpg';
import img07 from '@/assets/img07.jpg';
import img08 from '@/assets/img08.jpg';
import img09 from '@/assets/img09.jpg';
import img10 from '@/assets/img10.jpg';
import img11 from '@/assets/img11.jpg';
import img12 from '@/assets/img12.jpg';
import img13 from '@/assets/img13.jpg';
import img14 from '@/assets/img14.jpg';
import img15 from '@/assets/img15.jpg';
import img16 from '@/assets/img16.jpg';

interface WorkData {
  id: number;
  title: string;
  description: string;
  img: string;
}

export const workdata: WorkData[] = [
  {
    id: 1,
    title: '과일의 향연',
    description:
      '다채로운 과일들이 어우러진 그림입니다. 다양한 색감과 질감이 돋보이며, 마치 실제 과일을 보는 듯한 생동감이 느껴집니다.',
    img: img01.src,
  },
  {
    id: 2,
    title: '평화로운 푸른 머리 여성',
    description:
      '푸른 머리의 여성이 눈을 감고 있는 평화로운 그림입니다. 여성의 표정에서 전해지는 차분함과 고요함이 감상자에게도 전해집니다.',
    img: img02.src,
  },
  {
    id: 3,
    title: '기하학적 미로',
    description:
      '기하학적인 직사각형들이 어우러진 복잡한 그림입니다. 직사각형들의 배치와 색상의 조화가 독특한 매력을 자아냅니다.',
    img: img03.src,
  },
  {
    id: 4,
    title: '파스텔 추상화',
    description:
      '파스텔톤의 색상들이 조화를 이루는 추상화입니다. 부드러운 색감과 추상적인 형태가 보는 이로 하여금 다양한 감정을 느끼게 합니다.',
    img: img04.src,
  },
  {
    id: 5,
    title: '뒤섞인 사람들',
    description:
      '사람들이 기이한 자세로 뒤섞인 추상화입니다. 다양한 인물들이 독특한 자세로 어우러져서 생동감을 더합니다.',
    img: img05.src,
  },
  {
    id: 6,
    title: '수근',
    description:
      '소복을 입은 사람이 쌀가마니 앞에서 고민중인 그림입니다. 그의 고민과 걱정이 그림에서 고스란히 느껴집니다.',
    img: img06.src,
  },
  {
    id: 7,
    title: '이상덕',
    description:
      '작업복을 입은 옛날 사람이 나를 응시하는 그림입니다. 그의 강렬한 눈빛과 표정이 인상적입니다.',
    img: img07.src,
  },
  {
    id: 8,
    title: '푸른 과일',
    description:
      '푸른 과일이 유화로 그려진 그림입니다. 독특한 색감과 질감이 돋보이며, 과일의 신선함이 느껴집니다.',
    img: img08.src,
  },
  {
    id: 9,
    title: '맨투맨과 청바지',
    description:
      '맨투맨과 청바지가 유화로 그려진 그림입니다. 일상적인 의상이 유화의 질감으로 새롭게 표현되었습니다.',
    img: img09.src,
  },
  {
    id: 10,
    title: '다양한 칫솔들',
    description:
      '벌어진 칫솔, 둥근 칫솔 등 다양한 칫솔들이 소쿠리에 담겨있는 그림입니다. 유화의 질감이 칫솔의 디테일을 잘 표현하고 있습니다.',
    img: img10.src,
  },
  {
    id: 11,
    title: '선인장과 모닥불',
    description:
      '넓고 커다란 선인장 위에 작은 동물들과 알 수 없는 생명체 하나가 모닥불에 둘러앉아 있는 그림입니다.',
    img: img11.src,
  },
  {
    id: 12,
    title: '황혼의 선인장',
    description:
      '듬성듬성 푸르른 잔디 위에 선인장들이 자라고 있는 그림입니다. 황혼 시간대의 분위기가 물씬 느껴집니다.',
    img: img12.src,
  },
  {
    id: 13,
    title: '기하학적 문양',
    description:
      '기하학적인 문양이 정교한 패턴을 이루고 있는 그림입니다. 푸른색과 보라색의 조화가 인상적입니다.',
    img: img13.src,
  },
  {
    id: 14,
    title: '사념에 잠긴 붉은 남자',
    description:
      '붉은 남자가 푸른 방에서 나를 응시하고 있는 그림입니다. 그의 사념에 가득 찬 표정이 감상자를 생각에 잠기게 합니다.',
    img: img14.src,
  },
  {
    id: 15,
    title: '내면의 뜨거움',
    description:
      '뜨거워 보이는 남자가 무엇인가를 흘겨보는 그림입니다. 그의 내면이 그림을 통해 표현되고 있습니다.',
    img: img15.src,
  },
  {
    id: 16,
    title: '줄타기',
    description:
      '조선시대 광대가 줄타기를 하고 있는 그림입니다. 그의 균형 잡힌 자세와 생동감이 인상적입니다.',
    img: img16.src,
  },
];
