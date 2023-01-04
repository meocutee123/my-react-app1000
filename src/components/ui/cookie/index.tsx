import { useEffect, useRef } from 'react';
import { CookieNotice } from './index.styled';
import { ReactComponent as Close } from '@assets/icons/close.svg';
export default function Cookie() {
  const cookieNotice = useRef<HTMLDivElement | null>(null)

  //set cookie when use access the page
  useEffect(() => {
    const cookieValues = 1
    const EXPIRES_IN_DATES = 30

    const d = new Date()
    d.setTime(d.getTime() + (EXPIRES_IN_DATES*24*60*60*1000));
    const expires = 'expires='+ d.toUTCString();

    document.cookie = 'user_cookie_consent=' + cookieValues + ';' + expires + ';path=/';
  })

  const close = () => {
    const nativeElement = cookieNotice.current as HTMLDivElement
    if(nativeElement === null) return

    nativeElement.style.display = 'none'
  }
  return (
    <CookieNotice ref={cookieNotice}>
      <Close onClick={() => close()} />
      <p>
        This website uses cookies to offer the more relevant information. By
        using this site you consent to cookies.
      </p>
    </CookieNotice>
  );
}
