declare module 'next' {
  interface PageProps {
    params?: { id: string } | Record<string, string | string[] | undefined>;
    searchParams?: Record<string, string | string[]>;
  }
}

export {}; 