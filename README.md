
# React Supplications (أذكار المسلم)

## Project Description

**React Supplications** is a modern web application built with React and Vite.  
It provides a comprehensive collection of daily Islamic supplications (Azkar), prayers, Quranic verses, Ruqyah, and the Beautiful Names of Allah, all presented in an organized and user-friendly interface for Muslims.

---

## Features

- Morning and Evening Azkar (supplications)
- Azkar after prayers, before sleep, and upon waking up
- Ruqyah (spiritual healing) from the Quran and Sunnah
- The Beautiful Names of Allah (Asma’ Allah Al-Husna)
- Various Islamic prayers (duas) for different occasions
- Responsive design for mobile and desktop devices
- Easy sharing of website links
- Simple and intuitive navigation
- Full Arabic language support

---

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment to GitHub Pages

---

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/your-mwafg-gumma/islam-book.git

```

### Install Dependencies

```sh
npm install
```

### Run the App Locally

```sh
npm run dev
```

Open the local development URL shown in your terminal (usually  http://localhost:3000/islam-book)

---

## Deployment to GitHub Pages

1. **Set the `homepage` field in `package.json`:**

   ```json
   "homepage": "https://mwafg-guma.github.io/islam-book"
   ```

2. **Build the project:**

   ```sh
   npm run build
   ```

3. **Deploy to GitHub Pages:**

   ```sh
   npm run deploy
   ```

4. **Make sure your repository’s GitHub Pages settings point to the `gh-pages` branch.**

---

## Project Structure

```
src/
  components/
    Links/
    LinksBox/
    Main/
    Pages/
  Remembrances.json
  TheNames.json
public/
  404.html
  index.html
package.json
README.md
```

---

## Contribution

Contributions are welcome!  
If you find a bug or want to suggest a new feature, please open an Issue or submit a Pull Request.

---

## License

All rights reserved © React Supplications 2025

---

## Useful Links

- [Live Website](https://mwafg-gumma.github.io/islam-book)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/en/main)

---

## Contact

For questions or suggestions, please use the "Contact Us" page on the website or open an [Issue](https://github.com/mwafg-gumma/islam-book/issues) on GitHub.


 React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
