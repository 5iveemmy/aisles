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
    active: true,
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
      pl="42px"
    >
      <img src={aisles} alt="Aisles logo" />

      <List pt="40px" pr="50px">
        {navList.map(({ text, icon, active }) => (
          <ListItem
            color="white"
            display="flex"
            bgColor={active ? "rgb(217, 217, 217, 0.1)" : "none"}
            borderLeft={active ? "3px solid#52BD94" : "none"}
            borderRightRadius="20px"
            fontWeight={active ? "bold" : "none"}
            p="14px"
            pt={text === "Settings" ? "160px" : "14px"}
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
