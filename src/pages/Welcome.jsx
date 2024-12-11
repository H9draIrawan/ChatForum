import { Container, Typography, Button, Paper, Stack } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { NavLink } from "react-router-dom";

export default function Welcome() {
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
				maxWidth="lg"
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
						padding: { xs: 4, md: 8 },
						borderRadius: 4,
						backgroundColor: "rgba(255, 255, 255, 0.95)",
						backdropFilter: "blur(10px)",
						maxWidth: "800px",
						width: "100%",
						my: 4,
					}}
				>
					<Stack spacing={4} alignItems="center" textAlign="center">
						<ForumIcon sx={{ fontSize: 60, color: "primary.main" }} />

						<Typography
							variant="h2"
							component="h1"
							sx={{
								fontWeight: 700,
								background: "linear-gradient(45deg, #1976d2, #764ba2)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
							}}
						>
							Welcome to ForumChat
						</Typography>

						<Typography
							variant="h6"
							color="text.secondary"
							sx={{ maxWidth: "600px" }}
						>
							Bergabunglah dalam komunitas diskusi kami. Temukan topik menarik
							dan bagikan pendapat Anda dengan pengguna lainnya.
						</Typography>

						<Stack
							direction={{ xs: "column", sm: "row" }}
							spacing={2}
							sx={{ mt: 4 }}
						>
							<NavLink to="/login">
								<Button
									variant="contained"
									size="large"
									startIcon={<LoginIcon />}
									sx={{
										px: 4,
										py: 1.5,
										borderRadius: 2,
										textTransform: "none",
										fontSize: "1.1rem",
										background: "linear-gradient(45deg, #1976d2, #764ba2)",
										"&:hover": {
											background: "linear-gradient(45deg, #1565c0, #6a1b9a)",
										},
									}}
								>
									Masuk
								</Button>
							</NavLink>

							<NavLink to="/register">
								<Button
									variant="contained"
									size="large"
									startIcon={<PersonAddIcon />}
									sx={{
										px: 4,
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
							</NavLink>
						</Stack>
					</Stack>
				</Paper>
			</Container>
		</Container>
	);
}
