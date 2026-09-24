import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ArticleDetail } from './components/ArticleDetail'; 
import { Contact } from './components/Contact'; 

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<ArticleDetail />} />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
        </div>
      </main>

    </>
  );
}