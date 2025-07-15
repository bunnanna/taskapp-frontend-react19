import dayjs from "dayjs";
import type { FC } from "react";
import type { Task } from "../../../services/getTasks";

interface CardProps {
	task: Task;
}
const TaskCard: FC<CardProps> = ({ task }) => {
	return (
		<div className="rounded-2xl flex justify-between border-1 px-3 py-2">
			<div className="flex flex-col gap-1">
				<div className="flex gap-1 items-center">
					<span className="rounded-full px-2 py-1 bg-green-600 text-green-50 text-xs font-light min-w-[50px] text-center">
						{task.status}
					</span>
					<h3 className="text-xl font-bold">{task.title}</h3>
				</div>
				<h4 className="text-base">{task.description}</h4>
			</div>
			<div className="flex flex-col gap-1">
				<div className="text-gray-500">{dayjs(task.updatedAt).fromNow()}</div>
				<div className="flex gap-2">
					<button className="p-2 rounded-lg border cursor-pointer bg-blue-800 text-blue-50">
						update
					</button>
					<button className="p-2 rounded-lg border cursor-pointer bg-red-800 text-red-50">
						delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
