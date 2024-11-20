# Readme

The purpose of this project is to create a simple web application utilizing **Next.js**. The application showcases the handling and utilization of one or more of the following web storage mechanisms, which are integral to modern web developement:

- **Cookies**
- **JWT (JSON Web Token)**
- **Session ID**
- **Local Storage**

## Operating instructions

This section will detail the usage of the application once it is complete or has at least some functionality. 

## The technologies

This section contains a brief explanation of the showcased technologies.

### Cookies

:cookie:

### JWT

:ticket:

### Session ID

Session ID is a way for a website to identify a user and maintain information about what the user is doing and possible data serverside during the session. For example providing the user seamless interaction across a multipage domain or maintaining the contents of a shopping-cart.

Session ID is created by the server and sent to the user, often in a cookie.  It is most often a randomly generated alphanumeric string. The user subsequentially send the Session ID with every request related to that session (if it was stored in a cookie).

Session ID can be given a finite lifespan by setting an expiration date for the cookie it was transmitted in. 

### Local Storage

Part of Web Storage API, which enables browsers, and by extension websites, to store data locally on the client-side. The data in Local Storage is stored indefinitely unless expicilty deleted by the user or the website.

Storage of data in Local Storage is done with key-value pairs, where the actual value (data) is stored in string format. Local Storage offers a rather sizable amount of storage space to websites, up to 5-10 MB, depending on the browser.

Data in Local Storage is meant to be domain specific and thus somewhat isolated but as it is accessible via JavaScript, it is vulnerable to XSS attacks.

Related to Local Storage is Session Storage which is essentially the same, but automatically clears itself when the user closes the related browser tab.

## Sources

Here are listed the sources used in [The technologies](#the-technologies) part of this Readme.

### Cookies


### JWT


### Session ID

- [techtarget - session ID](https://www.techtarget.com/searchsoftwarequality/definition/session-ID)

### Local Storage
- [w3schools HTML Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp)
- [mdn web docs - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

### Various subjects
- [ChatGpt](https://chatgpt.com/)

---

## Next.Js create project documentation

This section contains the default documentation created with a new Next.js project. It might be removed at a later date but is left here now for reference.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
