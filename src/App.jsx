// import { Route,
// createBrowserRouter,
// createRoutesFromElements,
// RouterProvider
// } from "react-router-dom"
// import HomePage from "./components/Pages/HomePage"
// import MainLayout from "./components/Main/MainLayout" 
// import One from "./components/Links/One"
// import Second from "./components/Links/Second"
// import Third from "./components/Links/Third"
// import Four from "./components/Links/Four"
// import Morning from "./components/LinksBox/Morning"
// import Evening from "./components/LinksBox/Evening"
// import Apray from "./components/LinksBox/Apray"
// import Bpray from "./components/LinksBox/Bpray"
// import WakeUp from "./components/LinksBox/WakeUp"
// import Tasbih from "./components/LinksBox/Tasbih" 
// import Food from "./components/LinksBox/Food" 
// import Ablution from "./components/LinksBox/Ablution"
// import Quran from "./components/LinksBox/Quran"
// import Prayer from "./components/LinksBox/Prayer"
// import Legal from "./components/LinksBox/Legal"
// import Hajj from "./components/LinksBox/Hajj"
// import AlHasani from "./components/LinksBox/AlHasani"
// import Pray from "./components/LinksBox/Pray"
// import Fadl from "./components/LinksBox/Fadl"
// import Mosque from "./components/LinksBox/Mosque"


// const router = createBrowserRouter (
//   createRoutesFromElements (
//     <Route  path="/" element={<MainLayout  />}>
//     <Route path="/islam-Book" element={<HomePage /> } />
//     <Route path="/one" element={<One /> } />
//     <Route path="/second" element={<Second /> } />
//     <Route path="/third" element={<Third /> } />
//     <Route path="/four" element={<Four /> } />
//     <Route path="/أذكار-الصباح" element={<Morning /> } />
//     <Route path="/أذكار-المساء" element={<Evening/> } />
//     <Route path="/أذكار-بعد-السلام-من-الصلاة-المفروضة " element={<Apray/> } />
//     <Route path="/أذكار-النوم" element={<Bpray/> } />
//     <Route path="/أذكار-الإستيقاظ-من-النوم" element={<WakeUp/> } />
//     <Route path="/تسابيح-تسبيح-السبحة-أذكار-عظيمة" element={<Tasbih/> } />
//     <Route path="/أذكار-الطعام-والشراب-والضيف" element={<Food/> } />
//     <Route path="/أذكار-الوضوء" element={<Ablution/> } />
//     <Route path="/دعاء-ختم-القرآن-الكريم" element={<Quran/> } />
//     <Route path="/أدعية-للميت" element={<Prayer/> } />
//     <Route path="/الرقية-الشرعية-من-القرآن-والسن" element={<Legal/> } />
//     <Route path="/أذكار-الحج-والعمرة" element={<Hajj/> } />
//     <Route path="/أسماء-الله-الحسنى" element={<AlHasani/> } />
//     <Route path="/أذكار-الصلاة" element={<Pray/> } />
//     <Route path="/فضل الدعاء" element={<Fadl/> } />
//     <Route path="/أذكارالمسجد" element={<Mosque/> } />
//     </Route>
//   ),
// );

// const App = () => {
//   return ( <RouterProvider router={router} /> )
// }

// export default App


// import { Routes, Route, HashRouter } from "react-router-dom";
// import HomePage from "./components/Pages/HomePage";
// import MainLayout from "./components/Main/MainLayout";
// import One from "./components/Links/One";
// import Second from "./components/Links/Second";
// import Third from "./components/Links/Third";
// import Four from "./components/Links/Four";
// import Morning from "./components/LinksBox/Morning";
// import Evening from "./components/LinksBox/Evening";
// import Apray from "./components/LinksBox/Apray";
// import Bpray from "./components/LinksBox/Bpray";
// import WakeUp from "./components/LinksBox/WakeUp";
// import Tasbih from "./components/LinksBox/Tasbih";
// import Food from "./components/LinksBox/Food";
// import Ablution from "./components/LinksBox/Ablution";
// import Quran from "./components/LinksBox/Quran";
// import Prayer from "./components/LinksBox/Prayer";
// import Legal from "./components/LinksBox/Legal";
// import Hajj from "./components/LinksBox/Hajj";
// import AlHasani from "./components/LinksBox/AlHasani";
// import Pray from "./components/LinksBox/Pray";
// import Fadl from "./components/LinksBox/Fadl";
// import Mosque from "./components/LinksBox/Mosque";

