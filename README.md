# Readme

The purpose of this project is to create a simple web application utilizing **Next.js**. The application showcases the use of one or more of the following data storage and state management solutions, which are integral to modern web development:

- **Cookies**
- **JWT (JSON Web Token)**
- **Session ID**
- **Local Storage**

## Operating instructions

This section will detail the usage of the application once it is complete or has at least some functionality. 

## The technologies

This section contains brief explanations of the showcased technologies.

### Cookies

Cookies are small, often max 4 KB/cookie, amounts of data, usually created by a webserver and stored clientside by the browser. Cookies are by default automatically sent by the browser with every request associated with that cookie's domain.

Originally created to solve the statelessness issue of the HTTP protocol in the 1990s, cookies still see wide contemporary use. Cookies are used to store, for example, user preferences or Session IDs. Of course, cookies can also be used to track internet activity and profile users, often in hopes of better advertisement targeting.

Cookies consist of key-value pairs and additional metadata. While the key-value pair contains the actual data meant to be transferred between the client and the server, metadata contains various important flags and additional information.

Cookie content example:  
`sessionId=abc123; Path=/; HttpOnly; Secure; SameSite=Strict`  

In the example above, ``sessionId=abc123`` is the key-value pair. ``Path=/`` denotes the URL path within the domain where the cookie should be included in the request. In this example all requests to the domain should include this cookie. ``HttpOnly``, ``Secure`` and ``SameSite=Strict`` are important flags which limit the usage and increase the security of the cookie. ``HttpOnly`` restricts access to the cookie by clientside JavaScript and ``Secure`` marks the cookie to be only transmitted via HTTPS connections. ``SameSite=Strict`` is a way to mitigate the risk of CSRF attacks as this prevents the cookie being sent with cross-origin requests.


### JWT

JSON Web Tokens are a standardized way of storing/transmitting data, most often used in the process of authorizing a user to access certain content on a webserver after they have been authenticated.

One core advantage of JWTs is that they are self-contained. They contain all the necessary data to authorize the token bearer to do what they want to do and so the server does not have to maintain session data in a database or in-memory storage.

a JWT consists of a Header, Payload and Signature separated by dots. The header contains metadata about the token (type, signing algorithm), the payload contains the actual content (claims) and the signature is a way for the issuing server to check that the token has not been modified clientside.

JWT can be stored clientside in a cookie, Local Storage or Session Storage. Out of these, cookie with correct flags is the safest option.

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

- [jwt.io](https://jwt.io/)
- [rfc-editor - RFC 7519 (JWT)](https://www.rfc-editor.org/info/rfc7519)


### Session ID

- [techtarget - session ID](https://www.techtarget.com/searchsoftwarequality/definition/session-ID)

### Local Storage
- [w3schools HTML Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp)
- [mdn web docs - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

### Various subjects
- [ChatGpt](https://chatgpt.com/)
- [Youtube - Web Dev Simplified - JavaScript Cookies vs Local Storage vs Session Storage](https://www.youtube.com/watch?v=GihQAC1I39Q)
- [Youtube - Web Dev Simplified -  What Is JWT and Why Should You Use JWT ](https://www.youtube.com/watch?v=7Q17ubqLfaM)
- [Youtube - Matt on Data Science - JWT Authentication Explained](https://www.youtube.com/watch?v=iHNkGQyJxJs)
- [Youtube - ByteMonk -  JSON Web Tokens (JWTs) explained with examples | System Design ](https://www.youtube.com/watch?v=iB__rLXGsas)
- [Youtube - ByteMonk -  OAuth 2.0 explained with examples ](https://www.youtube.com/watch?v=ZDuRmhLSLOY)
- [Youtube - Nikita Dev -  How Does JWT Authentication Work? (JSON Web Token) | Tokens vs Sessions ](https://www.youtube.com/watch?v=hoBSjmrwF1k)
- [Youtube - ByteByteGo -  Session Vs JWT: The Differences You May Not Know! ](https://www.youtube.com/watch?v=fyTxwIa-1U0)
- [Youtube - Code Realm -  Authentication on the Web (Sessions, Cookies, JWT, localStorage, and more) ](https://www.youtube.com/watch?v=2PPSXonhIck)
- [Youtube - Steve Griffith - Prof3ssorSt3v3  - Browser Persistent Data Storage ](https://www.youtube.com/watch?v=OOcxXyckmcs)


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
