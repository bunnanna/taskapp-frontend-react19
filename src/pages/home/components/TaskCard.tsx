import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import type { FC } from "react";
import type { Task } from "../../../services/getTasks";

interface CardProps {
	task: Task;
}
const TaskCard: FC<CardProps> = ({ task }) => {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>
					{task.title}{" "}
					<Badge variant={"default"} className="bg-green-500">
						{task.status}
					</Badge>
				</CardTitle>
				<CardDescription>{task.description}</CardDescription>
				<CardAction className="text-gray-500">
					{dayjs(task.updatedAt).fromNow()}
				</CardAction>
			</CardHeader>
			<CardFooter className="gap-3">
				<Button variant={"default"} className="bg-blue-500 flex-1">
					update
				</Button>
				<Button variant={"destructive"} className="flex-1">
					delete
				</Button>
			</CardFooter>
		</Card>
	);
};

export default TaskCard;
