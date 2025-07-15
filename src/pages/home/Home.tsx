import { useGetTasks } from "../../hooks/useGetTasks";
import TaskCard from "./components/TaskCard";

const Home = () => {
	const { data, isPending, isError } = useGetTasks();
	if (isPending) return "Loading...";
	if (isError) return "Error...";
	return (
		<div className="flex flex-col gap-3">
			{data.map((task) => (
				<TaskCard task={task} key={task.id} />
			))}
		</div>
	);
};

export default Home;
