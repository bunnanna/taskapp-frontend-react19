export interface Task {
	id: number;
	title: string;
	description: string;
	createdAt: number;
	updatedAt: number;
	status: "To-Do" | "Doing" | "Done";
}

export const getTasks = async (): Promise<Task[]> => {
	return [
		{
			id: 1,
			title: "Buy groceries",
			description: "Milk, eggs, bread, and cheese",
			createdAt: Date.now() - 1000000,
			updatedAt: Date.now() - 500000,
			status: "To-Do",
		},
		{
			id: 2,
			title: "Clean the house",
			description: "Living room, kitchen, and bathroom",
			createdAt: Date.now() - 2000000,
			updatedAt: Date.now() - 1000000,
			status: "Doing",
		},
		{
			id: 3,
			title: "Read a book",
			description: "Finish reading 'Atomic Habits'",
			createdAt: Date.now() - 3000000,
			updatedAt: Date.now() - 2000000,
			status: "Done",
		},
	];
};
