import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Github, Youtube } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';

const products = [{ name: 'Blog', href: '/blog' }];

const developers = [{ name: 'Blog', href: '/blog' }];

const usecases = [{ name: 'Blog', href: '/blog' }];

const company = [{ name: 'Blog', href: '/blog' }];

const comparisons = [{ name: 'Blog', href: '/blog' }];

function Safety({ className }) {
  return (
    <div
      className={clsx(
        'flex h-24 max-w-[418px] overflow-clip rounded-2xl bg-white',
        className,
      )}
    >
      <div className="flex flex-1 place-items-center justify-center rounded-2xl bg-white px-4 py-6 font-jakarta font-bold text-gray-500">
        Your Security,
        <br />
        Our Priority.
      </div>
      <div className="flex flex-1 items-center justify-around px-6">
        <img src="/img/soc-compliant-1.png" />
        <img src="/img/vector.png" />
      </div>
    </div>
  );
}

function Links({ name, links }) {
  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="text-base text-gray-700 hover:text-primary hover:no-underline"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Usecases" links={usecases} />
          <Links name="Company" links={company} />
          <Links name="Compare" links={comparisons} />
        </div>

        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <Safety className="flex w-full max-w-full lg:hidden" />

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link
              href="/blog"
              className="text-inherit hover:text-black hover:underline"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="/blog"
              className="text-inherit hover:text-black hover:underline"
            >
              Terms of Service
            </Link>
            &bull;
            <Link
              href="/blog"
              className="text-inherit hover:text-black hover:underline"
            >
              Website Terms of Use
            </Link>
            &bull;
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} Dyte Inc.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/blog" aria-label="Dyte's GitHub Organization">
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>

            <Link hhref="/blog" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link href="/blog" aria-label="Dyte YouTube Channel">
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
