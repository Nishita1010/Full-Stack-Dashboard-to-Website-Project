import React from "react";
import Header from "./Header";
import Editor from "./Editor";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow flex">
        <div className="w-64 text-white">
          <Sidebar />
        </div>
        <div className="flex-1 flex justify-center items-center p-4">
          <Editor />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
