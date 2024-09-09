import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

const App = () =>{
  return (
  <>
    <Navbar/>
    <Hero/>
    {/* <About/> */}
    <Projects/>
  </>
  );
};

export default App;


// import React, { ErrorInfo, ReactNode } from "react";
// import { About } from "./components/About";
// import { Hero } from "./components/Hero";
// import { Navbar } from "./components/Navbar";
// import { Projects } from "./components/Projects";

// class ErrorBoundary extends React.Component<
//   { children: ReactNode; fallback: ReactNode },
//   { hasError: boolean }
// > {
//   constructor(props: { children: ReactNode; fallback: ReactNode }) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(_: Error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.log("Error:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     }

//     return this.props.children;
//   }
// }

// const App = () => {
//   return (
//     <>
//       <ErrorBoundary fallback={<div>Error in Navbar</div>}>
//         <Navbar />
//       </ErrorBoundary>
//       <ErrorBoundary fallback={<div>Error in Hero</div>}>
//         <Hero />
//       </ErrorBoundary>
//       <ErrorBoundary fallback={<div>Error in About</div>}>
//         <About />
//       </ErrorBoundary>
//       <ErrorBoundary fallback={<div>Error in Projects</div>}>
//         <Projects />
//       </ErrorBoundary>
//     </>
//   );
// };

// export default App;