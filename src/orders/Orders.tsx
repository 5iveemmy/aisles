import Layout from "@/layout"
import {
  Box,
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import threeSticks from "@/assets/threeSticks.svg"
import downArrow from "@/assets/downArrow.svg"
import download from "@/assets/download.svg"
import search from "@/assets/search.svg"
import menu from "@/assets/menu.svg"
import appSort from "@/assets/appSort.svg"
import blackDownload from "@/assets/blackDownload.svg"
import IconBox from "@/components/IconBox"
import ColorCircle from "@/components/ColorCircle"

const tabStyle = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#7C7B7B",
}

const Orders = () => {
  return (
    <Layout>
      <Flex justifyContent="space-between" pb="10px">
        <Text fontSize="23px" fontWeight="700" lineHeight="32px">
          Orders
        </Text>
        <Flex gap="16px">
          <Flex
            p="7px"
            bgColor="#f0f0f0"
            borderRadius="10px"
            height="38px"
            width="131px"
            alignItems="center"
            gap="13px"
          >
            <img src={threeSticks} alt="" />
            <Text
              fontSize="14px"
              lineHeight="18px"
              fontWeight="700"
              color=" #353542"
            >
              Today
            </Text>
            <Box>
              <img src={downArrow} alt="Down arrow icon" />
            </Box>
          </Flex>
          <IconBox icon={download} bgColor="#018992" />
        </Flex>
      </Flex>
      <Flex bg="white" py="23px" px="50px" borderRadius="5px">
        <Box borderRight="1px solid #d7d7d8" pr="102px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Total Order Amount
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            N 0.00
          </Text>
        </Box>
        <Box borderRight="1px solid #d7d7d8" pr="106px" pl="40px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Deliverd Orders
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            654
          </Text>
        </Box>
        <Box borderRight="1px solid #d7d7d8" pr="114px" pl="40px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Pending Orders
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            34
          </Text>
        </Box>
        <Box pl="40px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Cancelled Orders
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            34
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" pt="28px">
        <Text fontSize="23px" fontWeight="700" lineHeight="32px">
          Orders Summary
        </Text>
        <Flex gap="8px">
          <IconBox icon={search} bgColor="#FFFFFF" />
          <IconBox icon={menu} bgColor="#FFFFFF" />
          <IconBox icon={appSort} bgColor="#FFFFFF" />
          <IconBox icon={blackDownload} bgColor="#FFFFFF" />
        </Flex>
      </Flex>
      <Tabs defaultIndex={1}>
        <TabList pb="18px">
          <Tab sx={tabStyle} _selected={{ color: "#000000" }}>
            All Orders
          </Tab>
          <Tab sx={tabStyle} _selected={{ color: "#000000" }} isDisabled>
            <ColorCircle color="#018992" />
            Ongoing
          </Tab>
          <Tab sx={tabStyle} _selected={{ color: "#000000" }} isDisabled>
            <ColorCircle color="#90CAF9" /> Picked
          </Tab>
          <Tab sx={tabStyle} _selected={{ color: "#000000" }} isDisabled>
            <ColorCircle color="#EA4335" />
            Cancelled
          </Tab>
          <Tab sx={tabStyle} _selected={{ color: "#000000" }} isDisabled>
            <ColorCircle color="#B40303" />
            Declined
          </Tab>
          <Tab sx={tabStyle} _selected={{ color: "#000000" }} isDisabled>
            <ColorCircle color="#AD8100" />
            Failed
          </Tab>
          <Tab sx={tabStyle} isDisabled>
            <ColorCircle color="#FFD600" />
            Delivery in Progress
          </Tab>
          <Tab sx={tabStyle} isDisabled>
            <ColorCircle color="#128C2D" />
            Delivered
          </Tab>
        </TabList>
        <TabIndicator height="3px" bg="#018992" />
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default Orders
