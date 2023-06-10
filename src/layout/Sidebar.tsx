import { GridItem, List, ListItem } from "@chakra-ui/react"
import aisles from "@/assets/aisles.svg"
import home from "@/assets/home.svg"
import insights from "@/assets/insights.svg"
import deliveries from "@/assets/deliveries.svg"
import orders from "@/assets/orders.svg"
import products from "@/assets/products.svg"
import pickers from "@/assets/pickers.svg"
import merchants from "@/assets/merchants.svg"
import customers from "@/assets/customers.svg"
import settings from "@/assets/settings.svg"

const navList = [
  {
    text: "Home",
    icon: home,
  },
  {
    text: "Insights",
    icon: insights,
  },
  {
    text: "Deliveries",
    icon: deliveries,
  },
  {
    text: "Orders",
    icon: orders,
  },
  {
    text: "Products",
    icon: products,
  },
  {
    text: "Pickers",
    icon: pickers,
  },
  {
    text: "Merchants",
    icon: merchants,
  },
  {
    text: "Customers",
    icon: customers,
  },
  {
    text: "Settings",
    icon: settings,
  },
]

const Sidebar = () => {
  return (
    <GridItem
      width="297px"
      bg="#111820"
      area={"sidebar"}
      maxH="100vh"
      pt="36px"
      pl="76px"
    >
      <img src={aisles} alt="Aisles logo" />

      <List spacing={4} pt="40px">
        {navList.map(({ text, icon }) => (
          <ListItem
            color="white"
            display="flex"
            pt={text === "Settings" ? "160px" : "black"}
            gap="22px"
            fontSize="18px"
            key={text}
          >
            <img src={icon} alt="" />
            {text}
          </ListItem>
        ))}
      </List>
    </GridItem>
  )
}

export default Sidebar
