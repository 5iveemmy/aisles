import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "./Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      templateAreas={`"sidebar header"
                    "sidebar main"
                    "sidebar main"`}
      gridTemplateRows={"64px 1fr"}
      gridTemplateColumns={"297px 1fr"}
      minH="100vh"
      maxH="100vh"
      overflowY="scroll"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <p>yooo</p>
      <Sidebar />
      <GridItem overflowY="auto" area={"main"}>
        {children}
      </GridItem>
    </Grid>
  )
}

export default Layout
