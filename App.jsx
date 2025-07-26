import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const StudyDashboard = () => {
  const subjects = [
    {
      name: "FR",
      progress: 70,
    },
    {
      name: "AFM",
      progress: 40,
    },
    {
      name: "DT",
      progress: 20,
    },
    {
      name: "IDT",
      progress: 10,
    },
    {
      name: "Audit",
      progress: 5,
    },
    {
      name: "IBS",
      progress: 0,
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {subjects.map((subj) => (
        <Card key={subj.name} className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{subj.name}</h2>
            <Progress value={subj.progress} />
            <p className="text-sm text-gray-500 mt-1">
              {subj.progress}% completed
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StudyDashboard;