// const App = () => {
//   return (
//     <HashRouter>
//       <MainLayout>
//         <Routes>
//           <Route path="/islam-Book" element={<HomePage />} />
//           <Route path="/one" element={<One />} />
//           <Route path="/second" element={<Second />} />
//           <Route path="/third" element={<Third />} />
//           <Route path="/four" element={<Four />} />
//           <Route path="/أذكار-الصباح" element={<Morning />} />
//           <Route path="/أذكار-المساء" element={<Evening />} />
//           <Route path="/أذكار-بعد-السلام-من-الصلاة-المفروضة" element={<Apray />} />
//           <Route path="/أذكار-النوم" element={<Bpray />} />
//           <Route path="/أذكار-الإستيقاظ-من-النوم" element={<WakeUp />} />
//           <Route path="/تسابيح-تسبيح-السبحة-أذكار-عظيمة" element={<Tasbih />} />
//           <Route path="/أذكار-الطعام-والشراب-والضيف" element={<Food />} />
//           <Route path="/أذكار-الوضوء" element={<Ablution />} />
//           <Route path="/دعاء-ختم-القرآن-الكريم" element={<Quran />} />
//           <Route path="/أدعية-للميت" element={<Prayer />} />
//           <Route path="/الرقية-الشرعية-من-القرآن-والسن" element={<Legal />} />
//           <Route path="/أذكار-الحج-والعمرة" element={<Hajj />} />
//           <Route path="/أسماء-الله-الحسنى" element={<AlHasani />} />
//           <Route path="/أذكار-الصلاة" element={<Pray />} />
//           <Route path="/فضل الدعاء" element={<Fadl />} />
//           <Route path="/أذكارالمسجد" element={<Mosque />} />
//         </Routes>
//       </MainLayout>
//     </HashRouter>
//   );
// };

// export default App;

import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import MainLayout from "./components/Main/MainLayout";
import One from "./components/Links/One";
import Second from "./components/Links/Second";
import Third from "./components/Links/Third";
import Four from "./components/Links/Four";
import Morning from "./components/LinksBox/Morning";
import Evening from "./components/LinksBox/Evening";
import Apray from "./components/LinksBox/Apray";
import Bpray from "./components/LinksBox/Bpray";
import WakeUp from "./components/LinksBox/WakeUp";
import Tasbih from "./components/LinksBox/Tasbih";
import Food from "./components/LinksBox/Food";
import Ablution from "./components/LinksBox/Ablution";
import Quran from "./components/LinksBox/Quran";
import Prayer from "./components/LinksBox/Prayer";
import Legal from "./components/LinksBox/Legal";
import Hajj from "./components/LinksBox/Hajj";
import AlHasani from "./components/LinksBox/AlHasani";
import Pray from "./components/LinksBox/Pray";
import Fadl from "./components/LinksBox/Fadl";
import Mosque from "./components/LinksBox/Mosque";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="islam-Book" element={<HomePage />} />
          <Route path="one" element={<One />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
          <Route path="four" element={<Four />} />
          <Route path="أذكار-الصباح" element={<Morning />} />
          <Route path="أذكار-المساء" element={<Evening />} />
          <Route path="أذكار-بعد-السلام-من-الصلاة-المفروضة" element={<Apray />} />
          <Route path="أذكار-النوم" element={<Bpray />} />
          <Route path="أذكار-الإستيقاظ-من-النوم" element={<WakeUp />} />
          <Route path="تسابيح-تسبيح-السبحة-أذكار-عظيمة" element={<Tasbih />} />
          <Route path="أذكار-الطعام-والشراب-والضيف" element={<Food />} />
          <Route path="أذكار-الوضوء" element={<Ablution />} />
          <Route path="دعاء-ختم-القرآن-الكريم" element={<Quran />} />
          <Route path="أدعية-للميت" element={<Prayer />} />
          <Route path="الرقية-الشرعية-من-القرآن-والسن" element={<Legal />} />
          <Route path="أذكار-الحج-والعمرة" element={<Hajj />} />
          <Route path="أسماء-الله-الحسنى" element={<AlHasani />} />
          <Route path="أذكار-الصلاة" element={<Pray />} />
          <Route path="فضل الدعاء" element={<Fadl />} />
          <Route path="أذكارالمسجد" element={<Mosque />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;