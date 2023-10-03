'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '@/firebase/firebase';
import InnerHeader from '../innerHeader/InnerHeader';

import styles from './Header.module.scss';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf('@'));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        // TODO: 유저 정보를 리덕스 스토어에 저장하기
      } else {
        setDisplayName('');
        // TODO: 유저 정보를 리덕스 스토어에서 지우기
      }
    });
  }, []);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('로그아웃 되었습니다.');
        router.push('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/reset'
  ) {
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={'/admin/dashboard'}>관리자</Link>
          </li>

          <li className={styles.item}>
            <Link href={'/order-history'}>주문 목록</Link>
          </li>
          <li className={styles.item}>
            <Link href={'/'} onClick={logoutUser}>
              로그아웃
            </Link>
          </li>

          <li className={styles.item}>
            <Link href={'/'}>제휴 마케팅</Link>
          </li>

          <li className={styles.item}>
            <Link href={'/'}>쿠팡 플레이</Link>
          </li>

          <li className={styles.item}>
            <Link href={'/'}>고객센터</Link>
          </li>
        </ul>
      </div>
      {pathname.startsWith('/admin') ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
