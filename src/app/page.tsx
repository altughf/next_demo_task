import Link from 'next/link';

export default function Home() {
  return (

    /* html > root layout tag */
    /* html > root layout tag */
    <div className="h-full w-full font-bold">

      <div>
          <Link className='relative bg-neutral-400 text-2xl text-white w-96 h-32' href="/login">Kullanıcı Girişi Yap !</Link>
      </div>

    </div>

  );
}
