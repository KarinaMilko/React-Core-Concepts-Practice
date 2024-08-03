// import UserLists from "./components/UserLists";

// function App() {
//   return (
//     <>
//       <UserLists />;
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------

// import SignUpForms from "./components/SignUpForms";

// function App() {
//   return <SignUpForms />;
// }

// export default App;

//---------------------------------------------------------------
// import Slider from "./components/Slider";

// function App() {
//   const imageUrls = [
//     "https://cdn.esahubble.org/archives/images/wallpaper2/heic2017a.jpg",
//     "https://cdn.esahubble.org/archives/images/thumb300y/potw2050a.jpg",
//     "https://cdn.esahubble.org/archives/images/thumb300y/heic0506a.jpg",
//     "https://cdn.esahubble.org/archives/images/thumb300y/potw2110a.jpg",
//     "https://cdn.esahubble.org/archives/images/thumb300y/opo9828c.jpg",
//     "https://cdn.esahubble.org/archives/images/thumb700x/opo0613a.jpg",
//   ];

//   return (
//     <>
//       <Slider imageUrls={imageUrls} />
//     </>
//   );
// }

// export default App;
//---------------------------------------------------------------------
// import Weather from "./components/Weather";

// function App() {
//   return (
//     <>
//       <Weather />
//     </>
//   );
// }

// export default App;
// -------------------------------------------------------------

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Books from "./pages/Books";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/books/*" element={<Books />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
