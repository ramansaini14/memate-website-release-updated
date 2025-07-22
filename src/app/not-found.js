'use client';

import AppWrapper from '../components/AppWrapper';
import PageNotFound from '../components/error-page';

export default function NotFound() {
  return (
    <AppWrapper>
      <PageNotFound redirects={1} />
    </AppWrapper>
  );
}
