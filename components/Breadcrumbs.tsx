import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumbs = () => {
  const router = useRouter();
  const pathArray = router.asPath.split('/').filter((path) => path);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/');
          return (
            <li key={href} className="breadcrumb-item">
              <Link href={href}>{path}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
