import Layout from "@/layout"
import {
  Box,
  Checkbox,
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
import more from "@/assets/more.svg"
import blackDownload from "@/assets/blackDownload.svg"
import IconBox from "@/components/IconBox"
import ColorCircle from "@/components/ColorCircle"
import { ColumnDef } from "@tanstack/react-table"
import StyledTable from "@/components/StyledTable"

const tabStyle = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#7C7B7B",
}

type tableDataType = {
  date: string
  deliveryTime: string
  orderId: string
  orderPrice: string
  itemNo: number
  merchantName: string
  channel: string
}

const tableData = [
  {
    id: "m5gr84i9",
    date: "10/04/2021",
    deliveryTime: "10/04/2021",
    orderId: "17394_157718054",
    orderPrice: "₦5,000",
    itemNo: 30,
    merchantName: "Jane Anne",
    channel: "Pay on Delivery",
  },
  {
    id: "m5gr84i9",
    date: "10/04/2021",
    deliveryTime: "10/04/2021",
    orderId: "17394_157718054",
    orderPrice: " ₦5,000",
    itemNo: 30,
    merchantName: "Jane Anne",
    channel: "Credit Card",
  },
  {
    id: "m5gr84i9",
    date: "10/04/2021",
    deliveryTime: "10/04/2021",
    orderId: "17394_157718054",
    orderPrice: " ₦5,000",
    itemNo: 30,
    merchantName: "Jane Anne",
    channel: "Credit Card",
  },
  {
    id: "m5gr84i9",
    date: "10/04/2021",
    deliveryTime: "10/04/2021",
    orderId: "17394_157718054",
    orderPrice: "₦5,000",
    itemNo: 30,
    merchantName: "Jane Anne",
    channel: "Credit Card",
  },
  {
    id: "m5gr84i9",
    date: "10/04/2021",
    deliveryTime: "10/04/2021",
    orderId: "17394_157718054",
    orderPrice: "₦5,000",
    itemNo: 30,
    merchantName: "Jane Anne",
    channel: "Credit Card",
  },
  {
    id: "m5gr84i9",
    date: "10/04/2021",
    deliveryTime: "10/04/2021",
    orderId: "17394_157718054",
    orderPrice: "₦5,000",
    itemNo: 30,
    merchantName: "Jane Anne",
    channel: "Credit Card",
  },
]

const tableColumns: ColumnDef<tableDataType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "deliveryTime",
    header: "Delivery Time",
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: (info: any) => (
      <Flex gap="4px" alignItems="center">
        <ColorCircle color="#128C2D" /> {info.getValue()}
      </Flex>
    ),
  },
  {
    accessorKey: "orderPrice",
    header: "Order Price",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: (info: any) => (
      <Text fontSize="13px" fontWeight="700">
        {info.getValue()}
      </Text>
    ),
  },
  {
    accessorKey: "itemNo",
    header: "No of items",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: (info: any) => (
      <Text fontSize="13px" fontWeight="700">
        {info.getValue()}
      </Text>
    ),
  },
  {
    accessorKey: "merchantName",
    header: "Merchant Name",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: (info: any) => (
      <Box position="relative">
        <Text> {info.getValue()}</Text>
        <Flex
          bgColor="rgba(39, 174, 96, 0.2)"
          p="3px"
          position="absolute"
          top="2px"
          height="11px"
          left="65px"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="8px" color="#27AE60">
            New
          </Text>
        </Flex>
      </Box>
    ),
  },
  {
    accessorKey: "channel",
    header: "Channel",
    cell: (info: any) => (
      <Flex justifyContent="space-between">
        <Flex
          justifyContent="center"
          width="fit-content"
          alignSelf="center"
          p="5px 10px"
          borderRadius="8px"
          fontSize="12px"
          fontWeight="500"
          bgColor={info.getValue() === "Credit Card" ? "#F0F0F0" : "#EBF2ff"}
        >
          <Text color="#353542">{info.getValue()}</Text>
        </Flex>
        <img src={more} alt="" />
      </Flex>
    ),
  },
]

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
        <Box borderRight="1px solid #d7d7d8" pr="10%">
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
            ₦ 0.00
          </Text>
        </Box>
        <Box borderRight="1px solid #d7d7d8" pr="10%" pl="40px">
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
        <Box borderRight="1px solid #d7d7d8" pr="10%" pl="40px">
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
      <Tabs position="relative">
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
          <TabPanel p="0px">
            <StyledTable data={tableData} columns={tableColumns} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default Orders
