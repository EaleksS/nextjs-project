import  Layout  from './Layout';
import Link from 'next/link';
import { routerConstants } from '@/Constants/RouterConstants';

export default function Home() {
  return (
    <>
      <Layout title="Project">
        <div className="mainContainer">
          <nav className="nav">
            <Link href={routerConstants.LOGIN}>Вход</Link>
            <Link href={routerConstants.REGISTRATION}>Регистрация</Link>
            <Link href={routerConstants.FORGOT_PASSWORD}>Забыли пароль?</Link>
            <Link href={routerConstants.CONFIRM_MOBILE}>CONFIRM_MOBILE</Link>
          </nav>
        </div>
      </Layout>
    </>
  );
}
