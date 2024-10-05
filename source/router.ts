import HomePage from "./pages/home.html?raw";
import AboutPage from "./pages/about.html?raw";
import DocsPage from "./pages/docs.html?raw";
import "./router.css";

class Page {
  id: string;
  content: string;

  constructor(id: string, content: string) {
    this.id = id;
    this.content = content;
  }

  getHtmlSection(): HTMLElement {
    const section = document.createElement("section");
    section.setAttribute("id", this.id);
    section.innerHTML = this.content;
    return section;
  }
}

const pages: Page[] = [
  new Page("home", HomePage),
  new Page("about", AboutPage),
  new Page("docs", DocsPage),
];

for (const section of pages.map((v) => v.getHtmlSection())) {
  document.body.appendChild(section);
}
