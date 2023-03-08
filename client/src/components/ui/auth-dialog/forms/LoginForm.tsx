import { Button } from "@mui/material";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "../../FormField";
import { LoginFormSchema } from "@/utils/validation";

const LoginForm: FC = () => {
	const methods = useForm({
		mode: "onChange",
		resolver: yupResolver(LoginFormSchema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<FormField type="email" label="Email" name="email" />
				<FormField type="password" label="Пароль" name="password" />
				<Button
					disabled={
						!methods.formState.isValid || methods.formState.isSubmitting
					}
					type="submit"
					color="primary"
					variant="contained"
				>
					Войти
				</Button>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
