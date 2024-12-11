import {
	Box,
	TextField,
	Button,
	Container,
	Typography,
	Paper,
	Stack,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				backgroundAttachment: "fixed",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<Container
				maxWidth="sm"
				sx={{
					py: 4,
					display: "flex",
					alignItems: "center",

					justifyContent: "center",
				}}
			>
				<Paper
					elevation={8}
					sx={{
						padding: { xs: 3, sm: 4, md: 6 },
						borderRadius: { xs: 2, sm: 4 },
						backgroundColor: "rgba(255, 255, 255, 0.95)",
						backdropFilter: "blur(10px)",
						width: "100%",
						maxWidth: "450px",
					}}
				>
					<Stack spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
						<LoginIcon
							sx={{
								fontSize: { xs: 40, sm: 50, md: 60 },
								color: "primary.main",
							}}
						/>

						<Typography
							variant="h3"
							component="h1"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
								background: "linear-gradient(45deg, #1976d2, #764ba2)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
								textAlign: "center",
							}}
						>
							Login
						</Typography>

						<form style={{ width: "100%" }}>
							<Stack spacing={{ xs: 2, sm: 3 }}>
								<TextField
									label="Username"
									variant="outlined"
									fullWidth
									required
									size="medium"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<PersonIcon color="action" />
											</InputAdornment>
										),
									}}
								/>

								<TextField
									label="Password"
									type={showPassword ? "text" : "password"}
									variant="outlined"
									fullWidth
									required
									size="medium"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<LockIcon color="action" />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													onClick={() => setShowPassword(!showPassword)}
													edge="end"
													size="large"
												>
													{showPassword ? (
														<VisibilityOffIcon />
													) : (
														<VisibilityIcon />
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>

								<Button
									variant="contained"
									type="submit"
									size="large"
									startIcon={<LoginIcon />}
									sx={{
										px: 4,
										py: 1.5,
										borderRadius: 2,
										textTransform: "none",
										fontSize: { xs: "1rem", sm: "1.1rem" },
										background: "linear-gradient(45deg, #1976d2, #764ba2)",
										"&:hover": {
											background: "linear-gradient(45deg, #1565c0, #6a1b9a)",
										},
									}}
								>
									Masuk
								</Button>

								<NavLink
									to="/register"
									style={{ textDecoration: "none", width: "100%" }}
								>
									<Button
										variant="contained"
										size="large"
										fullWidth
										startIcon={<PersonAddIcon />}
										sx={{
											px: 4,
											py: 1.5,
											borderRadius: 2,
											textTransform: "none",
											fontSize: { xs: "1rem", sm: "1.1rem" },
											background: "linear-gradient(45deg, #1976d2, #764ba2)",
											"&:hover": {
												background: "linear-gradient(45deg, #1565c0, #6a1b9a)",
											},
										}}
									>
										Daftar
									</Button>
								</NavLink>
								<NavLink
									to="/"
									style={{ textDecoration: "none", width: "100%" }}
								>
									<Button
										variant="text"
										fullWidth
										sx={{
											textTransform: "none",
											fontSize: { xs: "0.9rem", sm: "1rem" },
										}}
									>
										Kembali ke Beranda
									</Button>
								</NavLink>
							</Stack>
						</form>
					</Stack>
				</Paper>
			</Container>
		</Container>
	);
}
