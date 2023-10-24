# Blog

Nothing to see here, just a blog.

## Visit the blog

### [Github Pages](https://github.com/Dongshan-git/blog/settings/pages)

[https://github.dscode.top/](https://github.dscode.top/)

### [Vercel](https://vercel.com/dashboard)

[https://vercel.dscode.top/](https://vercel.dscode.top/)

### [Cloudflare Pages](https://dash.cloudflare.com/)

[https://cloudflare.dscode.top/](https://cloudflare.dscode.top/)

### [Zeabur](https://dash.zeabur.com/projects)

[https://zeabur.dscode.top/](https://zeabur.dscode.top/)

## Deploy bug fix

[issue 742](https://github.com/peaceiris/actions-gh-pages/issues/742) of
the [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) GitHub
Action [mentions](https://github.com/peaceiris/actions-gh-pages/issues/742#issuecomment-1114440714):

> I had to change these settings
>
under [Settings-Action-General](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository).
> Maybe worth calling out in docs:
>
> * Workflow Permissions: Read (sic) and Write
> * Allow GitHub Actions to approve pull requests

* * *

And [issue 497](https://github.com/peaceiris/actions-gh-pages/issues/497#issuecomment-703025901) suggested:

> Fixed by recreating the API Deploy KEY.

Which lead to [PR 383](https://github.com/peaceiris/actions-gh-pages/pull/383/files) confirming:

> The generated `GITHUB_TOKEN` (github\_token) does not support to push to an external repository.  
> Use deploy\_key or personal\_token.

### Installation

1. Clone the repo

```sh
git clone 
```

2. Install NPM packages

```sh
npm install
```

3. Run the app

```sh
npm start
```
