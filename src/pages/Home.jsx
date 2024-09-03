import React, { Suspense } from "react";
import Navbar from "../components/Navbar";

// Lazy load the TodoCard component
const TodoCard = React.lazy(() => import("../components/Todocard"));

const Todo = () => {
  return (
    <>
      <Navbar />
      <div>THis is Home</div>
      
      {/* Wrap the lazy-loaded component with Suspense */}
      <Suspense fallback={<div>Loading TodoCard...</div>}>
        <TodoCard />
      </Suspense>
    </>
  );
};

export default Todo;
