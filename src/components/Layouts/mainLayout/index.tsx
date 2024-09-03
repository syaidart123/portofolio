import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex justify-center w-full md:container md:w-full lg:w-1/2 text-xl">
      <Sidebar />
      <main className="flex m-2 flex-col justify-center w-full p-4 md:p-0 md:w-4/6 lg:w-5/6 xl:w-4/6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
