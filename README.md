# Mark — password-protected photo page

## 1. Firebase (about 5 minutes)
1. console.firebase.google.com → Add project.
2. Build → Authentication → Get started → enable **Email/Password**.
3. Build → Storage → Get started. Upload Mark's photo as `private/mark.jpg`.
4. Storage → Rules → paste the contents of `storage.rules` → Publish.
5. Project settings → Your apps → add a **Web** app → copy the config into `firebase-config.js`.

## 2. GitHub
Create a new repo and upload these files (index.html, firebase-config.js, storage.rules, README.md).

## 3. Render
Static site, build command `echo done`, publish directory `.`

## 4. After it's live
Firebase → Authentication → Settings → Authorized domains → add your `*.onrender.com` URL.
