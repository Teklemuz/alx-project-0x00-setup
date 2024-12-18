import React from "react";
import Button from "../components/Button"; 
import Card from "@/components/Card"; 

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Button Instances */}
      <div className="flex space-x-4">
        <Button title="Small Button" styles="small" shape="rounded-sm" />
        <Button title="Medium Button" styles="medium" shape="rounded-md" />
        <Button title="Large Button" styles="large" shape="rounded-full" />
      </div>

      {/* Card Instances */}
      <div className="mt-6 flex flex-col items-center space-y-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
