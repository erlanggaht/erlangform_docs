import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    const basicFields = ['text', 'number', 'password', 'textarea', 'checkbox', 'select'];

    return [
      ...basicFields.map((field) => ({
        source: `/docs/${field}`,
        destination: `/docs/basic/${field}`,
        permanent: true,
      })),
      {
        source: '/docs/object',
        destination: '/docs/advanced/object',
        permanent: true,
      },
      {
        source: '/docs/arrays/:path*',
        destination: '/docs/advanced/arrays/:path*',
        permanent: true,
      },
    ];
  },
};

export default createMDX()(config);
