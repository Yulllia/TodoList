import * as Yup from 'yup';

export type TodoSchema = {
	title: string;
	description: string;
};
export type TodoList = 
	{
	id: number;
	title: string;
	description: string;
	status: string;
    }

export const ValidationSchema = Yup.object().shape({
	title: Yup.string().required("This field is required!"),
	description: Yup.string().required("This field is required!"),
});