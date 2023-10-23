import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';

const products = [
  {
    name: 'Live Video',
    href: 'https://dyte.io/video-sdk',
  },
];

const developers = [
  {
    name: 'Guides',
    href: '/guides',
  },
];

const usecases = [
  { name: 'Ed-Tech', href: 'https://dyte.io/use-cases/ed-tech' },
];

const company = [{ name: 'FAQ', href: '/' }];

const comparisons = [
  { name: 'Dyte vs Agora', href: 'https://dyte.io/agora-competitor' },
];

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
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <img src="/logo/ds.svg" alt="Dyte" className="h-9 w-fit lg:h-12" />
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Usecases" links={usecases} />
          <Links name="Company" links={company} />
          <Links name="Compare" links={comparisons} />
        </div>

        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link
              href="https://dyte.io/privacy-policy"
              className="text-inherit hover:text-black hover:underline"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="https://dyte.io/terms-of-service"
              className="text-inherit hover:text-black hover:underline"
            >
              Terms of Service
            </Link>
            &bull;
            <Link
              href="https://dyte.io/website-terms-of-use"
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
            <Link
              href="https://github.com/dyte-io"
              aria-label="Dyte's GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>

            <Link href="https://twitter.com/dyte_io" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
