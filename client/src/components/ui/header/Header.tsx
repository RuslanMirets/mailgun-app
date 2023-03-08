// import { useAppSelector } from "@/store/hooks";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
	// const { user } = useAppSelector((state) => state.user);

	const { logout } = useActions();
	const { user } = useAuth();

	const hadleLogout = () => {
		logout();
	};

	return (
		<header className={styles.root}>
			<Container className={styles.container} maxWidth="md">
				<Box className={styles.body}>
					<Typography>
						Вы вошли как <b>{user && user.email + " " + user.email}</b>
					</Typography>
					<Button variant="contained" onClick={hadleLogout}>
						Выйти
					</Button>
				</Box>
			</Container>
		</header>
	);
};

export default Header;
