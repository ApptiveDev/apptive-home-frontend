import { ReactNode } from 'react';
import Header from '@components/organisms/semantic/Header';

interface PageProps {
  children?: ReactNode;
  hideHeader?: boolean;
}

function Page({ children, hideHeader }: PageProps) {
  return (
    <>
      {hideHeader
        ? null
        : <Header />
      }
      {children}
    </>
  );
}

export default Page;
