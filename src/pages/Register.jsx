import { 
	Container, 
	Typography, 
	Button, 
	Paper, 
	Stack, 
	TextField,
	Box 
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { NavLink } from "react-router-dom";

export default function Register() {
	const handleSubmit = (event) => {
		event.preventDefault();
		// Logic untuk handle submit form
	};

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
			<Container maxWidth="sm">
				<Paper
					elevation={8}
					sx={{
						padding: { xs: 3, md: 6 },
						borderRadius: 4,
						backgroundColor: "rgba(255, 255, 255, 0.95)",
						backdropFilter: "blur(10px)",
					}}
				>
					<Stack spacing={3} alignItems="center">
						<PersonAddIcon sx={{ fontSize: 40, color: "primary.main" }} />
						
						<Typography
							variant="h4"
							component="h1"
							sx={{
								fontWeight: 700,
								background: "linear-gradient(45deg, #1976d2, #764ba2)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
							}}
						>
							Daftar Akun Baru
						</Typography>

						<Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
							<Stack spacing={3}>
								<TextField
									fullWidth
									required
									id="username"
									name="username"
									label="Username"
									variant="outlined"
								/>

								<TextField
									fullWidth
									required
									id="email"
									name="email"
									label="Email"
									type="email"
									variant="outlined"
								/>

								<TextField
									fullWidth
									required
									id="password"
									name="password"
									label="Password"
									type="password"
									variant="outlined"
								/>

								<Button
									type="submit"
									variant="contained"
									size="large"
									startIcon={<PersonAddIcon />}
									sx={{
										py: 1.5,
										borderRadius: 2,
										textTransform: "none",
										fontSize: "1.1rem",
										background: "linear-gradient(45deg, #764ba2, #667eea)",
										"&:hover": {
											background: "linear-gradient(45deg, #6a1b9a, #5b6ed9)",
										},
									}}
								>
									Daftar
								</Button>

								<Stack direction="row" spacing={1} justifyContent="center">
									<Typography variant="body2" color="text.secondary">
										Sudah punya akun?
									</Typography>
									<NavLink 
										to="/login"
										style={{ 
											textDecoration: 'none',
											color: '#1976d2',
											fontWeight: 600
										}}
									>
										Masuk di sini
									</NavLink>
								</Stack>
							</Stack>
						</Box>
					</Stack>
				</Paper>
			</Container>
		</Container>
	);
}
