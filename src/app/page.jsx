import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

const HomePage = async () => {
  const loadTasks = async () => {
    // const res = await fetch("http://localhost:3000/api/tasks");
    // const data = await res.json();
    // console.log(data);
    return await prisma.task.findMany();
  };

  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
