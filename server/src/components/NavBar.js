import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>GymLog</Typography>
        <Button
          color="inherit"
          onClick={() => (window.location.href = "/threads")}
        >
          글 목록 보기🔎
        </Button>
        <Button
          color="inherit"
          onClick={() => (window.location.href = "/threads/write")}
        >
          글 작성 하기✍
        </Button>
      </Toolbar>
    </AppBar>
  );
}
