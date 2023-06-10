import { Grid, GridItem } from "@chakra-ui/react"
import Header from "./Header"
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
      bgColor="#F6F6F6"
    >
      <Header />
      <Sidebar />
      <GridItem overflowY="auto" area={"main"} px="78px" pt="30px">
        {children}
      </GridItem>
    </Grid>
  )
}

export default Layout
