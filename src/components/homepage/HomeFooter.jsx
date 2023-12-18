import React from 'react';
import Link from '@docusaurus/Link';
import { Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} DSDevStudio
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Dongshan-git"
              aria-label="Dyte's GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>

            <Link href="https://twitter.com/DongdongTweet" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
