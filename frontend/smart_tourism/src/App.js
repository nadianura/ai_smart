import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./components/feed";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
<Box>
  <Navbar />
  <Stack direction={"row"} spacing={2} justifyContent="space-between">
    <Sidebar />
    <Feed />
    <Rightbar />
  </Stack>
</Box>
  );
}

export default App;
